---
title: Everything I know about tiled web maps
date: 2025-05-02
draft: true
layout: post
includesMermaid: true
---

**Tiled web map** (or **slippy map**) is a term of art for interactive web maps you can pan, tilt and zoom and where data is loaded dynamically when it's needed. This makes it possible to interact with large datasets like ["every bus stop in Switzerland"](https://map.geo.admin.ch/#/map?lang=en&center=2634638.09,1201068.09&z=2.842&topic=ech&layers=ch.swisstopo.zeitreihen@year=1864,f;ch.bfs.gebaeude_wohnungs_register,f;ch.bav.haltestellen-oev;ch.swisstopo.swisstlm3d-wanderwege,f;ch.vbs.schiessanzeigen,f;ch.astra.wanderland-sperrungen_umleitungen,f&bgLayer=ch.swisstopo.pixelkarte-farbe) or ["every building in America"](https://www.nytimes.com/interactive/2018/10/12/us/map-of-every-building-in-the-united-states.html) which would be impractical to download and render as a single image.

Early implementations used pre-built raster tiles, but modern ones tend to deliver tiled vector data that isn't turned into a visible image until it reaches the end-user's device.

## Architecture

Turning raw geographic data into a useful mapping service is a huge problem. Solving it requires at least the following software stack:

{% mermaid %}
flowchart TB
data["Data"]
schema["Vector Tile Schema"]
tile_gen["Tile Generator"]
web["Web UI"]
tile_server["Tile Server"]

data --> tile_gen --> tile_server --> web
schema --> tile_gen
Style --> web
{% endmermaid %}

1. A set of suitable geographic data. The bulk of this is typically an OpenStreetMap export, but many groups add data from NASA, [NaturalEarth](https://www.naturalearthdata.com/) and other sources.
2. A [tile schema](https://wiki.openstreetmap.org/wiki/Vector_tiles#Tile_schemas) containing a list semantically-useful layers for your map data.
3. A tile generator to parse this data, simplify it, sort it into layers according in your schema, slice it into square tiles for every zoom level, and save them to a database
4. A tile server that reads from the database and delivers individual tiles in response to HTTP requests
5. A style document where you specify how each element in your schema should be rendered at each zoom level
6. A user interface that implements controls like zooming or panning, sends well-formed requests to your tile server, parses the resulting data and draws it to the screen in the visual style you specified.

You also need a way to regularly update your data and redeploy your tiles to keep your map current.[^2] Supporting features like search or routing carry their own laundry lists of dependencies.

## Implementation

You have two options:

### 1. Buy a commercial product

Many for-profit companies have implemented some or all of this architecture and sell access to it for a monthly fee.

The most popular of these is called Mapbox. They have well-groomed data for the whole planet [^3], an on-demand tiling service, a tile hosting service, pre-designed style templates, frontend components for every platform, and a web UI to marshal all of this infrastructure.

It's a good service, but it's priced for corporate use and the company has been criticised for [somewhat-abruptly enclosing](https://wptavern.com/mapbox-gl-js-is-no-longer-open-source) their previously open-source software in 2020, engaging in [union-busting](https://web.archive.org/web/20230418234120/https://www.protocol.com/bulletins/mapbox-sued-firing-union-organizers) and supplying software [to the car industry](https://trashmoon.com/blog/2022/reflections-on-12-years-at-mapbox/).

### 2. Assemble an open-source stack

## Design

> A MapLibre style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a JSON object with specific root level and nested properties. [^2]

I think the only viable way to design a high-quality customs basemap (outside of Mapbox) is to more-or-less hand-write a style document.

### Use design tokens

You should limit the number of colours, type treatments and other gestures in your map style and apply them consistently.

A set of statically-defined design tokens is a good way to do this.

{% codetitle "Tokens.js" %}

```js
const colors = {
  roadPrimary: "#12312",
  roadSecondary: "#12312",
}
```

{% codetitle "ksjdhf" %}

```js
import { colors } from "DesignTokens.js"
///...
{
	id: 'street-pedestrian',
	type: 'line',
	'source-layer': 'streets',
	paint: {
		'line-color': tokens.street_tertiary,
	}
}
```

It's useful to extend existing style objects with the spread operator.

### Consider semantic groups before layers

It's a good idea to think about your map style, and structure your code, primarily in terms of semantic feature groups[^1] like `roads`, `buildings` or `landcover`. Once you've established these, you can split them into physical, z-indexed layers for your map style.

This has two advantages:

1. Code organisation matches design intent. You can think in semantically useful terms instead of searching by keyword. Most of the design work happens at the semantic group level, the interleaving doesn't really change much
2. Layer ordering can be driven by design intent, not developer convenience You can interleave layers without loosing your mind

{% mermaid %}
block-beta
columns 10

classDef admin fill:#e5dbf5;
classDef buildings fill:#FFBA35;
classDef roads fill:#FFD584;
classDef transit fill:#C5F0B1;
classDef walking fill:#65D62B;
classDef landuse fill:#eee;

block:semantic:6
columns 1
columns 1
s_admin["Admin"]
s_buildings["Buildings"]
s_roads["Roads"]
s_transit["Transit"]
s_walking["Walking + Cycling"]
s_landuse["Landuse"]
end

block:actual:10
columns 1
a_admin_labels["Admin Labels"]
a_walking_labels["Walking (Labels)"]
a_transit_labels["Transit (Labels)"]
a_roads_labels["Roads (Labels)"]
a_admin0["Admin 0 (Countries)"]
a_admin1["Admin 1 (States/Provinces)"]
a_admin2["Admin 2 (Districts)"]
a_buildings["Buildings"]
a_walking_bridge["Walking (Bridge)"]
a_transit_bridge["Transit (Bridge)"]
a_roads_bridge["Roads (Bridge)"]
a_walking_surface["Walking (Surface)"]
a_transit_surface["Transit (Surface)"]
a_roads_surface["Roads (Surface)"]
a_walking_tunnel["Walking (Tunnel)"]
a_transit_tunnel["Transit (Tunnel)"]
a_roads_tunnel["Roads (Tunnel)"]
a_land["Land"]
a_ocean["Ocean"]
a_background["Background"]
end

class s_admin,a_admin0,a_admin1,a_admin2,a_admin_labels admin
class s_buildings,a_buildings buildings
class s_roads,a_roads_bridge,a_roads_surface,a_roads_tunnel,a_roads_labels roads
class s_transit,a_transit_bridge,a_transit_surface,a_transit_tunnel,a_transit_labels transit
class s_walking,a_walking_bridge,a_walking_surface,a_walking_tunnel,a_walking_labels walking
class s_landuse,a_land,a_ocean,a_background landuse
{% endmermaid %}

Javascript imports work well for this:

```js
import { RoadsBridges, RoadsSurface, RoadsLabels } from "./roads"
import { Countries, States, AdminLabels } from "./admin"

export default {
  RoadsSurface,
  RoadsBridges,
  Countries,
  States,
  RoadLabels,
  AdminLabels,
}
```

### Fade features in and out

You want to

### Outline roads

It's a good idea to outline (or less ambiguously, _case_) roads and other linear features to separate them from the background and correctly display intersections, bridge crossings and tunnels.

To do this, you duplicate the layer, give it a contrasting `paint` colour, slightly increase its `line-width` and sort it below the original layer.

This method produces characteristic visual artifacts when continuous line features are are made up of individual segments on different layers, like a surface road leading to a bridge:

You can avoid this by setting `line-cap: round` on the main layer and `line-cap: butt` on the case.

### Use custom typefaces

- [datenhub-map-fonts](<[text](https://github.com/SWRdata/datenhub-map-fonts)>), see: https://github.com/versatiles-org/versatiles-fonts/issues/11 (Deprecated)

### Dont' use raster layers in base maps

## References

- Chris Amico (2024): _[How to make self-hosted maps that work everywhere and cost next to nothing](https://www.muckrock.com/news/archives/2024/feb/13/release-notes-how-to-make-self-hosted-maps-that-work-everywhere-cost-next-to-nothing-and-might-even-work-in-airplane-mode)_ (Muckrock)
- https://www.geofabrik.de/projects/residential_areas/index.html
- https://osmcode.org/osmium-tool/manual.html#filtering-by-tags
- https://locationiq.com/geocoding
- https://www.geofabrik.de/data/geocoding.html
- Useful OSM dumps: https://download.geofabrik.de/europe/germany.html
- https://github.com/maplibre/font-maker
- https://kschaul.com/post/2023/02/16/how-the-post-is-replacing-mapbox-with-open-source-solutions/

[^1]: The term was popularised by [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Slippy_map) in the mid-2000s.
[^2]: OpenStreetMap alone receives [four million updates per day](https://wiki.openstreetmap.org/wiki/Stats)
[^3]: Mapbox (where I got this idea from) call these groups "style components". In addition to what I'm proposing here, they have component-level settings. See: William Davis (2022): [Foundational Map Design: Principles and our core styles](https://www.youtube.com/watch?v=QDfj9oGVZmE)
[^4]: https://maplibre.org/maplibre-style-spec/
[^5]: Mapbox streets

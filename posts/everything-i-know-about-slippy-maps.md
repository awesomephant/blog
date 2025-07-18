---
title: Everything I know about tiled web maps
date: 2025-05-02
draft: true
layout: post
includesMermaid: true
---

"Tiled web maps" is a term of art for interactive web maps you can pan, tilt and zoom and where data is loaded dynamically as you need it. This makes it possible to interact with large datasets (like ["every bus stop in Switzerland"](https://map.geo.admin.ch/#/map?lang=en&center=2634638.09,1201068.09&z=2.842&topic=ech&layers=ch.swisstopo.zeitreihen@year=1864,f;ch.bfs.gebaeude_wohnungs_register,f;ch.bav.haltestellen-oev;ch.swisstopo.swisstlm3d-wanderwege,f;ch.vbs.schiessanzeigen,f;ch.astra.wanderland-sperrungen_umleitungen,f&bgLayer=ch.swisstopo.pixelkarte-farbe) or ["every building in America"](https://www.nytimes.com/interactive/2018/10/12/us/map-of-every-building-in-the-united-states.html)) that would be unusable when displayed as a single image.

Tiled web maps originally used raster (PNG) images, but modern implementations tend to deliver tiled vector data that isn't turned into a visible image until it reaches the end-user's device.

Tiled web maps are also referred to as "slippy maps", a term popularised by [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Slippy_map) in the mid-2000s.

## Architecture

{% mermaid %}
flowchart TB
data["Data"]
schema["Vector Tile Schema"]
tile_gen["Tile Generator"]
web["Web UI"]
tile_server["Tile Server"]

data --> tile_gen --> tile_server --> web
schema --> tile_gen
Stylesheet --> web
{% endmermaid %}

1. You find a set of suitable geodata. The bulk of this is typically OpenStreetMap, but many implementations add pieces from [NaturalEarth](https://www.naturalearthdata.com/) and their own proprietary data.
2. You write a vector tile schema containing a list semantically-useful layers for your map data.
3. You use a tile generator to parse this data, simplify it, sort it into layers according in your schema and slice it into square tiles for every zoom level. The product of this is some kind of container file.
4. You run a tile server which parses the container and delivers individual tiles via HTTP
5. You deploy a UI that implements any controls you need (two-finger zoom, compass etc.), sends well-formed requests to your tile server, parses the resulting data and draws it to the screen in the visual style you specified.

## Implementation

### Commercial products

There are many for-profit companies that will implement some or all of this stack for you. The biggest provider of custom tiled maps is Mapbox. They wrote a lot of the tech before going private in the mid-2010s. Many of their bigger clients are car manufacturers and delivery companies.

### Open-Source stacks

## Design

### Design tokens

As in other forms of non-fiction visual communication, you should limit the number of colours, type treatments and other gestures in your map style and apply them consistently. A set of statically-defined design tokens is a good way to do this.

### Semantic groups to layers

I think it's a good idea to think about your map style, and structure your code, primarily in terms of semantic feature groups[^1] like `roads`, `buildings` or `landcover`. Once you've established these, you split them into physical, z-indexed layers for your map style.

This has two advantages:

1. Code organisation, you can think in semantically useful terms instead of searching by keyword. Most of the design work happens at the semantic group level, the interleaving doesn't really change much
2. you can interleave layers without loosing your mind

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

### Fading features in and out

You want to

### Outlining roads

It's a good idea to outline roads and other linear features. Outlines separate features from the background, and they're necessary to properly differentiate intersections, bridge crossings and tunnels.

It's not unusual to have continuous line features made up of individual segments on different layers, like a surface road leading to a bridge. You have to style these segments carefully to avoid visual artifacts.

### Using custom typefaces

- [datenhub-map-fonts](<[text](https://github.com/SWRdata/datenhub-map-fonts)>), see: https://github.com/versatiles-org/versatiles-fonts/issues/11 (Deprecated)

### No raster layers in base maps

## References

- Chris Amico (2024): [Release Notes: How to make self-hosted maps that work everywhere and cost next to nothing](https://www.muckrock.com/news/archives/2024/feb/13/release-notes-how-to-make-self-hosted-maps-that-work-everywhere-cost-next-to-nothing-and-might-even-work-in-airplane-mode) (Muckrock)
- Saman Bemel Benrud (2022): [On leaving Mapbox after 12 years](https://trashmoon.com/blog/2022/reflections-on-12-years-at-mapbox/)
- https://www.geofabrik.de/projects/residential_areas/index.html
- https://osmcode.org/osmium-tool/manual.html#filtering-by-tags
- https://locationiq.com/geocoding
- https://www.geofabrik.de/data/geocoding.html
- Useful OSM dumps: https://download.geofabrik.de/europe/germany.html
- https://github.com/maplibre/font-maker
-

[^1]: Mapbox (where I got this idea from) call these groups "style components". In addition to what I'm proposing here, they have component-level settings. See: William Davis (2022): [Foundational Map Design: Principles and our core styles](https://www.youtube.com/watch?v=QDfj9oGVZmE)
[^2]: Das sieht so ähnlich aus wie ein HTTP-Range-Requests im pmtiles-Format, [ist es aber nicht](https://github.com/versatiles-org/versatiles-rs/issues/24#issuecomment-1517567677)

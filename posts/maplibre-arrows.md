---
title: Maplibre Arrows
date: 2026-02-24
draft: false
layout: post
intro: '`@awesomephant/maplibre-arrows` is a maplibre-gl-js plugin for drawing vector arrows at geographic coordinates.'
thumb: assets/maplibre-arrows.png
---

<figure class="post-figure large">
	<div id="map" style="height: 700px"></div>
	<figcaption class="figure__source">
		<p>© Maplibre contributors</p>
	</figcaption>	
</figure>

<script defer src="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.js"></script>
<script defer src="https://unpkg.com/@awesomephant/maplibre-arrows@latest/dist/index.js"></script>

<link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />

<script>
document.addEventListener("DOMContentLoaded", ()=>{
  
const map = new maplibregl.Map({
	container: "map",
	style: "https://demotiles.maplibre.org/style.json",
	center: [-96, 34],
	zoom: 3.3,
	attributionControl: false
});

const arrows = new maplibreArrows(map, {
	arrows: [
		{ layout: "quadratic", lineColor: "#bf3a1a", lineWidth: 38, points: [[-81, 35], [-88, 43], [-82, 41]]},
		{ layout: "quadratic", lineColor: "#bf3a1a", lineWidth: 22, points: [[-95, 43], [-109, 38], [-105, 44]]},
		{ layout: "quadratic", lineColor: "#bf3a1a", lineWidth: 9, points: [[-99, 44], [-110, 48], [-105, 44]]},
		{ layout: "quadratic", lineColor: "#bf3a1a", lineWidth: 12, points: [[-76, 40], [-70, 45], [-75, 44]]},
		{ layout: "quadratic", lineColor: "#bf3a1a", lineWidth: 6, points: [[-70, 46], [-74, 48], [-71, 48]]},
		{ layout: "quadratic", lineColor: "#bf3a1a", lineWidth: 5, points: [[-70, 46], [-70, 50], [-71, 48]]},
		{ layout: "straight", lineColor: "#3062a3", lineWidth: 20, points: [[-76, 26], [-74, 28], [-74, 38]]},
		{ layout: "straight", lineColor: "#3062a3", lineWidth: 5, points: [[-78, 25], [-78, 32]]},
		{ layout: "straight", lineColor: "#3062a3", lineWidth: 13, points: [[-84, 15], [-79, 19]]},
		{ layout: "straight", lineColor: "#13a354", lineWidth: 30, points: [[-120, 40], [-120, 30], [-110, 20]]},
		{ layout: "straight", lineColor: "#13a354", lineWidth: 9, points: [[-108, 19], [-105, 16], [-95, 16]]},
	]
});
})
</script>

## TLDR

I wrote a simple (~250 LOC) [maplibre-gl-js](https://maplibre.org/maplibre-gl-js/docs/) plugin to draw straight and/or curved arrows at geographic coordinates called [`@awesomephant/maplibre-arrows`](https://github.com/awesomephant/maplibre-arrows). It's available on [Github](https://github.com/awesomephant/maplibre-arrows) and [NPM](https://www.npmjs.com/package/@awesomephant/maplibre-arrows).

## Background

I wanted to replicate the arrow graphics from this [NYT story](https://www.nytimes.com/interactive/2025/10/09/world/americas/drug-trafficking-venezuela.html) as an exercise, but maplibre-gl-js has no built-in way of doing that. The solution I eventually arrived at was to construct a [`GeoJSONSource`](https://maplibre.org/maplibre-gl-js/docs/API/classes/GeoJSONSource/) representing the arrow heads and tails as vector features, projecting them to map space and rendering them using two or more (depending on the number of unique arrow colours) `fill` and `line` [layers](https://maplibre.org/maplibre-style-spec/layers).

This also also seemed like a good (ie. small enough) project to wrap my head around the process of building, testing and publishing a piece of open-source software, which I hadn't done outside of work. My strategy was to use as little tooling as possible, so I used `esbuild` for bundling, `tsc` for type declarations and Node's [built-in test runner](https://nodejs.org/api/test.html) for unit tests, and I cut releases manually using the `npm` CLI.

There is [a proposal](https://github.com/maplibre/maplibre-style-spec/issues/789) to add `symbol-line-anchor` property to maplibre's symbol layer which would make this easier and more performant, but it hasn't seen much activity yet.

### Prior work

- [This 2022 forum thread](https://community.retool.com/t/draw-a-simple-arrow-in-mapbox-from-origin-to-destination/13749)
- Another implementation of the same idea I did [for my job](https://static.datenhub.net/apps/components/main/index.html?path=/docs/maplibre-source-arrowsource--docs)

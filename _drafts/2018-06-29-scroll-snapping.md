---
layout: post
title:  "Practical CSS Scroll Snapping"
date: 2018-06-27 10:00:00
tags: ""
thumb: ""
intro: ""
---

CSS scroll snapping is a way to "snap" the viewport to certain elements or locations after a user has finished scrolling.

(GIF here)

 Browser support for CSS scroll snapping has improved significantly since it was [introduced in 2016](https://css-tricks.com/introducing-css-scroll-snap-points/), with Google Chrome, Firefox, Edge and Safari all supporting some version of it.

## Basic Syntax

In the [latest version of the spec](https://www.w3.org/TR/css-scroll-snap-1), scroll-snap-points are defined implicitely by children of the scroll container. This is great because it makes the code more robust: If an element changes its size for whatever reason, the browser will update the parent's snap points automatically and scroll-snapping will continue to work.

```html
<div class="container">
    <section class="child"></section>
    <section class="child"></section>
    <section class="child"></section>
    ...
</div>
```

```css
.container {
    scroll-snap-type: y mandatory;
}

.child {
    scroll-snap-align: start;
}
```

At the time of this writing, only Chrome (from version 69) and Safari support this syntax. However, there is a [polyfill](https://www.npmjs.com/package/css-scroll-snap-polyfill) which works fairly well in my experience.

Firefox, Internet Explorer and Edge still implement an [older version of the spec](https://www.w3.org/TR/2015/WD-css-snappoints-1-20150326/#scroll-snap-points) that allows you to set snap-points manually using the ``repeat``` keyword:

```css
scroll-snap-points-y: repeat(100vh);
```

You can use this alongside the current syntax if your snap-points are equally spaced anyway, like so:

```css
.container {
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(3rem);
    scroll-snap-type: y mandatory;
}
.child {
    scroll-snap-align: start;
}
```

However, I'd argue a more robust method is to use the current syntax exlusively and including a [polyfill](https://github.com/PureCarsLabs/css-scroll-snap-polyfill) to support browsers that don't yet support it. [^1]. This is the method I'm using in the examples below.

## 1. Vertical List

To make a vertical list snap to each list element only takes a few lines of CSS. First, we tell the container to snap along its vertical axis:

```css
.list {
    scroll-snap-type: y mandatory;
}
```

Then, we define the snap-points. Here, we're specifying that the top of each list element is going to be a snap point:

```
.list-element {
    scroll-snap-align: start;
}
```

<p data-height="600" data-theme-id="33564" data-slug-hash="JBjROd" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="Vertical List" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/JBjROd/">Vertical List</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## 2. Horizontal Slider

To make a horizontal slider, we tell the container to snap along its x-Axis:

```css
.list {
    scroll-snap-type: x mandatory;
}
```

Then, we tell the container which points to snap to. Here, I'm defining the center of each list element as a snap point, centering the gallery.

```
.list-element {
    scroll-snap-align: center;
}
```

<p data-height="375" data-theme-id="33564" data-slug-hash="Yjzpzr" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="Horizontal, different sized images" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/Yjzpzr/">Horizontal, different sized images</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## 3. Vertical Full Screen

We can set the snap points directly on the ```<body>``` element:

```css
body {
    scroll-snap-type: y mandatory;
}
```

Then, we define the top of each section as a snap point:

```css
section {
    height: 100vh;
    scroll-snap-align: start;
}
```

<p data-height="300" data-theme-id="33564" data-slug-hash="KBKNxd" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="Vertical Full-Screen" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/KBKNxd/">Vertical Full-Screen</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## 4. Horizontal Full screen

```css
body {
    scroll-snap-type: x mandatory;
}
```

```css
section {
    height: 100vh;
    scroll-snap-align: start;
}
```

<p data-height="574" data-theme-id="33564" data-slug-hash="pZoNGy" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="Horizontal Full-Screen" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/pZoNGy/">Horizontal Full-Screen</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## 5. 2d Image Grid x

We can set the snap points directly on the ```<body>``` element:

```css
.container {
    scroll-snap-type: both mandatory;
}
```

Then, we define the top-left corner of each tile as a snap point:

```css
.tile {
    scroll-snap-align: start;
}
```

<p data-height="698" data-theme-id="33564" data-slug-hash="MBWJKm" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="2d Snapping" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/MBWJKm/">2d Snapping</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Mandatory vs. Proximity
In my experience, the difference between ```scroll-snap-type: mandatory``` and ```proximity``` is pretty subtle. 

## Some thoughts on user experience

Scrolling is probably the most common way we interact with the web. Naturally, people tend to have pretty strong opinions on it. Robin Rendle [coined the term _Scrolljacking_](https://robinrendle.com/notes/scrolljacking/) back in 2013.

The great thing about CSS-scroll-snapping is that you're _not_ taking direct control over the scroll position, you're just giving the browser a list of scroll positions to consider. It's up to the browser to handle these in whichever way is the most appropriate given the platform, input method and user preferences. This means a scrolling interface you build is going to _feel_ just like the native interface (i.e using the same animations etc.) on whatever platform it's viewed on. 

In my experience this works fairly well, especially on mobile. Maybe this is because scroll-snapping is already part of the native UI on mobile platforms (picture the home screens on iOS and Android). The interaction on Chrome on Android feels particularly nice: It's like regular scrolling, except it always comes to a stop on a snap point:

(Video here)

## Conculsion

[^1]: Unfortunately the polyfill doesn't come as a browser bundle, so it's a bit tricky to use if you're not using a build process. The easiest way around this I've found is to link to the script on [bundle.run](https://bundle.run/css-scroll-snap-polyfill@0.1.2) and initializing it using ```cssScrollSnapPolyfill()``` once the DOM is loaded. 
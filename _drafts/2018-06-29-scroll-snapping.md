---
layout: post
title:  "Practical CSS Scroll Snapping"
date: 2018-06-27 10:00:00
tags: ""
thumb: ""
intro: ""
---

CSS scroll snapping was [first introduced in 2016](https://css-tricks.com/introducing-css-scroll-snap-points/). Since then, the spec has

Let's look at some examples.

## 1. Vertical List

To make a vertical list snap to each list element only takes a few lines of CSS

```css
.list {
    scroll-snap-type: y mandatory;
}
.list-element {
    scroll-snap-align: start;
}
```

How neat is that.

<p data-height="600" data-theme-id="33564" data-slug-hash="JBjROd" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="Vertical List" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/JBjROd/">Vertical List</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If we know that every element in the list has the same height (as in the example above), we can add an older version of the spec to get slightly deeper browser support:

```css
.list {
    scroll-snap-type: y mandatory;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(3rem);
}
.list-element {
    scroll-snap-align: start;
    height: 3rem;
}
```

## Horizontal List

## 3. Horizontal, different size elements

This is particularly

<p data-height="375" data-theme-id="33564" data-slug-hash="Yjzpzr" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="Horizontal, different sized images" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/Yjzpzr/">Horizontal, different sized images</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 2. Vertical Full Screen

<p data-height="300" data-theme-id="33564" data-slug-hash="KBKNxd" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="Vertical Full-Screen" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/KBKNxd/">Vertical Full-Screen</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 4. Horizontal Full screen

<p data-height="574" data-theme-id="33564" data-slug-hash="pZoNGy" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="Horizontal Full-Screen" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/pZoNGy/">Horizontal Full-Screen</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 6. 2d Image Grid x
<p data-height="698" data-theme-id="33564" data-slug-hash="MBWJKm" data-default-tab="result" data-user="maxakohler" data-embed-version="2" data-pen-title="2d Snapping" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/MBWJKm/">2d Snapping</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Should you do this at all?

Some people have strong opinions on scrolling, usually to the effect of _don't mess with it_.

Here's my thoughts on it. Scroll-snapping as a _UI pattern_ has been around for a long time. It's pretty common on mobile - the iOS homescreen is essentially a horizontal slider with scroll-snapping enabled. To me, the demos above feel pretty natural on mobile.

It's a different story on desktop, where scoll-snapping isn't a part of the native UI. 

## What about JavaScript?

There's a number of libraries that do this, and some do it pretty well. If you're doing more than just scroll-snapping (think infinite scrolling, showing things at different scroll positions), these might be worth looking into.

However, it's very difficult for a Javascript library to replicate native scrolling behaviour across however many browsers and devices. So it's never going to feel as nice as native scrolling, which is what CSS snap-points can provide. You could set scroll-snapping propoerties _using_ Javascript to do complicated things. Maybe some of these libraries will eventually transition to that in the future. 

## How reliable is it?
There's all kinds of ways people can scroll a website. As I'm writing this on a desktop computer, I can think of all kinds of ways to scroll:

1. The mousewheel
2. The middle-click and move the mouse
3. dragging the scrollbar
4. clicking on the little scrollbar arrow
5. clicking on the scrollbar track 
6. arrow keys
7. page up, page down keys
8. page start and end keys
9. tabbing

Add to this touchpad gestures if you're on a laptop

10. touchpad flicking

Maybe see it more as a progressive enhancement
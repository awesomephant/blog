---
layout: post
title: Continuous Typography Tester
date: 2021-02-02
tags: work
category: Experimental
---

{% fig "/assets/continuous-type/tester.png" "" "A screenshot of a user interface with a large paragraph of dummy text on the left, and a series of function graphs on the left" "[awesomephant.github.io/continuous-typography](https://awesomephant.github.io/continuous-typography/)" "big" %}

I finally got around to writing a demo of what a design tool for [continuous typography](/posts/continuous-typography/) might look like. Change the width of the viewport on the right, manipulate the graphs on the right, and observe how the paragraph changes. 

The tool lets shape a sample paragraph by defining its typographic properties as linear functions of the viewport width. This is a broad simplification of the ideas I talk about above - ideally, you wouldn't be constrained to a single function type and a single input variable. But I think it's enough to prove the point that a continuous approach makes it possible to produce typography that is *correct* (whatever that might mean in a given application) across the whole range of whichever input paremeters you're considering.

I decided not to have the tool output CSS in its first iteration, though it would [technically be possible](https://medium.com/@jakobud/css-polyfluidsizing-using-calc-vw-breakpoints-and-linear-equations-8e15505d21ab) to replicate the functions it uses with a combination of media queries, ```calc()``` declarations and ```vw``` units. But I'm more interested in continuous typography as a design approach than its technical implementation, so I just calculate each function's current value in Javascript and apply the result as an inline style. I might change that if a more elegant implementation lands in CSS.

The tool uses the freshly-released [Source Serif 4](https://github.com/adobe-fonts/source-serif/releases/tag/4.004R) by Frank Grießhammer as a test font, mostly because it has an axis for optical size that's useful here.

**[Play with the tool here](https://awesomephant.github.io/continuous-typography/)**, or [read more about its motivations](/posts/continuous-typography/).
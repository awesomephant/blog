---
layout: post
title: Space Lapse
intro: Lettering and graphic design for the RCA Sculpture's delayed graduation show 
date: 2021-01-05
tags: work
category: Lettering
draft: true
---

{% fig "/assets/space-lapse/hero.svg" "" "The words 'Space Lapse' are rendered in soft, black pixels." "" "full" %}

For the main lettering, I rendered the title of the show on a 5x3 grid. I looked at a number of references for this: [This 1968 poster](https://www.stedelijk.nl/en/exhibitions/wim-crouwel#image-40975) by Wim Crowel on my mind. The typeface TINY shares the same grid (5x3 is the smallest size you can render the alphabet with a degree of clarity). I also like Rutherford Craze's MD System 8, particularly in its rounded cuts.

I closed up the spaces between the letters and the two lines, so the shapes melt into each other, forming unexpected shapes and counter-shapes. 

After I had worked out the letterforms on paper, I wrote a [drawbot-skia](https://github.com/justvanrossum/drawbot-skia) script to produce the vectors. This is the first time I've used drawbot for production work, and it was great. Applying the tools of software development to a design problem feels good to me.

{% fig "/assets/space-lapse/overlay-black.gif" "We animate the lettering by cycling the input array." "The words 'Space Lapse' are rendered in black pixels. They shift upwards ina  continuous loop." "" "small" %}

 I used a modified version of the same scipt to produce an animated version of the lettering.

 A cleaned-up version of this script is [available on Github](https://github.com/awesomephant/drawbot-experiments/blob/main/scripts/grid.py).

The supporting typeface is Everson Mono by Michael Everson.

{% fig "/assets/space-lapse/sl-poster.png" "Poster" "" "" "big" %}

{% fig "/assets/space-lapse/pattern-2.png" "Two-colour version of the lettering, unused." "" "" "" %}

{% fig "/assets/space-lapse/drawing-2.jpg" "Drawing" "" "" "" %}

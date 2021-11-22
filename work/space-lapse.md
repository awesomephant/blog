---
layout: post
title: Space Lapse
intro: Lettering and graphic design for the RCA Sculpture's delayed graduation show.
date: 2021-01-05
tags: work
category: Lettering
draft: false
---

{% include fig.liquid, src: "/assets/space-lapse/hero.svg", alt: "The words 'Space Lapse' are rendered in soft, black pixels.", class: "full" %}

For the main lettering, I rendered the title of the show on a 5x3 grid. I looked at a number of references for this: [This 1968 poster](https://www.stedelijk.nl/en/exhibitions/wim-crouwel#image-40975) by Wim Crowel was on my mind. I also like the soft cuts of [MD Eight](https://mass-driver.com/typefaces/md-eight), and my lettering shares the 5x3 grid with [Tiny](https://velvetyne.fr/fonts/tiny/).

After I had worked out the letterforms on paper, I wrote a [Drawbot](https://github.com/justvanrossum/drawbot-skia) script to produce the vectors. This is the first time I've used Drawbot for production work, and it felt great. There's something exciting about leaving standard design software behind and applying a whole new toolchain to a real-world design problem.

Building the lettering with code allowed me to produce things like an animated version of the lettering very easily, just by changing a few input variables.

The supporting typeface is [Everson Mono](https://evertype.com/emono/) by Michael Everson.

{% include fig.liquid, src: "/assets/space-lapse/overlay-black.gif", alt: "The words 'Space Lapse' are rendered in black pixels. They shift upwards in a continuous loop.", class: "small" %}

The show announcement is up on the [Royal Society of Sculptor's website](https://sculptors.org.uk/whats-on/2021/exhibition/space-lapse-rca-sculpture-2020), and the sourcecode for the identity is [on Github](https://github.com/awesomephant/drawbot-experiments).
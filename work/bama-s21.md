---
layout: post
title: BaMa 21
date: 2021-07-05
tags: work
category: Event
intro: Online exhibition website for the 2021 graphic design cohort (BA and MA) at HS Mainz.
---

{% include "fig.liquid", src: "/assets/bama-screenshot.png", alt: "Browser screenshot showing degree show website", class: "big"%}

## Design notes

The central piece of ornamentation on the site is a set of animated lines meant to evoke a curtain flowing in the breeze (the title of the show – _Lüften_ – roughly translates to _letting in fresh air_). I modelled these as follows:

- The two outermost lines drive the animation. Each one is controlled by three separate Perlin noise functions (two in the x-direction, one in y) which are added to produce the on-screen movement.
- All the other lines interpolate between the two control lines. They all have the same number of points, so the interpolation is a relatively simple operation.

This recipe produces a design space with a huge number of variables. I tend to think the way to get a handle on a space like this is to build tooling to explore it. If you hit **T** on your keyboard, you'll see the little control window I used to find the set of parameters that produce the right effect.

{% include "fig.liquid", src: "/assets/bama-controls.png", alt: "Browser screenshot showing control panel overlaid on website"%}

I also built a page to [produce printed labels for the show](https://bama.hs-mainz.de/sose21/labels/). The labels are generated from the same markdown files as the rest of the site, so the two should always be in sync. I got the idea from this from [MoMa's wall label generator](https://www.systemantics.net/portfolio/1351_moma_wall_label_generator).[^1]

The typeface is _[BW Modelica](https://brandingwithtype.com/typefaces/bw-modelica-lgc-ss014https://brandingwithtype.com/typefaces/bw-modelica-lgc-ss014)_, by [Alberto Romanos](http://www.albertoromanos.com/)/[Branding with Type](https://www.brandingwithtype.com/).

Design by Thea Arndt, Lina Becker and Melanie Abaron. Supervised by Mareike Knevels, Marie-Theres Birk, Lilly Gothe and me, development by me.

## Tech notes

The site is built with [Eleventy](https://www.11ty.dev/) and [Netlify CMS](https://www.netlifycms.org/). I set up a staging environment on Netlify (the hosting platform) so Netlify (the CMS) would work with minimal setup. We used that to collect everyone's information, and on launch day I just ran the build on my own machine and FTP'd the result up to our production server. There was probably a more elegant way of doing that, but for a site I'm only going to deploy a handful of times, I don't really mind.

This is probably the most accessible degree show site I've built. It's fully keyboard accessible, we respect `prefers-reduced-motion`, and we wrote real alt text for all ~250 images on the site. Lighthouse scores it 100/100 for accessibillity.

View the live site at **[bama.hs-mainz.de/sose21](http://bama21.maxkohler.com/)** (archived), and if you happen to be in Mainz, Germany, between 6th and 16th July, get tickets to see the show at [terminland.de/HSMainz_Raumbuchung](https://www.terminland.de/HSMainz_Raumbuchung/).

[^1]: I couldn’t find any technical information about the MoMa label generator, but my sense is it works similar to mine - you get the information from some centralised database, typeset it with HTML and CSS, and print it right from the browser. Rob Giampietro has a [great long post](https://linedandunlined.com/archive/designing-a-new-moma/) about the MoMa redesign, including a section about the labels about halfway in.

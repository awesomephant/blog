---
layout: post
title: The Way a Map in Your Mind Works
intro: Portfolio website for Oliver Boulton, an artist and book designer working between Paris and London 
date: 2021-03-12
tags: work
category: Portfolio
---

{% fig "/assets/boulton/boulton-1.png" "[oliverboulton.com](http://oliverboulton.com/)" "Screenshot of web browser showing oliverboulton.com. A scanned fashion magazine is visible next to small description text.' " "" "big"%}

{% fig "/assets/boulton/boulton-2.png" "[oliverboulton.com](http://oliverboulton.com/)" "Screenshot of web browser showing the 'Information' page on oliverboulton.com. Several paragraphs of text about Oliver are visible text to a project timeline and a colophon. " "" "big"%}

{% fig "/assets/boulton/boulton-3.png" "[oliverboulton.com](http://oliverboulton.com/)" "Screenshot of web browser showing the directorty page on oliverboulton.com. A list of project titles is visible on the right, while a detailed description of a single book project is on the left. The type is white on  a deep brown-green background." "" "big"%}

Since Oliver has some development skills himself, we decided to build the site together through standard version control. We're using [Eleventy](https://github.com/11ty/eleventy/) to build the site from a series of Markdown and JSON data files and Liquid templates. The frontend interactions are written in plain Javascript, and for the moment the site is hosted on standard shared hosting.

The big shortfall of the Jamstack approach are the images: The site has hundreds of them, and most are high-resolution scans. We're using [Eleventy-img](https://github.com/11ty/eleventy-img) to scale and convert these to web-friendly formats, but that process takes around ten minutes — far too long to run everytime you hit Cmd-S, and still pretty hefty to run on something like Github Actions. There is a way to [cache the generated images](https://github.com/11ty/eleventy-img/issues/51) but we haven't managed to get this to work reliably yet.

The site is typeset in [Helvetica Now](https://www.monotype.com/fonts/helvetica-now) from Monotype Studio and [Everson Mono](https://evertype.com/emono/) by Michael Everson. This is the first site where I've implemented [Continuous Typography](/posts/continuous-typography/) from the start — resize your browser to see it in action.

Principal design by Oliver Boulton, principal development by me.

View the live site at **[oliverboulton.com](http://oliverboulton.com/)**. If you're interested in how it was built, the source code is licensed under CC (BY)-(NC)-(SA) and [available on Github](https://github.com/awesomephant/map-in-your-mind).
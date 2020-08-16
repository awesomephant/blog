---
layout: post
title: Camberwell Graphic Design Show 20
date: 2020-07-30
tags: work
category: Event
---

![Wish you were here website screenshot](/assets/ccw2020.png)
[wishyouwereherecamberwell.com](https://www.wishyouwereherecamberwell.com/)

Online exhibition website for the 2020 Graphic Design cohort at Camberwell College of Arts. The students write about their show:

> *Wish You Were Here 2020* is an unprecedented exhibition for unprecedented times, made by unprecedented graduates. A month ago, we would’ve been together in our Graphic Design studio on Peckham Road, celebrating the end of our three years of studying at Camberwell College of Arts. While the pandemic still keeps us apart from each other, *Wish You Were Here* brings us together virtually to discover the works of this year’s graduates. 

Like most of my recent projects, this is built on the Jamstack. I'm using Eleventy as the static site generator, and Netlify for hosting. Initially I kept the data for this site in a Google spreadsheet (I did the same thing on [last year's site](https://maxkoehler.com/work/camberwell-19/)), but the information became complicated enough to make this unwieldy.

Instead, I spun up a headless CMS called [Sanity](https://www.sanity.io/), moved all the data from the spreadsheet into that and gave the Camberwell team editing access. The build process pulls the data from the Sanity API, and Eleventy builds it into static HTML files. Sanity has a nice image transformation API, which I use to generate different-sized preview images and to serve them as ```webp``` if the browser supports it. Here's a diagram:

![Flow diagram illustrating the deployment setup described above](/assets/ccw-flow.png)

Typefaces in use are *Drury Lane* by Nick Curtis and *Work Sans* by Wei Huang. Art direction by [Chloe Tabarie](https://www.wishyouwereherecamberwell.com/chloe-tabarie/), [Justina Čiačytė](https://www.wishyouwereherecamberwell.com/justina-ciacyte/), and [Matty Palmer](https://www.wishyouwereherecamberwell.com/matty-palmer/). AR development by [Chuiqing Tiger Yang](https://www.wishyouwereherecamberwell.com/chuiqing-tiger-yang/).

View the live site at [wishyouwereherecamberwell.com](https://www.wishyouwereherecamberwell.com/) from 30th June 2020, 6pm BST.

## Coverage

- [Represent Blog](https://represent.uk.com/blog/wish-you-were-here-2020-by-camberwell-college-of-arts/)

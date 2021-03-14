---
layout: post
title: Windowcleaner Society
date: 2020-07-26
tags: work
category: Editorial
---

![Windowcleaner website screenshot](/assets/windowcleaner.png)
[cleanyourwindow.co.uk](https://www.cleanyourwindow.co.uk/)

> Window Cleaner is a society and open platform established at the Royal College of Art in 2019. We aim to disseminate the middle ground between art and activism through our breathing and living collaborative reference list. But also, to have an open space to activate the political art discourses through our published articles and hosted events, such as lectures, exhibitions and workshops.

This is the first production site I built on the Jamstack – Built using a static site generator ([Eleventy](https://www.11ty.dev/)) and deployed to a static CDN (Netlify). Because [Jose](http://josegarciaoliva.com/), who runs the society, was already comfortable with version control, we were able to work on the site directly through git without spinning up a separate CMS.

The articles and events are authored as Markdown files, while the collaborative reference list is pulled in from a Google spreadsheet during the build process. Because the site is pre-built, I have to run some Javascript on the frontend to work out [time-sensitive information](/posts/2020-08-24-where-does-logic-go-on-jamstack-sites/), like whether an event is upcoming, ongoing or past.

I was pretty happy to finally find a use for Robert Slimbach's [Acumin Pro](https://acumin.typekit.com/). The heavier weights feel especiallly appropriate on this site focused on activism.

View the live site at **[cleanyourwindow.co.uk](https://www.cleanyourwindow.co.uk/)**.
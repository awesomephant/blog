---
layout: post
title: Want to write a hover effect with inline CSS? Use CSS Variables.
date: 2021-03-26
includesMath: false
includesMusic: false
intro: ""
tags: post
publication: CSS-Tricks
---

I just published a little technique for pushing what you can do with CSS inline styles over on CSS Tricks. Here's how I pitched it:

> Say you have a blog, and you want each post to have a different background colour when you hover over it - for art direction, say. You can't do that with inline styles! But I learned a trick: You write the colour value into a CSS variable (scoped to the post element), then use that to define the hover effect in your regular CSS.

This works for hover effects, but comes in handy in other situations too. For instance, I use it to achieve the ```position: sticky``` effect on [this site](/). That's in fact where I learned the trick.

I go into a little more detail [in the article](https://css-tricks.com/want-to-write-a-hover-effect-with-inline-css-use-css-variables/).
---
layout: post
title: Node Paint
date: 2019-08-01
tags: work
category: Interactive
---

![Screenshot](/assets/np/Capture-19.PNG)

An experimental web-based drawing tool where you configure the pen by connecting nodes in a graphical programming interface.

This started [as an attempt to reverse-engineer](https://codepen.io/maxakohler/pen/ydqVjO) the branding for RCA Show 2019 by [Regular Practice](http://www.regularpractice.co.uk/). The idea for the node-based editor comes primarily from [Blender's shader editor](https://docs.blender.org/manual/en/latest/editors/shader_editor/index.html) (because I use it a lot), though the idea of [Flow-Based Programming](https://en.wikipedia.org/wiki/Flow-based_programming) is much older than that. I'm using [IBM Plex Sans](https://www.ibm.com/plex/), which works beautifully as an interface typeface.

It's also part of a continued exploration of visual expressions of mathematics – see [Gradient Drawings](https://awesomephant.github.io/2019/typecast/) from earlier this year. I like the idea that even though I only wrote a handful of different nodes (a couple of colour pickers and some basic math functions), the space of possible pens is enormous.

View the [live app here](https://awesomephant.github.io/node-paint/) (best viewed on desktop). The code is [on Github](https://github.com/awesomephant/node-paint).

![Screenshot](/assets/np/Capture-23.PNG)

This is also my first React app. I made a conscious decision to write this in React because building a real-world thing tends to be the best way to learn new technology for me. It probably slowed me down (especially at the start, when I was still coming to grips with JSX and the top-down dataflow), but it's worth the effort.

I didn't read much outside the [official React documentation](https://reactjs.org/tutorial/tutorial.html), which has to be one of the best pieces of technical writing out there. I'm convinced the quality of the onboarding process is a major reason why React is as succesful as it is.
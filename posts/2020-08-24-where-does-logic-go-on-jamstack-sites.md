---
layout: post
title: Where Does Logic Go on Jamstack Sites?
date: 2020-08-24
includesMath: false
includesMusic: false
intro: ""
tags: post
publication: CSS-Tricks
external_link: https://css-tricks.com/where-does-logic-go-on-jamstack-sites/
---

I just wrote about that question over on [CSS-Tricks](https://css-tricks.com/where-does-logic-go-on-jamstack-sites/). I go into some detail there, but the argument boils down to this: Even though a basic idea of the Jamstack is that you do as much of your logic as you can during your build process (earlier in the programme lifecycle, if you will), you still have options. Namely:

- Do the logic in your head and write down the results
- Move it into the build process
- Put it into an edge worker
- Do it in Javascript on the user's device after they've loaded the site.

Recently (like on the [Wish you were here](https://maxkoehler.com/work/camberwell-2020/) site), I tend to do a combination of all of the above.

Again, you can [read the full piece on CSS-Tricks](https://css-tricks.com/where-does-logic-go-on-jamstack-sites/).
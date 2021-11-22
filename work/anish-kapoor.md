---
layout: post
title: Anish Kapoor
intro: Rebuilt catalogue website for the sculptor Anish Kapoor.
date: 2021-09-08
tags: work
category: Catalogue
draft: false
thumb: https://maxkoehler.com/assets/kapoor.png
---

{% include fig.liquid, src: "/assets/kapoor.png", alt: "Browser screenshot showing website with hundreds of links in grey, blue, red, green, and black. Title reads: Anish Kapoor", class: "big"%}

[Brighten the Corners](https://brightenthecorners.com/) approached me looking to add some quality-of-life improvements to the long-running website of the British sculptor Anish Kapoor. After some investigation, we decided the best move would be to rebuild the site from scratch. This would give us a solid foundation for this round of new features and bugfixes, and whatever else might follow down the line.

Some notes in no particular order:

- The site runs on Wordpress
- I rebuilt the theme with the Timber/ACF combination (the *[Upstatement](https://upstatement.com/) Stack*, as I tend to think of it). I installed Timber as a [Composer](https://getcomposer.org/) dependency (not as a Wordpress plugin), which feels great and also means I get to upgrade to [Timber 2](https://timber.github.io/docs/v2) right away when it comes out.
- The site has an interesting interaction: When you're on the homepage, you can filter the posts by one of four categories - that part is easy. But when you click on one of the links, we *remember* the filtering choice you made, and show you a link to the next post in that category at the bottom of the page. I ended up solving it with `localStorage`: We save your filter choice, then fire off an Ajax request to a little PHP function that finds the right link and returns it.
- I updated PHP, Wordpress, and everything else that could be updated. I also set everything to auto-update itself, so hopefully the site [will decay](https://css-tricks.com/decaying-sites/) a little slower now.
- I moved the whole site to HTTPS.

Design by Brighten the Corners, original development by Jim Lundblad. View the site at **[anishkapoor.com](https://anishkapoor.com/)**.
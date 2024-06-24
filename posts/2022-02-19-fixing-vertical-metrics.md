---
layout: post
title: How to fix inconsistent vertical metrics in web fonts
date: 2022-02-19
includesMath: false
includesMusic: false
tags: post
draft: false
is_featured: true
thumb: https://www.maxkohler.com/assets/type-twitter.jpg
---

Here's a really specific problem I've run into a handful of times building websites with custom fonts: I set some type on my Windows machine, and everything works as expected. But when I pull up the same page on a Mac (regardless of the browser) the line height is totally different.

My first thought was that something was wrong with my CSS – maybe there's a rogue `line-height` declaration that gets applied in one place and not the other? But it turned out the problem was actually the font itself: It had different vertical metrics for each platform.

## How to fix the problem

The best option is to get whoever produced the font to re-export it with the correct metrics. This is especially true for commercial typefaces, which you're usually not allowed to modify. Failing that, you can generate new font files yourself in one of two ways:

### 1. FontSquirrel

Upload the file to the [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator), switch to Expert mode, check "Auto-Adjust Vertical Metrics", and download the generated fonts. If you're lucky, this will repair the inconsistent metrics and your type will render correctly.

### 2. Fonttools

If this doesn't work, you can adjust the metrics manually using the command line and a text editor.

Install [fonttools](https://github.com/fonttools/fonttools#what-is-this) and [brotli](https://github.com/google/brotli) with `pip install fonttools brotli`. Then `cd` your way to your project folder and run `ttx borked-font.ttf`. This will convert the binary `ttf` into a human-readable XML file called `borked-font.ttx`.

Open the `ttx` file in your text editor and _look for problems_. Specifically, you want to ensure that:

- `fsSelect` bit 7 (the _eighth_ number in the sequence) is set to `1`
- `sTypoAscender` is equal to `hheaAscender` (meaning the `<ascent>` key in the `<hhea>` table)
- `sTypoDescender` is equal to `hheaDescender`
- `sTypoLinegap` is equal to `hheaLinegap`
- `winAscent` is equal to the largest `ymax` value in the font
- `winDescent` is equal to the lowest `ymin` in the font _times -1_

When you're done, run `ttx --flavor woff borked-font.ttx` to convert it back into a `woff` file. Set `--flavor woff2` to compile straight to `woff2`, or drop the flag altogether to produce an uncompressed `ttf`. Load up the new file on your website, and see if you solved the problem.

## Background

OpenType fonts are complicated pieces of software. In addition to the actual letterforms (stored as Bézier curves), they contain _tables_ containing the data needed to map these outlines to unicode points and enable things like contextual alternates, kerning pairs, variable fonts, and whatever else you might want to do.

One of the things that's stored in these tables is the font's _vertical metrics_. This is a set of numbers that define the height of the ascenders, the depth of the descenders, and the recommended linespacing. Rendering engines use these numbers to calculate where the first baseline of a text should fall, what the distance between subsequent lines should be, and how much padding to apply below the last line. They're roughly equivalent to the space above and below the raised letterform on a metal sort.

{% include "fig.liquid", src: "/assets/type.png", alt: "Drawing of relief letter used in letterpress printing", class: "thumbnail"%}

For [historical reasons](https://docs.microsoft.com/en-us/typography/opentype/), vertical metrics are stored in _three_ different places (called `hhea`, `OS/2 typo` and `OS/2 win`), and different rendering engines get their information from different ones. Apple devices generally use `hhea`, Windows uses either `OS/2 typo` or `OS/2 win`, and old versions of MS Office use `OS/2 win` exclusively. If the numbers in these tables aren't the same, you can end up in a situation where type renders differently in different browsers, design tools, or operating systems.

You can get out of that situation as a user by synching up the numbers yourself, like we did above. First, we set bit 7 in `fsSelect` to `1` to [activate a setting](https://docs.microsoft.com/en-us/typography/opentype/spec/os2#fsselection) called `USE_TYPO_METRICS`. This tells browsers on Windows to use the values in `OS/2 typo` rather than `OS/2 win`. Then we synched up the values in `hhea` and `OS/2 typo` and set `OS/2 Win` to match the tallest ascender and deppest descender in the font to avoid clipping. Finally we recompiled the font with the new metrics, hopefully solving our issue. There are other approaches to settings vertical metrics, but this is the one [recommended by Glyphs](https://glyphsapp.com/learn/vertical-metrics#g-the-webfontstrategy-2019) and the [Google Fonts Team](https://github.com/googlefonts/gf-docs/tree/main/VerticalMetrics#vertical-metrics).

If you're a type designer, you can avoid the problem altogether by setting the metrics correctly as you design the typeface, and using [automated testing](https://github.com/googlefonts/fontbakery) to catch inconsistencies in your build process.

## Notes

- Thanks to [FontSquirrel and Neil on Stackoverflow](https://stackoverflow.com/questions/10044130/custom-fonts-with-different-vertical-metrics-between-oss), who sent me down this rabbit hole.
- In case I ever need it, here is the [OpenType Spec](https://docs.microsoft.com/en-us/typography/opentype/spec/hhea).

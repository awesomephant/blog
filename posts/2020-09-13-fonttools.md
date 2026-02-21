---
layout: post
title: FontTools Notes
date: 2020-09-13
includesMath: false
includesMusic: false
intro: 'Running notes on FontTools, the Python library for font engineering'
tags: post
thumb: ''
draft: false
---

[FontTools](https://fonttools.readthedocs.io/en/latest/) is _a family of libraries and utilities for manipulating fonts in Python_. From what I can tell, it's the industry-standard way to automate things in font production. I don't really know enough about type design to understand _what it is_ people automate this way, but I gather that it ranges from [outputting trial fonts](https://github.com/arrowtype/fonttools-intro/blob/main/examples/02-make-trial-font.py), wrangling metadata, to fully [auto-generating italics](https://github.com/googlefonts/roboto/blob/master/scripts/lib/fontbuild/italics.py) (wild).

What I was trying to do was much simpler: I needed a squished (ie. scaled along the x-axis) version of an existing font. I realise that this is different to an actual condensed version, but here the project called for this specific effect.

Font files are very complicated: They contain all kinds of metadata and code in addition to the actual outlines. And often those aren't simple vector lines, but built up from components and linked together with their own logic. To deal with this complexity, FontTools has a series of abstractions I had to get my head around before I could get anywhere.

## Pens

You don't work with outlines directly but with a different concept called a pen. A pen is what turns an outline into a _drawing_. A drawing can be a rendering of the outline, but it could also be data about the outline in text form, or it could be a glyph. The steps to do my scaling operation are:

1. Load the binart TTF file (I don't have the source files here)
2. For every glyph in the glyphset, draw the glyph onto a `transformPen`.
3. The transformPen can probably draw direcly back to a TTF pen

- [https://github.com/arrowtype/fonttools-intro] Stephen Nixon
- https://github.com/lynneyun/Tutorials/blob/6cabd407054431559b30d66d9b664462bb1d58b7/FontTools%20%26%20DrawBot/Navigating%20TTFs%20with%20fontTools.ipynb
- https://simoncozens.github.io/fonts-and-layout/concepts.html
- https://simoncozens.github.io/fonts-and-layout/opentype.html

```python
# Import statements omitted

INPUT_PATH = "./input.ttf"
OUTPUT_PATH = "./input_transformed.ttf"

with TTFont(INPUT_PATH) as f:
    glyfTable = f["glyf"]
    glyphSet = f.getGlyphSet()

    for glyphName in glyphSet.keys():
        t = Scale(.8, 1)

        # Resolve glyph components
        dc = DecomposingRecordingPen(glyphSet)
        transformPen = TransformPen(dc, t)
        glyphSet[glyphName].draw(transformPen)

        # Draw onto path pen
        path = pathops.Path()
        pathPen = path.getPen()
        dc.replay(pathPen)

        # create new TTGlyph from Path
        ttPen = TTGlyphPen(None)
        path.draw(ttPen)
        glyfTable[glyphName] = ttPen.glyph()

    f.save(OUTPUT_PATH)
```

Example of TTF -> Pathops -> TTF https://github.com/fonttools/fonttools/blob/3ad201cbe5865e3eda63631ff56b759bdb4162f0/Snippets/decompose-ttf.py

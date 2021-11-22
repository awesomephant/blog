---
layout: post
title: Continuous Typography
date: 2020-11-22
includesMath: true
includesMusic: false
intro: "Notes toward a continuous framework for screen typography"
tags: post
thumb: "https://maxkoehler.com/assets/continuous-type/spot.png"
---

Here are some notes about an idea I've been calling Continuous Typography for the sake of thinking about it. It's a way of thinking about typography in terms of continuous functions, rather than absolute values.

Functions (you'll recall from your maths textbook) produce different results based on one or more input parameters. For example, the function $f(x) = 3x + 2$ will return different results depending on the value of its input parameter $x$.

If we apply this idea to typography, it allows us to make design decisions relative to variable input parameters like screen size, connection speed, user preferences, and so on. This can apply to any environment, but it's especially useful for typesetting on the web.

Note that most of these ideas aren't very original anymore, I'm largely synthesising here for my own understanding. Take a look at the footnotes for the original sources.

## The Problem

When you're developing a piece of typography you have to define a series of relationships:

- The space between letters vs. the space between words, lines, and paragraphs
- The size and weight of headlines vs. the body copy
- The shape of the text block vs. the shape of page

There are all kinds of methods to do this (Bringhurst fills a whole chapter with them in _Elements of Typographic Style_[^1]), but in any case you eventually arrive at a set of values for your measure, type size, weight, spacing and so on that produce whatever visual expression you set out to achieve.

{% include fig.liquid, src: "/assets/continuous-type/paragraph-static.svg", caption: "A block of text typeset with absolute values.", alt: "A paragraph is set in a serif typeface. Values for measure, font size, line height, etc. are shown in red.", source: "Sample text from *Flexible Typesetting* by Tim Brown.", class "big" %}

Take the font size, for instance: We want to set this so it gives the right voice to the piece of writing we're working with, but it also has to be appropriate to the typeface we've chosen, the size of the page, and it should result in a comfortable number of characters per line. Other adjustments follow from it: A change in type size might compel different spacing, a change in weight, hyphenation, and so on.

In print, you tweak these values until you arrive at a set of numbers that produces the visual expression you aimed for. And because you're working with a piece of paper of fixed dimensions and permanent ink, you can be fairly sure that the numbers you've established will stay intact throughout the production process, and land in the reader's hand just how you intended.

But on the web, this method starts to fail. Unlike a paper sheet, the browser window your text will be viewed in is completely variable; it can take on any size and apsect ratio whatsoever. If we set our font size to a fixed number (`18px`, say), the relationship between it and the browser window will be different on every screen, and unpleasant on most.

And the size is of the browser window isn't the only variable in play: Readers can modify type size and colours through their browser or opertating system, or have your text translated into their own language on the fly. Your choice of typeface might well be overwritten by a user's preference or a failed network request, and even the text itself might change over time.

The traditional guidelines of typography about line-lengths, spacing, harmonies, and so on still apply on the web; it's just that we're now trying to apply them in a context where many of their parameters have become variable. There are ways to lock down some of these parameters - there's a HTML snippet that prevents people from resizing your type, for instance - but that seems to me to run counter to the promise of the medium: that it works for anyone, anywhere.

What we need is a way to make typographic decisions in a way that is relative to all of these variable parameters, but still gives us some control over the resulting visual expression. The construct that lets us do this - generate different outputs depending on a set of inputs with arbitrary granularity - is called a _continuous function_.

## A continuous approach

Let's think through this by defining a single property of our text block  – the font size – as a continuous function. Following the traditional approach, we might define the font size using a CSS declaration like this one:

```css
p {
  font-size: 16px;
}
```

The `16px` here is an absolute value. It's going to stay the same regardless of the size of the screen, the reader's preferences, and any other outside parameter. As a result, it might work fine on a tablet but will probably feel a little lost on a big desktop monitor, and uncomfortably large on a phone.

But CSS gives us the tools to define the font size in a way that _does_ respond to outside parameters. For example, we could use the `vw` unit instead of pixels to define our font size:

```css
p {
  font-size: 1vw;
}
```

One `vw` is equal to one percent of the width of the reader's screen. So in the CSS declaration above we're saying: _The font size on paragraphs is equal to the width of the reader's screen multiplied by 0.01_. That's a continuous function.

It produces a different font size for every screen size it encounters: On a screen that's 1000 pixels wide we get a font size of 10 pixels, a 1500 pixel-wide screen results in a font size of 15 pixels, and so on. Drawn onto a coordinate system, it looks like this:

{% include fig.liquid, src: "/assets/continuous-type/function-simple.svg", caption: "If we define the font size defined as a continous function of the screen width, it forms a line.", alt: "A linear function is drawn on a coordinate system. X: Screen width, Y: Font size", class: "big" %}

I think this simple drawing represents a big shift in our approach to typography on the web. We're no longer placing a single point on the coordinate system (by defining a single, absolute value), but _a line_ containing an infinite number of points - our typographic intent has become dimensional.

This idea doesn't just apply to font size, but every other aspect of our text block: Measure, letter-, line- and word spacing, indentations, weight, variable font parameters can all be defined as continuous functions of one or more input parameters. The typographer's work becomes the shaping of these functions: How steep are they? Do they have minimum and maximum values? Where are their inflection points? Are they smooth, jagged, symmetrical, cyclical, randomised? How do they relate to each other? By answering these questions one way or another, any desired visual expression can be achieved for every reader.

In the following section we'll look at ways this is already possible in CSS today, and what might yet be to come.

## Shaping the function

### Slope

{% include fig.liquid, src: "/assets/continuous-type/function-slope.svg", caption: "Different numerical factors produce steeper and shallower curves.", alt: "4 linear functions of different slopes are drawn on a coordinate system.", class: "big" %}

A basic way to manipulate our function is to define its slope. We do this by multiplying our input variable (`1vw` in our example) with a different numerical factor:

```css
p {
  font-size: 0.5vw; /* This produces a shallow curve */
  font-size: 1vw;
  font-size: 2vw;
  font-size: 5vw; /* This produces a steep curve */
}
```

Bigger numerical factors produce steeper curves. A steeper curve, in this example, causes the font size to change more aggressively with the screen width.

### Minimum and maximum values

{% include fig.liquid, src: "/assets/continuous-type/function-clamp.svg", caption: "Minimum and maximum values produce flat sections on either side of the slope.", alt: "3 linear functions with different minimum and maximum values are drawn on a coordinate system.", class: "big" %}

It's often useful to define minimum and maximum values for a given property. We can do this by using the `min()` and `max()` functions in CSS:

```css
p {
  /* max() returns the larger of the two input values,
  so this will never dip below 16px */
  font-size: max(16px, 2vw);

  /* min() returns the smaller of the two input values,
  so this will never grow beyond 32px */
  font-size: min(32px, 2vw);
}
```

We can also set both minimum and maximum values at the same time using the `clamp()` function:

```css
p {
  /* This will produce a value between 14px and 32px */
  font-size: clamp(14px, 1.5vw, 32px);
}
```

I tend to set these values by eye, but because we're working with functions we have the whole toolkit of mathematics to draw on if necessary. For instance, we could use linear algebra to calculate minimum and maximum values that correspond to specific screen sizes[^2], or linear regression to derive a curve from a given set of absolute values. [^3]

### Functions with multiple parameters

{% include fig.liquid, src: "/assets/continuous-type/function-2d.svg", caption: "If we define the font size as a function of the screen size and the reader's default font size, it forms a plane.", alt: "A plane is drawn on a 3d-coordinate system. Caption: Font size = Screen width × 0.01 + Reader's default font size × 0.85", class: "big" %}

So far, we've only looked at functions with a single input parameter  – the screen width. But that's not the only input we can use. For instance, it's probably a good idea to take into account the default font size the reader has set up in their device settings, in addition to the size of their screen. [^4]

We can use the `calc()` keyword to do this in CSS[^5]:

```css
p {
  font-size: calc(1vw + 0.85rem);
}
```

Here we're saying: _The font size is equal to the width of the screen multiplied by 0.01, plus the reader's default font size multiplied by 0.85_. If we draw this function onto a coordinate system, its output values no longer form a line but a _plane_; our typographic intent has gained a second dimension.

There is no limit to the number of input parameters our functions can draw on. The reader's connection speed, whether they have dark mode enabled[^6], their reading distance, their preferred language, even the time of day at their location may all be useful parameters for multi-dimensional typographic systems.

The output of one function can become the input parameter of another, too. This is exactly what happens when we set properties like `line-height` to a unitless value: it quietly pulls in the current font size as a parameter.

```css
p {
  font-size: calc(1vw + 0.85rem);
  line-height: 1.3; /* = font-size * 1.3 = (1vw + 0.85rem) * 1.3 */
}
```

### Non-linear functions

{% include fig.liquid, src: "/assets/continuous-type/function-wave.svg", alt: "A curved plane is drawn on a 3d coordinate system. Caption reads: Font size = f(x,y).", class: "big" %}

So far we've only looked at _linear functions_, or functions that produce straight lines when drawn on a coordinate system. But there is no conceptual reason our typography should be limited to these. It's entirely possible we may need exponential, sinusoid, stepped, randomised, or yet more exotic function types to achieve specific typographic expressions.

As I write this, there is no simple way to do this in CSS. It is possible to stitch together multiple linear functions using media queries, and so approximate more complex curves, but the code quickly becomes unwieldy. Sass includes a powerful math module which can be used to abstract some of this complexity away, but a barrier to entry remains. [^8].

Mike Riethmuller (who developed both of those solutions) suggests that a better way to achieve these non-linear functions in CSS would be to make the [Easing Module](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) available outside of the animation context, to which it is currently bound[^7]. This would be an elegant solution indeed: the easing module supports many useful function types (including Bezier curves, which typographers are already familiar with) in addition to basic linear functions, and many design tools already include powerful interfaces to edit these curves visually.

The relevant issue on the CSS Working group [is still open](https://github.com/w3c/csswg-drafts/issues/581), so we likely won't see a browser implementation of this soon.

---

{% include fig.liquid, src: "/assets/continuous-type/paragraph-fluid.svg", caption: "A block of text typeset with continuous functions.", alt: "A paragraph and small graph diagrams.", source: "Sample text from *Flexible Typesetting* by Tim Brown.", class: "big" %}

But regardless of the precise implementation, I think that the idea that that any typographic attribute (including variable font parameters) can be a function (linear, exponential, stepped, Bezier, random, or otherwise) of any given input variable (user preference, screen dimensions, connection speed, time of day, display language, or whatever else) is an incredibly powerful one, and worth exploring as an aesthetic as well as a technical proposition. I'm already using basic linear functions in practice with promising results.

I'm especially interested in what a visual design tool would look like if it was built on the model of continuous typography. Tim Brown makes this point in Flexible Typesetting (2018), writing: _"Your design tool is working against you. It is stuck in the traditional mindset of absolute measurements. This is precisely one reason why people very good at web design argue that designers should learn to write code. No mainstream design tools […] are completely appropriate for the practice of typesetting today."[^9]

To my knowledge this situation hasn't changed much since - so there's plenty of room for exploration. With better tools, continuous typography might become more than a way to _make the type look good on a phone_: a new method for visual expression in its own right. [^10]

## Update February 2, 2021

I finally got around to writing a demo of what a design tool for continuous typography might look like - basically a working version of the final figure above. [Play with it here](https://awesomephant.github.io/continuous-typography/), or [read more about here](/work/continuous-type-tester/).

[^1]: Robert Bringhurst (2016): *The Elements of Typographic Style, Version 4.2*, Chapter 8. Hartley & Marks.
[^2]: Pedro Rodriguez (2020): *[Linearly Scale font-size with CSS clamp() Based on the Viewport](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/)
[^3]: Jake Wilson (2017): *[CSS Poly Fluid Sizing using calc(), vw, breakpoints and linear equations](https://medium.com/@jakobud/css-polyfluidsizing-using-calc-vw-breakpoints-and-linear-equations-8e15505d21ab)*
[^4]: In fact, the user’s default font size should probably be the first parameter we care about. The only reason I’m using the screen width here is that its effects are easier to visualise.
[^5]: To my knowledge the earliest description of this technique is a 2015 article by Mike Riethmuller called *[Precise control over responsive typography](https://www.madebymike.com.au/writing/precise-control-responsive-typography/)*
[^6]: Greg Gibson (2020): *[Using CSS Custom Properties to Adjust Variable Font Weights in Dark Mode ](https://css-tricks.com/using-css-custom-properties-to-adjust-variable-font-weights-in-dark-mode/)*
[^7]: Mike Riethmuller (2018): *[Interpolation in CSS without animation](https://www.madebymike.com.au/writing/interpolation-without-animation/)*
[^8]: Mike Riethmuller (2017): *[Non-linear Interpolation in CSS: A solution for transitioning lengths values in CSS through more than one bending point.](https://www.madebymike.com.au/writing/non-linear-interpolation-in-css/)*
[^9]: Tim Brown (2018): *Flexible Typesetting*, p 44. A Book Apart.
[^10]: This post is also [on Medium](https://maxakohler.medium.com/continuous-typography-15759ac4ae62)
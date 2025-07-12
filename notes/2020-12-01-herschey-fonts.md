---
layout: post
title: "The Herschey Fonts"
date: 2020-12-01 19:30:00
teacher: "Frank Grießhammer"
unit: "Type@Cooper"
intro: "Notes from Frank Grießhammer's lecture on the Hershey fonts at the Cooper Union, 2016."
website: "http://coopertype.org/event/the_hershey_fonts"
thumb: ""
---

[Video of the talk](http://coopertype.org/event/the_hershey_fonts)

[Minotaur](https://typographica.org/typeface-reviews/minotaur/) has a lombardic uppercase made entirely out of straight lines.

The Herschey fonts are a collection of vector fonts developed in 1967 at the Naval Weapons Laboratory (in Virginia). They're publicly available.

Archive.org (and Google Scholar) has Herschey's paper [Calligraphy for Computers](https://archive.org/details/hershey-calligraphy_for_computers/page/n53/mode/2up). In it, he writes about type design for a coarse grid as an artistic challenge. He's clearly an interesting person: artistic, but also extremely technical.

The paper has 200 pages, most of which are drawings of letters, including the lombardic caps from earlier.

## Who is Allen V. Herschey

Worked as a physicist at the Naval Weapons Laboratory. He was a theoretial physicis (fluid dynamics). He was also apparently a calligrapher.

How did he design his letters? He drew out each letter on graph paper, using only straight lines. He drew a complete Japanese typeface, too.

The guy wrote all these technical reports. Mathematical typesetting in the 60s was done on the Veritype. You also had a product called Type-It, which were basically replacement type that you installed in your typewriter to get, say, Greek letters. Herschey wanted to improve this process.

The Naval Weapons Laboratory had a computer called the NORC (Naval Ordinance Reference Calculator, 1954) - the fastest computer in the world at the time.

It was attached to a line printer, which would print onto these long continuous sheets of paper: A General Dynamics S-C 4020.

{% include "embed.liquid", src: "https://www.youtube-nocookie.com/embed/tb-IaGFLz0w", format: 56.25%}

[General Dynamics: The Mark of Man (1963)](https://www.youtube.com/watch?v=tb-IaGFLz0w)

In this video they show a stencil method to project letterforms (similar to phototypesetting), but Herschey used the vector drawing method instead (this just sent the beam through the period and used it to draw). Here's some marketing copy about the S-C 4020:

> Once upon a time [...] the computer-printer generated only row after row of numbers and symbols, it was only used by the engineers. The took their armloads of papers to the drafting department, where an army of draftsmen and clerks converted the figures into charts, graphs, and drawings. [...] Then a bright engineer learned about a new kind of machine called the S-C 4020 that takes the information froma computer and converts it into curves, graphs and pictures.

{% include "fig.liquid", src: "/assets/notes/40-20.png", caption: "The CHARACTRON shaped beam tube of the S-C 4020", alt: "A page from the 4020 manual, showing an exploded drawing of the shaped beam tube", source: "http://www.chilton-computing.org.uk/acl/pdfs/sc4020_inf_manual.pdf"%}

The S-C 4020 was a technical milestone. It could do arbitrary vector drawings, and even produce animation. Most of this material seems to come from [Chilton Computing](http://www.chilton-computing.org.uk/acl/technology/sc4020/overview.htm).

{% include "fig.liquid", src: "/assets/notes/uaide061.jpg", caption: "Vector drawings produced by the S-C 4020.", alt: "Figure 9 from Proceedings of the 9th Annual Meeting showing a cartoon character and a cloud.", source: "http://www.chilton-computing.org.uk/acl/technology/sc4020/p011.htm"%}

Herschey knew the machine:

- Plotting of Curves and Alphabet on the NORC CRT Printer (1959)
- Plotting of maps on a CRT Printer (1963)
- FORTRAN IV Programming for Cartography and Typography (1969)

Did quite beautiful drawings of ships, too.

## The type

Herschey's designs are quite exhaustive. he drew five optical sizes: FORTRAN, Cartographic, Indexical, Principal, and Triplex (Going from caption to display). Multiple stroke styles (one, two, and three). There are also calligraphic designs, a Schwabacher, the Lombardic capitals.

In total he drew about 1500 Latin characters, 800 Japanese. It's quite the achievement. Actually did real type-design research for these, too.

The FORTRAN style comes from the Leroy Lettering Set (used for [comics a lot](http://www.kleefeldoncomics.com/2015/04/on-history-leroy-lettering.html)).

While these typefaces are available, they only come in an ancient plain-text format. Grießhammer wrote the necessary Python to turn this into properly-encoded OTFs (albeit with a stem width of 0) - looks like that's [this repo](https://github.com/frankrolf/hershey-fonts), though it doesn't contain the converted font files. Here's [someone else's attempt from 1997](http://paulbourke.net/dataformats/hershey/).

_This is speculation from me, Max_: I'm assuming this material flowed into the [MAD Family](https://www.colophon-foundry.org/typefaces/mad-sans/) from Colophon (especially the three weights produced by repeating the outline), though they don't seem to acknowledge it in their marketing copy.

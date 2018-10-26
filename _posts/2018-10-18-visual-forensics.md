---
layout: post
title:  "Visual Forensics"
date: 2018-10-18 10:00:00
tags: ""
thumb: ''
thumbnail: '/assets/vf/vf-banner.png'
coverImageCredit: Lichen
intro: "Notes on the Visual Forensics elective at the RCA" 
---


## Reading

- [x] David Batchelor: *[Chromophobia](https://approachestopainting.files.wordpress.com/2013/01/163577202-chromophobia-david-batchelor.pdf)*
- [ ] William Gass: *[On Being Blue](https://www.scribd.com/document/254987042/On-Being-Blue)*
- [x] Tim Ingold: *[Lines: A Brief History](https://taskscape.files.wordpress.com/2011/03/lines-a-brief-history.pdf)*
- [ ] Petra Lange-Berndt: *Materiality*
- [ ] Catherine Malabou: *Ontology of the Accident: An Essay on Destructive Plasticity*
- [x] Maria Fusco: *[Master Rock](https://vimeo.com/142818895)*
- [x] Charles and Ray Eames (1977): *Powers of Ten*	
- [x] *[The Art of Japanese Life: Nature](https://www.youtube.com/watch?v=kAN6zJKlAHI)*
- [ ] William Kentridge: *Six Drawing Lessons*
- [x] Hito Steyerl: *[In Defense of the Poor Image](https://www.e-flux.com/journal/10/61362/in-defense-of-the-poor-image/)*
- [x] *Strange Days: Memories of the Future* at 180, The Strand
- [ ] *Surreal Science* at Whitechapel Gallery
- [ ] Christian Marclay: *The Clock* (Tate Modern)
- [x] Lindsay Seers: *[I am a Viewfinder](https://www.tate.org.uk/art/artists/lindsay-seers-12601/lindsay-seers-i-turned-myself-camera)*

[Collected images](https://photos.app.goo.gl/Wb7qeVUeRGfywSTw9)

## October 12, 2018

### Reading

- [x] Lindsay Seers: *[I am a Viewfinder](https://www.tate.org.uk/art/artists/lindsay-seers-12601/lindsay-seers-i-turned-myself-camera)*
- [x] Charles and Ray Eames (1977): *[Powers of Ten](https://www.youtube.com/watch?v=0fKBhvDjuy0)*

The first task is to document ```51°30’37.6”N 0°06’56.3”W```, the true geographical centre of London. Using a USB Microscope, a digital camera and graph paper, I document a 1' × 1' square on the embankment.

![Microscope 1](/assets/vf/site-overview-colour.jpg)
![Microscope 1](/assets/vf/micro-1.jpg)
![Walk 1](/assets/vf/walk-0.png)

## October 16, 2018

Encouraged by Friday's results, I go back to the embankment to take more microscope photographs. If I take many images of the same area, I can stitch them together in Photoshop and generate a much higher-resolution image. After a few hours, I have taken 2,764 images.

After about 20 hours of arranging these images (testing the limits of both Photoshop and my computer), I end up with a number of collages like these:

![Walk 1](/assets/vf/walk-1.jpg)
![Walk 1](/assets/vf/walk-2.png)
![Walk 1](/assets/vf/walk-3.png)

When I took these images, I was doing my best to move the camera in straight lines across an area. The collages show how difficult this is to do - the lines meander from left to right, the images are rotated by varying amounts, covering some parts of the surface repeatedly while leaving others blank.

I'm also finding some other artifacts related to lichen. There's a database of every recorded lichen in London, with all kinds of rich metadata attached:

<div class='table-container'>
<table class='dense'>
<thead>
<tr>
<td>gbifID</td>
<td>Dataset Key</td>
<td>Occurrence ID</td>
<td>Scientific Name</td>
<td>Country</td>
<td>Locality</td>
<td>Latitude</td>
<td>Longitude</td>
<td>Identified By</td>
</tr>
</thead>
<tbody>
{% for row in site.data.lichen %}
<tr>
    <td>{{row.gbifID}}</td>
    <td>{{row.datasetKey}}</td>
    <td>{{row.occurrenceID}}</td>
    <td>{{row.scientificName}}</td>
    <td>{{row.countryCode}}</td>
    <td>{{row.locality}}</td>
    <td>{{row.decimalLatitude}}</td>
    <td>{{row.decimalLongitude}}</td>
    <td>{{row.identifiedBy}}</td>
</tr>
{% endfor %}
<tr><td>...</td></tr>  
</tbody>
</table>
</div>
Source: GBIF.org (15 October 2018): *GBIF Occurrence Download* [DOI: 10.15468/dl.f1lmko](https://doi.org/10.15468/dl.f1lmko)

The section of database (limited to London) I downloaded has 2,548 entires. To save space, various columns are omitted in the example above.

Also, Matt points out that the lichen in my images are forming *Turing Patterns*. Turing patterns are a mathematical concept that describes how patterns found in nature (such as stripes, spots, growth patterns) can be described using *reaction-diffusion* (which is a mathematical model that describes the mixing of chemicals). 

![Turing Patterns](/assets/vf/TuringPattern-2.png)
Dolnik, Milos & M. Zhabotinsky, Anatol & Epstein, Irving. (2001): *Resonant suppression of Turing patterns by periodic illumination*. Physical review. E, Statistical, nonlinear, and soft matter physics. 63. 026101. [10.1103/PhysRevE.63.026101](https://www.researchgate.net/publication/12025147_Resonant_suppression_of_Turing_patterns_by_periodic_illumination).

![Turing Patterns](/assets/vf/turing2.png)
Gray-Scott Reaction-Diffusion. [Github](https://github.com/pmneila/jsexp)

See also: Alan Turing (1952): *[The Chemical Basis of Morphogenesis](http://www.dna.caltech.edu/courses/cs191/paperscs191/turing.pdf)*

## October 19, 2018

### Catrin Morgan on Visual Essays

A definition of illustration: Any image that takes a communicating role in a text. Text meaning words or images or both. Catrin did a lot of work on different depictions of [St. Jerome in his Study](), which is [detailed here](https://wsworkshop.org/2018/03/catrin-morgan/). 

![St. Jerome in his study](/assets/vf/jerome.jpg)
Vincenzo Catena (c.a 1510): *St. Jerome in his Study* [The National Gallery](https://www.nationalgallery.org.uk/paintings/vincenzo-catena-saint-jerome-in-his-study)

### Constructing an argument with images

James Elkins writes about this (at length) in [Writing with images (2013)](http://writingwithimages.com/)

Illustrations that are used in art history writing. A mnemonic: An image to remind us what a painting looks like. Doesn't have to be a very good reproduction. The other way is evidence — *here's proof that this painting really exists*. Both of these aren't very exciting.

### Images arranged on a timeline: a visual argument

You start seeing images referencing each other (chronology)

### Details of different images next to each other**

You start seeing repetition of elements etc. 

David Carrier (2000): *[The Aesthetics of Comics](https://www.amazon.co.uk/Aesthetics-Comics-David-Carrier/dp/0271021888)*

Talks about the idea of concatenation of images: Whenever we see images in the same context we start making connections. The visual essay can build on this.

See also: Various versions of *Cardinal Albrecht as St Jerome* by Lucas Cranach the Elder.

### Introducing a new (diagrammatic) voice to make an argument

Semantic Sesseation: When you say a word over and over again and it stops soundning like a word. The same works for images: Image becomes a pattern. Graphic novels have this convention where a full bleed image is timeless. See also Scott McCloud (1993): *Understanding Comics*.

We can use devices like this (from graphic novels) to make critical arguments.

Using book rythm, pacing etc. If the reader thinks they know what's coming, you can emphasise a point by making something different. All of this is repetition.

### Space

In graphic novels, white space slows down time (see McCloud). We're talking about space in a spatial medium.

Spacing also creates hierarchy. You can do headline, body copy and sidenotes with images. Using typographic conventions with images. All of the structure of an essay is still there, you can use it with images as well. However, be aware that this hinges on reading direction.

### Extraction

Pulling out parts of the image (through tracing, distortion, etc.) to make a point.

### Direct comparison
Brian Dyllan (2017): *[Essayism](https://www.nytimes.com/2018/09/18/books/review-essayism-brian-dillon.html)*

Talks about ways to write essays: One of these is the *list* (i.e most of the stuff above). Visual essays allow us to demonstrate arguments rather than describing them.

Overlaying images that have visual similarities.

### Historical Comparison

Pull in images from a different context to make comparisons

### Reduction, Elimination

Cut out parts of the image. You draw attention to what's been cut out, and also the stuff around it.

## Part 2: Visual Grammar

![Midnight Mexico City](/assets/vf/mexico-night.jpg)
Sarah Sze (2015): *Midnight Mexico City*. Silkscreen, Digital Print, and Laser Engraved Paper, 58.1 × 63.2cm. [Artsy](https://www.artsy.net/artwork/sarah-sze-midnight-mexico-city)

Using found structure (such as the grid of a newspaper)
John Berger: Ways of Seeing


![McGuire](/assets/vf/mcguire.jpg)
Richard McGuire (1989): *Here*. [The Atlantic](https://www.theatlantic.com/entertainment/archive/2014/09/richard-mcguires-time-machine-with-a-view/380736/)

Richard McGuire is looking at the same corner of a room in different time periods. Using time, layering of different narratives.

Hollis Frampton (1971): *[Nostalgia](https://www.youtube.com/watch?v=voMDL1TgTh4)*. Frampton shows early photographs of himself burning on a hot plate, while a narrator talks about the previous image (which just got burned).

A Spiegelman comic in early in raw magazine plays on a similar idea, with character talking about what happened in the last panel:

![Spiegelman](/assets/vf/spiegelman.gif)
Art Spiegelman (1973): *Don’t Get Around Much Anymore*. [Slate](https://slate.com/culture/2011/10/art-spiegelman-before-maus.html)

Rachel Moore (2006): *[Hollis Frampton (nostalgia)](https://mitpress.mit.edu/books/hollis-frampton)*

[Cindy Sherman's Instagram](https://www.instagram.com/cindysherman/?hl=en) is a visual essay in some way (even if maybe unconsciously). She's one of the rare old-school artist who's doing good things on Instagram.

Using digital platforms to inform visual essays can be useful. The Instagram grid is a visual grammar you can make use of.

Visual Essays don't have to happen in a book — see *Nostalgia*.

## Tutorial notes

- Connect the lichen database to the images
- Use the methods used to collect the images on more artifacts (such as the printed-out database)
- Bring in coordinates, establish scale of the microscopic photographs
- Think about how images might be presented in space
- The interesting thing is how a seemingly dead, neutral surface (such as a wall in a city) is actually fiercly negotiated between all these different species of animals, systems, weather, air pollution etc.)
- See also the essay on decay from the reading list - the wall isn't a static object, it's constantly in a state of decay, beign turned back into raw material where it came from. Glass turns back into chrystal, bread starts to rot as soon as it leaves the oven.
- We tend to think of nature as contained in parks, but it's actually all around us, living inside our built structures
- The British Lichen Society might be an interesting research area, who are these people making and recording these observations
- Definitely match up the site I recorded with the correct line in the database - attacking the site from different angles
- All of this is very reminiscent of Powers of 10

## October 26, 2018

### Reading

- [ ] Georges Perec: *Species of Spaces*
- [ ] John Berger: *Ways of Seeing*
- [ ] Brian Dillon: *Essayism*
- [x] Scott McCloud: *Understanding Comics*

> There is no specified format and we ask you to think carefully about appropriate outcomes for your visual investigations. This might extend to book, wall based, object based and projection based work.

<p data-height="705" data-theme-id="33564" data-slug-hash="JmwayP" data-default-tab="result" data-user="maxakohler" data-pen-title="Reaction Diffusion" class="codepen">See the Pen <a href="https://codepen.io/maxakohler/pen/JmwayP/">Reaction Diffusion</a> by Max Kohler (<a href="https://codepen.io/maxakohler">@maxakohler</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Tutorial notes

I talked about the way the mosaic photographs were made — moving the USB microscope along the surface millimetre by millimetre. The movement was then repeated in Photoshop when I stitched the images together.

The book is designed to [add a secondary voice](#introducing-a-new-diagrammatic-voice-to-make-an-argument) to the argument. While the microscopic photographs map out the site spatially, the book shows the same space changing over time.
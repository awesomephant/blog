---
layout: post
title:  "Visual Forensics"
date: 2018-10-18 10:00:00
thumb: ''
thumbnail: '/assets/vf/vf-banner.png'
coverImageCredit: Lichen
includesMath: true
intro: "Notes on the Visual Forensics elective at the RCA"
tags: post
---


## Reading

- [x] David Batchelor: *[Chromophobia](https://approachestopainting.files.wordpress.com/2013/01/163577202-chromophobia-david-batchelor.pdf)*
- [x] William Gass: *[On Being Blue](https://www.scribd.com/document/254987042/On-Being-Blue)*
- [x] Tim Ingold: *[Lines: A Brief History](https://taskscape.files.wordpress.com/2011/03/lines-a-brief-history.pdf)*
- [x] Petra Lange-Berndt: *Materiality*
- [ ] Catherine Malabou: *Ontology of the Accident: An Essay on Destructive Plasticity*
- [x] Maria Fusco: *[Master Rock](https://vimeo.com/142818895)*
- [x] Charles and Ray Eames (1977): *Powers of Ten*
- [x] *[The Art of Japanese Life: Nature](https://www.youtube.com/watch?v=kAN6zJKlAHI)*
- [x] William Kentridge: *Six Drawing Lessons*
- [x] Hito Steyerl: *[In Defense of the Poor Image](https://www.e-flux.com/journal/10/61362/in-defense-of-the-poor-image/)*
- [x] *Strange Days: Memories of the Future* at 180, The Strand
- [x] *Surreal Science* at Whitechapel Gallery
- [x] Christian Marclay: *The Clock* (Tate Modern)
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
<table class='dense wide'>
<thead>
<tr>
<td>Scientific Name</td>
<td>Country</td>
<td>Locality</td>
<td>Latitude</td>
<td>Longitude</td>
<td>Identified By</td>
</tr>
</thead>
<tbody>
{% for row in lichen %}
<tr>
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

### Reading for week three

- [ ] Georges Perec: *Species of Spaces*
- [ ] John Berger: *Ways of Seeing*
- [ ] Brian Dillon: *Essayism*
- [x] Scott McCloud: *Understanding Comics*

> There is no specified format and we ask you to think carefully about appropriate outcomes for your visual investigations. This might extend to book, wall based, object based and projection based work.

### Outcomes and Crit Notes

I talked about the way the mosaic photographs were made — moving the USB microscope along the surface millimetre by millimetre (within a 1' by 1' square I defined). The movement was then repeated in Photoshop when I stitched the images together. The final collages were laser-printed at a large format for the crit.

I did secondary research on lichen in a number of different directions — there's the [British Lichen Society](http://www.britishlichensociety.org.uk/), and also the [database of lichen sightings](#october-16-2018) which they contribute to. I mapped a section of the database onto a map of London, but unfortunately the sightings don't all have individual coordinates associated with them. Instead they're all grouped into maybe a dozen sets of coordinates which I'm sure has a good reason, but doesn't make for a very nice visualization.

The Natural History Museum has one of the [largest collections of lichen specimens](http://www.nhm.ac.uk/our-science/collections/botany-collections/lichen-collections.html) in the world, containing about 400.000 items. They're beautiful:

![Specimen of Lichen at the Natural History Museum, London](/assets/vf/nhm.jpg)
Specimen of Lecanora vitellina var. reflexa Nyl. (BM001096649) [The Natural History Museum](http://data.nhm.ac.uk/object/a569c613-34a7-43d1-a49e-04ec2b70d3ef)

I'm also still interested in diagramming the embankment in different ways, maybe developing this drawing I made at the site:

![Diagram of the site](/assets/vf/site-diagram.jpg)

Eventually, I decided to focus on the Turing Patterns. I wrote a [Javascript implementation](https://codepen.io/maxakohler/pen/JmwayP/) of the [Gray-Scott algorithm](http://www.karlsims.com/rd.html) so I could control everything about the simulation. After experimenting for a while, I found a few sets of parameters that led to patterns that matched the lichen photographs very closely. I then wrote a [Puppeteer](https://github.com/GoogleChrome/puppeteer) script that takes a screenshot of the simulation every few seconds. Using the script, I generated a series of images using different parameters. I then printed and bound these into a book in chronological order:

The book is designed to [add a secondary voice](#introducing-a-new-diagrammatic-voice-to-make-an-argument) to the argument. There is also the idea that the book maps a single environment as it changes over time (while the photographic collages move across the surface spatially). I'm imagining it like this:

![Diagram showing images along spatial and temporal dimensions](/assets/vf/space-diagram.svg)
**A**: Photographic collage, **B**: Turing-Pattern book.

## November 9, 2018: Materiality

### Reading for November 9

- [x] Peter Fischli & David Weiss: *[The Way Things Go](https://www.youtube.com/watch?v=GXrRC3pfLnE)* (3 mins)
- [x] Sarah Sze: *[Meaning between Things](http://channel.louisiana.dk/video/sarah-sze-meaning-between-things)* (12 Mins)

### Brief for Novemeber 9

> Hi All, It was great to see your responses to ‘Image’ in last week’s review session and to share ideas, thoughts and comments within your groups. During Across RCA, please complete the primer task attached. This will inform the next session, a workshop to begin our exploration of 'Materiality'. We introduced some background ideas at the end of our last session and here are the reference links if anyone would like to watch the short films again;

[Materiality Brief (DOCX)](https://drive.google.com/file/d/1eGyu4c5s6UvY7fuSf8tR9dh8h3U4vYxN/view)

The brief is to find a *Process*, a *Material*, an *Object* and a *Tool* and write a few words about each. It also suggests to think of these as seperate things, so that's what I'm doing below:

### Process: Tuning an Instrument

I have personal experience here of course. I remember learning to tune your own violin to be a pretty big step, and it took me forever to learn how to do it. Part of it is hearing: First, you tune your A string to whatever reference you're using — another violin, a tuning fork or a piano. Then, you adjust each string to the A string - first the D, which is a fith below A. Then G, a fith below D. Finally E, a fith above A. There's also a muscle memory component — how do you hold your hand on the pegs to achieve the right amount of leverage? Unlike guitar tuners, these are just tapered pieces of wood stuck into a hole.

In orchestra performances, every player goes through this process at the beginning of a performance. It always happens the same way: Orchestra walks on, Applause, Orchestra sits down, Concert Master walks on, Applause, Concert Master turns around — this is the command to tune. It always happens in the same order: Wind, Brass, Strings from low to high. Finally, conductor (and soloist) walk on.

### Material: The Enron Corpus

[What the Enron Corpus Says About Us](https://www.newyorker.com/magazine/2017/07/24/what-the-enron-e-mails-say-about-us)
I originally found this during by undergrad [at Camberwell](http://awesomephant.github.io/2018/feret-database/#febuary-18-2018), but didn't really do anything with it at the time.

I consider databases like this one materials because they're *the stuff algortihms* are made from. By themselves, there basically useless — many contain many more instances than you could ever look at in a lifetime, and they're usually pretty monotenous. They only become meaningful when they're turned *into* something.

- **Object**: Styrofoam Head
- **Tool**: Kitchen Blender (Braun)

We spent the morning handling the material and arranging it by various criteria:

- Density, as in $$p = \frac{m}{V}$$
- Density, as in [opacity](https://en.wikipedia.org/wiki/Opacity_(optics)): $$I(x)=I_{0}e^{-\kappa p x}$$
- Density, as in consitency
- Monetary value (how much would these be to buy?)
- Raw material value (if you melted these down, how much would they be worth?)
- Sentimental value (here we can only go by assumption — if your dad lost a leg in the Ibuprofen factory, that's going to have sentimental value for you)
- Photographic value (how much light does it reflect?)

![VF Table](/assets/vf-table-1.jpg)
![VF Table](/assets/vf-table-2.jpg)
![VF Table](/assets/vf-table-3.jpg)

The task for the next session is to generate a visual outcome on *an aspect of materiality in time/space*.

## November 10, 2018

<p class='full hasImage' markdown='1'>
![Maths notes](/assets/cabinet_053_hunt_katherine_002.jpg)
“The strange operation & mistery of numbers.” Peter’s Mundy’s notation of all possible changes on three, four, five, and six bells in his travel journal “Itinerarium Mundi.” Entry made after Mundy’s visit to London in 1654. [Cabinet Magazine](http://cabinetmagazine.org/issues/53/hunt.php)
</p>

## Notes for Friday, Febuary 8th

> Reflect on all work produced as part of VISUAL FORENSICS through IMAGE, MATERIALITY, COLOUR, LANGUAGE. Include (physical) examples of all work. What worked? What was a surprise? What did you uncover? Did this constitute a step forward in your working methods? What connections have you observed in your approach to the module? Have any threads emerged?

- I think whenever I managed to come up with some (obsessive) process, it led to good outcomes: The lichen tile photographs, the New York Times book, and to some extent the time video (although with that project there's less obsessive manual collecting of data. But still, there's a process — training a DNN to predict video frames — that's repeated with different inputs, parameters etc. to create the final piece)
- Spreadsheets are generally a good idea
- I think the main step forward here was to work with images in a more fluid way - treating them as raw material in different ways.
- I kind of enjoyed working out responses to different briefs on different subject material — apart from the ML piece, the subjects of these pieces don't really relate to my overarching research interest. But I think that's okay - they relate in terms of process.

> What are the key-themes, aspects, processes and/or concepts informing your practice?
- I think the overarching theme is clearly approaching these ontological questions with a scientific, algorithm-based method. I choose the word *algorithm* (raher than *coding*) because some of the stuff was done very manually: Photographing the lichen for hours and spending like three days screenshotting New York Times articles. But these processes are still algorithms in the sense that there's a clearly defined series of rules and decisions that I follow over and over again.
- The archive is a recurring theme
- Secondary research (the Turing paper, the NHM samples)

> What have you been reading or looking at during this module?

- I've been making these [gradient drawings](/2019/gradient-drawings/) based on the work of Xenakis, so I've been reading about harmonic series and old architecture
- Maths: Statistics, Computer Vision, machine learning maths. Doing this Stanford course on machine vision.
- Re-read some key text on the archive: Body and the Archive, Archive Fever
- Some basic photography theory: Barthes, Elkins
- Forensic architecture definitely a key reference

> What is your relationship to the idea of 'FORENSICS'? How are you using, interrogating, understanding and developing this idea?

- I think the word Forensics describes looking at the world in a very careful, methodical way (common to art and science). It's also (in my opinion) a way of looking that's somehow detached from personal feelings, instead trying to achive some level of "objectiveness" (but also realising that that's never fully possible).

## Friday 1 March: Is this Tomorrow?

[Is this Tomorrow?](https://www.whitechapelgallery.org/exhibitions/is-this-tomorrow/) at the Whitechapel is a re-creation of the 1956 show called *This is tomorrow*. From what I understand, that one was full of post-war optimism (this is the time of the great social projects) while this one seems much darker.

### mono office

- Drawing attention to the exhibition infrastructure (by pointing arrows at it)
- Very highly finished. Wooden frames with precisely sized prints maybe recall the 1956 show

### 6a architects

- Agriculture equipment (pre-manufactured steel, cast plastic) vs gallery surroundings (wood panel floor, high ceilings, skylights). Probably the opposite environment to where you'd normally encounter an enclosure like this.
- See also *[Handbook of Tyranny](https://www.lars-mueller-publishers.com/handbook-tyranny)*
- Non-human architecture

### Numbers

- Show lacks some traditional gallery devices (unlike a place like the Tate, or the NHM, pieces here aren't numbered). Maybe a function of everything being freshly commissioned.
- Some pieces contain numbers, like the sheep enclosure (printed serial number on steel parts) and the mono office piece (introduces its own internal labelling system)

### Marina Tabassum Architects

- Another piece that interacts with the exhibition environment: You look up this stone-age type hole in the ceiling (although covered in sickly, candy-coloured spraypaint) but what you see isn't the sky, but smoke detectors, light fixtures, pipes.
- Robot cavepaintings

### Salvador Mundi Experience

- Probably not too far off what the actual Museum is going to be like.
- Self-referential: The piece has a schematic drawing of itself bolted to the outside
- Ambiguos whether we're looking at a piece or an architectural model of a piece.

### Black barriers

- More readymade architecture, not unlike the sheep enclosure (but for people). Apart from these being painted black, they're probably made from the same steel tubing.
- Also something about the temporary nature of these structures - designed to be moved around, slotted in wherever people's movement needs to be restrained.
- Together, they form this huge black mass. Motion-activated loudspeakers give the impression that the things are awake, collecting data, phoning home.

### Bio-Reactor

- Not sure how the back-projected bird and the bioreactor/screen setup are connected.
- Draws on scifi-aesthetic: Tubes, wires, random photos, all unlabelled, leading to a slightly cryptic screen at the front of the piece. Very unlike the *mono office* piece.

## Notes on the Canal Museum Show

> Please prepare a digital presentation and bring any physical work that you have made so far. Your presentation should cover: Concepts, Process, How it relates to a 'forensic' approach, What you have made so far, Supporting material (including relevant work from past projects), Potential modes of presentation and display structures, How you want people to engage with the work, Proposed space required within the Canal Museum.

We understand that the work might change and we are not expecting you to know exactly what the work will look like at this stage but this statement of intent will be really useful in helping develop the work in the coming months and in curating the exhibition/event.

The building used to be a storage facility for ice blocks imported from Norway.

- [The canal museum on the ice trade](http://www.canalmuseum.org.uk/ice/iceimport.htm)
- James Graham, Caitlin Blanchfield, Alissa Anderson, Jordan Carver, Jacob Moore (Editors) 2016: *[Climates: Architecture and the Planetary Imaginary](https://www.arch.columbia.edu/books/catalog/138-climates-architecture-and-the-planetary-imaginary)*
- Pars Foundation (2007): *[Findings on Ice](https://www.parsfoundation.com/Findings-on-Ice)*

![The sound of ice melting](/assets/vf/ice-melting.jpg)
Paul Kos (1970), *Sound of Ice Melting*. Via [Discover Magazine](http://blogs.discovermagazine.com/imageo/2013/03/27/unintended-art-of-the-anthropocene-the-sound-of-ice-melting/#.VgIQuI9Viko)

This piece was originally made in response to the Vietnam War (The microphones recall a press conference), but now the immediate association is climate change / the anthroposcene. [Kadist on the piece](https://kadist.org/work/sound-of-ice-melting/).

![Ice core showing band of volcanic ash](/assets/vf/ice-core.jpg)
Ice core from the *[West Antarctic Ice Sheet](http://www.waisdivide.unh.edu/)* project. The dark band is a layer of volcanic ash that settled on the ice sheet approximately 21,000 years ago. Via the [National Science Foundation](https://www.nsf.gov/news/news_images.jsp?cntn_id=134908)

- [NASA Introduction to Ice Cores](https://climate.nasa.gov/news/2616/core-questions-an-introduction-to-ice-cores/)
- Wikipedia has a [list of all the ice cores](https://en.wikipedia.org/wiki/List_of_ice_cores)

### To Do

- [x] Collect training data (~1800 image pairs at one-hour interval should be enough)
- [ ] Process ice images into A/B dataset for pix2pix, taking into account different shooting intervals
- [ ] Train pix2pix model (probably for a few days)
- [ ] Deploy the model and build an interface that powers the installation. This needs to take an image, make a prediction, display the result and add some details like timestamps and so on. Ideally web-based for future appolications.

## Show Setup

1. Plug webcam into USB extension and into computer
2. Frame using antive camera app
3. Close native camera app
4. In Anaconda prompt:
    1. ```cd D:\Projects\visual-forensics\show-piece```
    2. ```node .```
5. Open localhost:3000 in Chrome
6. From browser command line: Run ```startCycle()```
7. Close devtools, F11 for fullscreen

...

8: Kill server from command line, close browser

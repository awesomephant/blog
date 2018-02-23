---
layout: post
title:  "Notes on Face Recogintion, Machine Learning"
date: 2018-01-17 19:15:00
tags: ""
thumb: ""
intro: "As part of my third year at Camberwell I'll be doing research into machine learning, computer vision etc. These are my working notes."
---

## January 2, 2018
I managed to work my way through [Hands-On Machine Learning with Scikit-Learn & Tensorflow](http://shop.oreilly.com/product/0636920052289.do) by Aurélien Géron. Some of the more advanced math is still beyond me (remembering how vectors work was hard enough), but I feel like I've now got an actual understanding of some of the acronymns that get thrown around a lot: Deep Learing, Neural Networks, MLP, TensorFlow and so on.

An important point that's made early in the book is that machine learning isn't the same thing as neural networks. Géron quotes Tom Mitchell (1997):

> A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E.

Basic methods like linear regression fall under this definition as well as neural networks. 

Chapter 14, which deals with *Recurrent Neural Networks* is particularly exciting. As Géron points out, 

> RNNs [are] a class of nets that can predict the future. [...] RNN's ability to anticipate also makes them capable of surprising creativity.

Evidently this is the technology behind some of these [Google Magenta Experiments](https://magenta.tensorflow.org/). A later chapter in the book describes how you can train a neural network in such a way that given a set of source images, it can generate new images that look as real as the input images - exciting stuff. I'm hoping to do this with images of faces - generating portraits of people that don't exist.

However, I do suspect that the laptop I'm typing this on will have nearly enough processing power to do all of that. Finding enough source images will also be a concern. This describes the main problem with advanced machine learning: While the math is well established and relatively accessible, access to the vast amounts of processing power and training data required to build useful software is limited to large organisations.

## January 13, 2018

I got my hands on something called the *FERET Database*. This is a collection of images of faces that the U.S military comissioned in the mid-nineties, containing about 11.000 images of roughly 800 individuals from different angles, wearing different clothes etc. It's what much of modern research into facial recognition algorithms has been based on. Here's the [relevant government website](https://www.nist.gov/itl/iad/image-group/color-feret-database).

The way you get this database is *emailing the US department of defence*. Once you do, they give you login details to download the database. It comes in a weird 90s format, so I had to spend some time extracting and converting the images so I could look at them.

![FERET Images](/assets/ml/feret-grid.jpg)
Example images from the FERET database

I'm not sure what I'm going to do with these images. I could use them to train a neural network, but they're also an interesting artifact in themselves. They're essentially a time capsule from the campus of [George Mason University](https://www2.gmu.edu/) in the 1990s - 90s haircuts etc. I also like the idea that these are images only ever intended for machines to look at. Also the fact that these are basically scientific documents created for a government agency, yet some of them are surprisingly artisitic.

![Evidence](/assets/ml/evidence-1977.jpg)
Evidence (1977) by Larry Sultan and Mike Mandel. [Image Source](http://larrysultan.com/archives/wp-content/uploads/2013/06/EV_PP32_SULTAN_MANDEL_1977.jpg)

It reminds me of [Evidence (1977)](http://larrysultan.com/gallery/evidence/) by Larry Sultan an Mike Mandel, where they took NASA research photographs, took them out of their original context and put them in a new order that tells a story.

## January 15, 2018

Turns out [Trevor Paglen](http://www.paglen.com/) did some [work on the FERET images very recently](https://qz.com/1103545/macarthur-genius-trevor-paglen-reveals-what-ai-sees-in-the-human-world/). The exhibition also includes machine-generated images and some original photography - all very succesful. I'll try and get an exhibition catalogue.

Paglen has been doing this work for a while. Other projects of his include [Invisible : covert operations and classified landscapes](https://libsearch.arts.ac.uk/cgi-bin/koha/opac-detail.pl?biblionumber=235160&query_desc=), a book on restricted government sites. Also [Blank Spots on the Map](https://books.google.co.uk/books/about/Blank_Spots_on_the_Map.html?id=oM8u2198DcsC&printsec=frontcover&source=kp_read_button&redir_esc=y#v=onepage&q&f=false), which is about how governments manipulate maps to hide what they're doing. 

## January 16, 2018

### Readings

- Paglen, T. (2016), *[Invisible Images (Your Pictures Are Looking at You)](https://thenewinquiry.com/invisible-images-your-pictures-are-looking-at-you/)*
- Flusser, V. (1984), *[Towards A Philosophy Of Photography](https://archive.org/details/FlusserVilemTowardsAPhilosophyOfPhotography1984)*
- Starnes, S. (2017), *[TREVOR PAGLEN: A Study of Invisible Images](https://brooklynrail.org/2017/10/artseen/TREVOR-PAGLEN-A-Study-of-Invisible-Things)*
- Turk, Pentland (1991), *[Face Recognition Using Eigenfaces](http://cvrr.ucsd.edu/ece172a/fa10/projects/papers/eigenfaces_cvpr.pdf)*
- Turk, Pentland (1991), *[Eigenfaces for Recognition](https://s3.amazonaws.com/academia.edu.documents/30894770/jcn.pdf?AWSAccessKeyId=AKIAIWOWYYGZ2Y53UL3A&Expires=1516287716&Signature=jG1StnTWLzBpYVDBek7S%2Fi5vKD4%3D&response-content-disposition=inline%3B%20filename%3DEigenfaces_for_Recognition.pdf)*

Tracey suggests I go see an exhibition called [Metadata - How we relate to images](http://www.arts.ac.uk/csm/whats-on-at-csm/lethaby-gallery/metadata/) at CSM - I've scheduled for Saturday.

I've spent some more time with the FERET database, going through the images, printing some of them and reading some of the related government reports:

- Phillips, Moon, Rizvi, Rauss (1999), *[The FERET Evaluation Methodology for Face-Recognition
Algorithms](http://ai2-s2-pdfs.s3.amazonaws.com/0f0f/cf041559703998abf310e56f8a2f90ee6f21.pdf)*
- Phillips, Rauss, Der (1996), *FERET (Face Recognition Technology) Recognition Algorithm Development and Test Results*

The 1996 paper points out:

> Some questions were rasied about the age, racial, and sexual distribution of the database. However, at this stage of the program, the key issue was algorithm performance on a database of a large number of individuals.

This might be an area worth exploring. The photos were collected by GMU, suggesting that most of the volunteers are probably students and university staff (not military emplyees as is sometimes suggested). In some sense the whole history of institutional recism and sexism might be baked into this database?

Might be good to run some analytics on gender / age / race distribution of the databse.

I'm still interested in how exactly these photography sessions were conducted - how did they recruit volunteers, whose office was turned into a studio, what did people at the time say about the program etc.

## January 17, 2018

### Readings

- Bridle, J. (2013), *[How Britain Exported Next-Generation Surveillance](https://medium.com/matter/how-britain-exported-next-generation-surveillance-d15b5801b79e)*
- Taigman, Yang, Ranzato, Wolf (2014), *[DeepFace: Closing the Gap to Human-Level Performance in Face Verification](https://research.fb.com/wp-content/uploads/2016/11/deepface-closing-the-gap-to-human-level-performance-in-face-verification.pdf?)*
- Pinheiro, Collobert, Dollar (2015), *[Learning to Segment Object Candidates
](https://arxiv.org/pdf/1506.06204.pdf)*

Segune suggests two additional readings on photographic archives (after seeing the FERET images): 

- Enwezor, O. (2008), *[Archive Fever: Photography between History and the Monument](http://moodle.arts.ac.uk/pluginfile.php?forcedownload=1&file=%2F%2F520513%2Fblock_quickmail%2Fattachment_log%2F172019%2Fenwezor-archive.pdf)*
- Foster, H. (2004), *[An Archival Impulse](http://moodle.arts.ac.uk/pluginfile.php?forcedownload=1&file=%2F%2F520513%2Fblock_quickmail%2Fattachment_log%2F172019%2FHal%20Foster_archival%20impulse.pdf)*

![Installation view of 48 Portraits by Gerhardt Richter](/assets/ml/richter.jpg)
[Tate Modern](http://www.tate.org.uk/art/artworks/richter-48-portraits-ar00025)

She also points out [48 Portraits (1971-98)](http://www.tate.org.uk/art/artworks/richter-48-portraits-ar00025) by Gerhardt Richter.

### Notes on "Invisible Images (Your Pictures are Looking at You)"

On a basic level, Paglen argues that existing models of visual culture are becoming less relevant because the vast majority of images are now created by machines for other machines. This has to do with the fact that a digital image is *primarily* machine-readable. You can only make it visible to human eyes for a brief moment using additional software, screens etc. 

The second main point is that images are no longer primarily used as representations. Instead, machines use images to make predictions, activate mechanisms and generally *actively change* the real world. In his words:

> Images have begun to intervene in everyday life, their functions changing from representation and mediation, to activations, operations, and enforcement. Invisible images are actively watching us, poking and prodding, guiding our movements, inflicting pain and inducing pleasure. But all of this is hard to see.

Paglen cites a number of examples of this that have been in operation for years. These included cases where license plates are recognised and used to track people's movements and retail companies that analyse customers' facial expressions

He makes the point that places like Facebook are closely modelled on traditional notions of sharing images (using skeumorphic terms like *albums*, *slideshows*) but this is only true on the surface. Underneath, your photos are feeding highly developed machine learning algorithms designed to extract value from your images (now or in the future). As Paglen points out, you could easily imagine the license plate recognition case being expanded to include images people share on social media. 

He closes by saying that the long-term solution to this needs to be regulation - "hacks" that might be effective against recognition algorithms today will loose their effectiveness over time. 

> We no longer look at images - images look at us. They no longer simply represent things, but actively intervene in everyday life. We must begin to understand these changes if we are to challenge the exceptional forms of power flowing through the invisible visual culture that we find ourselves emeshed within.

## January 20, 2018

### Notes on Segune's Readings

(She suggested these [a few days ago](#january-17-2018))

#### Archive Fever: Photography between History and the Monument

This cites an essay called [The Body and the Archive (1986)](https://www.jstor.org/stable/pdf/778312.pdf?refreqid=excelsior%3A53f6ebc3ba7c0f02e549d2dd321beee4) by Allan Sekula, which talks about how photographic archives have been used as "an instrument of social control an differentiation underwritten by dubious scientific principles".

![Bertillon Archive](/assets/ml/bertillon.jpg)
[The Metropolitan Museum of Art](https://www.metmuseum.org/art/collection/search/289245?sortBy=Relevance&amp;ft=alphonse+bertillon&amp;offset=0&amp;rpp=20&amp;pos=1)

Sekula talks about [Alphonse Bertillon](https://en.wikipedia.org/wiki/Alphonse_Bertillon), a French policeman who created a huge bullshit system to classify criminals based on their photographs of their faces. [The Met](https://www.metmuseum.org/art/collection#!?q=alphonse%20bertillon&perPage=20&sortBy=Relevance&sortOrder=asc&offset=0&pageSize=0) seems to have a good collection of his stuff. The Science Museum has some of the [instruments he used to measure various facial features](http://collection.sciencemuseum.org.uk/search?q=Bertillon).

Similar archival projects to classify people along racial lines (The nazis were big fans).

> Their projects, Sekula writes, "constitute two methoological poles of the positivist attempts to define and regulate social deviance" The criminal (for Bertillon) and the racially inferior (for Galton) exist in the netherworld of the photographic archive, and when they do assume a prominent place in that archive, it is only to dissociate them, to insist on and illuminate their difference, their archival apartness from normal society

Enwezor goes on to describe a number of examples where archives are used as a way to conserve power, present existing systems of oppression as natural etc. 

- The Bush administration collected a huge archive of Iraqi documents, phone conversations, emails ("Intelligence") in the hopes of finding proof of WMD. When they couldn't find any, they made up a document showing that Iraq bought yellow cake.
- Colonial Britain was obsessed with collecting records of all sorts - they fill places like the British Museum, the NHM etc. This was a way for Britain to establish control over far-away countries.

#### An Archival Impulse

## January 24, 2018
TODO CSM metadata show

## January 25, 2018

TODO Spoke to segune about feret images

## January 26, 2018

TODO Jak tutorial, discussed ways of presenting face images

## January 27, 2018

TODO decided to print feret images, looks like its expenive, need to talk to techinician, emailed tracey

## January 29, 2018
TODO Peer assesment

## Febuary 14, 2018

[Eigenfaces](https://en.wikipedia.org/wiki/Eigenface) are a way to represent images used in facial recognition software. First introduced by [Turk and Pentland (1991)](https://s3.amazonaws.com/academia.edu.documents/30894770/jcn.pdf?AWSAccessKeyId=AKIAIWOWYYGZ2Y53UL3A&Expires=1519322406&Signature=zUSN5N4wWx5J0GrqjQdFLMLJYto%3D&response-content-disposition=inline%3B%20filename%3DEigenfaces_for_Recognition.pdf). Below is figure 2 from that paper:

![Eigenfaces](/assets/ml/eigen.png)
[Turk, Pentland (1991)](https://s3.amazonaws.com/academia.edu.documents/30894770/jcn.pdf?AWSAccessKeyId=AKIAIWOWYYGZ2Y53UL3A&Expires=1519322406&Signature=zUSN5N4wWx5J0GrqjQdFLMLJYto%3D&response-content-disposition=inline%3B%20filename%3DEigenfaces_for_Recognition.pdf)

Something intruiging about the aesthetics of research papers.

![More Eigenfaces](/assets/ml/eigenface_reconstruction_opencv.png)
[OpenCV](https://docs.opencv.org/2.4/modules/contrib/doc/facerec/facerec_tutorial.html)

## Febuary 18, 2018

### Another Face Database

The [National Institue for Standards and Technology](https://www.nist.gov/) (which provides the [FERET Database](#january-13-2018)) also has something called the [Multiple Encounter Dataset (MED)](https://www.nist.gov/itl/iad/image-group/special-database-32-multiple-encounter-dataset-meds). This is a database containing 683 mugshots of deceased people used to develop facial recognition software. This is starting to get much closer to [Berillion](#january-20-2018). I'm assuming by using photographs of dead people allows them to get around some privacy concerns. They've also removed (in some cases blacked out) any reference to the person's name or reason of arrest. So what you're left with is this archive of black and white photographs of people from the 60s, 70s and 80s (judging by the haircuts).

![Mugshots](/assets/ml/mugshots.png)

With the images comes a datafile describing the photographs:

<table class='dense'>
<thead>
<tr>
<td>Subject</td>
<td>Encounter</td>
<td>Record</td>
<td>DOB</td>
<td>WGT</td>
<td>SEX</td>
<td>HGT</td>
<td>RAC</td>
<td>HAI</td>
<td>EYE</td>
<td>PHD</td>
<td>IMT</td>
<td>POS</td>
<td>VLL</td>
<td>HLL</td>
</tr>
</thead>
<tbody>
{% for row in site.data.mugshots %}
<tr>
    <td>{{row.Subject}}</td>
    <td>{{row.Encounter}}</td>
    <td>{{row.Record}}</td>
    <td>{{row.DOB}}</td>
    <td>{{row.WGT}}</td>
    <td>{{row.SEX}}</td>
    <td>{{row.HGT}}</td>
    <td>{{row.RAC}}</td>
    <td>{{row.HAI}}</td>
    <td>{{row.EYE}}</td>
    <td>{{row.PHD}}</td>
    <td>{{row.IMT}}</td>
    <td>{{row.POS}}</td>
    <td>{{row.VLL}}</td>
    <td>{{row.HLL}}</td>
</tr>
{% endfor %}
<tr><td>...</td></tr>  
</tbody>
</table>

Interestingly this contains fields for height (ie. 5'11) weight (in lbs.) and date of birth of the detainee. There are nearly equal numbers of white and black people in the photographs, which would be [in line with arrests in the U.S](https://en.wikipedia.org/wiki/Race_and_crime_in_the_United_States#Arrests_and_sentencing).
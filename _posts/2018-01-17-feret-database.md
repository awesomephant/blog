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

(Not sure if I can reproduce some images here)

I'm not sure what I'm going to do with these images. I could use them to train a neural network, but they're also an interesting artifact in themselves. They're essentially a time capsule from the campus of [George Mason University](https://www2.gmu.edu/) in the 1990s - 90s haircuts etc. I also like the idea that these are images only ever intended for machines to look at. Also the fact that these are basically scientific documents created for a government agency, yet some of them are surprisingly artisitic.

It reminds me of [Evidence (1977)](http://larrysultan.com/gallery/evidence/) by Larry Sultan an Mike Mandel, where they took NASA research photographs, took them out of their original context and put them in a new order that tells a story.
---
layout: post
title:  "Machine Learning Datasets"
date: 2018-04-15 19:15:00
tags: ""
thumb: ""
intro: ""
---


<div markdown='1' class='note'>
The following is a draft essay that will be part of an upcoming publication on the datasets that are used to train machine learning models.
</div>

## Introduction

Machine learning models govern much of our daily experience. In the form of recommendation algorithms they control the content we see online. In the form of facial recognition models, they decide if we're allowed to enter buildings or board flights. In the form of natural language processing models, they power ever more powerful digital assistants.

The proliferation of these models has two main reasons: A dramatic fall in the price of processing power (Goodwin's Law) and a dramatic increase in the data that is available to train them. Data is the critical component. As Norvig et al (2009) show, the type of algorithm becomes increasingly irrelevant as the amount of available training data increases.

The training data that powers machine learning models is usually invisible. It lives on racks of hard drives behind the scenes while the finished product is described as "magical". The are also inherently inaccessible to humans:

Many modern datasets are simply too large for any one person to ever fully consume.

The modes in which we communicate are also primarily machine-readable: A text message exists as a series of binary chunks on a hard-drive _most of the time_ - only when you open the message on a screen does it become briefly visible to human eyes. The same applies to digital photographs: For the vast majority of their existence, they are stored in a machine-readable format. You have to have specialised hardware (i.e a phone) and invest eletricity to briefly convert the image into something you as a human can understand.

For some datasets, the translation into a human-readable format is simple: Image databases such as FERET and MNIST come in common file formats and can be easily reproduced. For others, such as the human gait dataset, we have to go to some lengths to make the data visible - in this case through 3d-rendering software and a modern graphics card. 

Other datasets are nearly impossible to translate to a human-redable format - this includes browsing behaviour, trajectories and medical data. This un-viewable data 

## A Machine Learning Primer

The mathematical foundations of modern machine learning models date back to 

Machine Learning models are often implemented as a replacement for more traditional algorithms (which in turn replaced manual human labour). An algorithm is defined as a sequence of rules defined by a human: We can easily imagine what a face recognition algorithm might look like:

> Look for clusters of dark pixels surrounded by light pixels (those are probably the eyes). Look for a cluster of red-ish pixels, assume that is the mouth. Measure the distance between these features. Then compare distance measurement between different faces.

This is essentially how traditional faceial recognition algorithms would operate. The problem with this approach lies in ever-growing complexity. Let's say our facial recognition algorithm encounters someone wearing sunglasses: Suddenly we can't detect the eyes, and the algorithm fails. We could engineer our way around this by adding more and more rules, for instance:

> IF you can't detect eyes, assume the person is wearing glasses. Measure the distance between the ears instead adn multiply by .8 to approximate the eye distance.


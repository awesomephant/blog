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

The modes in which we communicate are also primarily machine-readable: A text message or a digital photograph exists as a series of binary chunks on a hard-drive _most of the time_ - only by using by pulling them up on a screen can we make them visible to human eyes for a brief moment.

For some datasets, the translation into a human-readable format is simple: Image databases such as FERET and MNIST come in common file formats and can be easily reproduced. For others, we have to go to some lengths to make the data visible - in this case through 3d-rendering software.

Other datasets are nearly impossible to translate to a human-redable format - this includes browsing behaviour, trajectories and medical data.

## Historical Perspective

Investigating multiple datasets at the same time can give us some historical perspective on the field. Let's take facial recognition:
The earliest dataset discussed here is the FERET database, which consists of 11.000 portrait photographs of 468 people. Collecting this dataset required substantial effort. The Department of Defense commissioned George Mason University to collect the photographs. This involved recruiting hundreds of paid volunteers and spending weeks photographing them in a strictly controlled environment. The photographs were shot on film, which was then digitised following another strict procedure. Finally the database was sent out on 14 CDS. The process took nearly 5 years (cit). The Switchboard dataset was created with funding from the Army Research Laboratory following a similar procedure. 

Compare this to contemporary datasets like Youtube 8 Million.

It also consists entirely of user-generated content. There is no scanning of negatives or transcribing of audio tapes (as there was in the cases of FERET and Switchboard) because the data is already in a fundamentally machine-readable format.

## ML Datasets as Cultural Artifacts
The aim of most data collection efforts is to make a generalisation: Let's collect images of 10.000 faces so we can learn things about every face on the planet. Let;s put together an email dataset to learn about language generally. However, these efforts are also very specific. In the case of the FERET database, we're looking at a very narrow group of people during a short period of time in the early 1990s at the computer science department of George Mason University. They end up inadvertantly collecting meta-data about that time in that part of the world: How did people dress, how did they wear their hair, what was the demographic makeup of that university. In some of the photos we can see parts of ID badges, maybe giving us hints as to the organisation that carried out the project. We might further narrow it down to individual people - What did they wear, how did they look on a particular day in 1992?

We can make similar observations on the Switchboard dataset. The aim of the project was to gain insight into the nature of spoken language generally - The data is used to train speech recognition and speech synthesis that is used all over the world. But the data is collected by a relatively small group of people (about 500) in America in January 1991. We can get an idea of which political issues people were worried about at the time, what TV shows they watched, were they work (unsurprisingly Texas Instruments) which technology they were hearing about etc. Perhaps more interesting are the instances when participants veer off the pre-defined conversation topics. Some share personal stories:

Others give us clues about the experiment itself: Which buttons they had to press on their phones to start and stop recordings, how many phone calls they had made so far etc. Sometimes the conversation is cut off abruptly - this is the Computer [subsiture their 90s term] disconecting the call, acting in a way as an editor.

[enron]

## ML Datasets as Agents of Change

These datasets allow machines to get an understanding of the world - wouldn't we want to show ourselves in a better light? Switchboard has some awful sentiments toward Mexican immigrants and (from a rational perspective) insane opinions on gun control. In an even starker example, the only reason the Enron Email Corpus exists is because it details major crimes.

It is worth pointing out that these datasets are not easily accessible. You have to invest capital to make them visible to humans - to download, store, covert to readable file formats, in some cases plot, render, typeset and eventually display on screen or printed page. [Paglen] 

## ML Datasets as Capital

The science of machine learning is accessible - most important papers are published online, software is open source, textbooks are cheap. However, to make an application that is actually useful you have to have these huge datasets, and they remain limited to major corporations. The reason many tech companies are able to have successful products is by leveraging data. Data = Capital. Generating data = labour. We're in effect donating huge amounts of capital to companies and governments all the time - by walking around, using the internet, uploading photographs, having a face in public - you're creating all this data that has major economic value. 

## A Machine Learning Primer

Humans have amazing cognitive ability. For instance, it is trivial for most people to complete a sentence like "Peter goes to the ... for lunch". However if we examine this in detail, it becomes a complex operation. First, you translated abstract letterforms into words. Next you have to have an understanding of the English language to give meaning to those words: "Peter" is a name, so we're dealing with a person. "For lunch" is an expression that means "to eat lunch". Finally you accessed some sort of mental database of possible locations where someone might eat lunch - a cafe, a restaurant etc.

On an intuitive level, machine learning is surprisingly accessible. This might be because its basic principle is to make machines think _like us_.

The mathematical foundations of modern machine learning models date back to 

Machine Learning models are often implemented as a replacement for more traditional algorithms (which in turn replaced manual human labour). An algorithm is defined as a sequence of rules defined by a human: We can easily imagine what a face recognition algorithm might look like:

> Look for clusters of dark pixels surrounded by light pixels (those are probably the eyes). Look for a cluster of red-ish pixels, assume that is the mouth. Measure the distance between these features. Then compare distance measurement between different faces.

This is essentially how traditional faceial recognition algorithms would operate. The problem with this approach lies in ever-growing complexity. Let's say our facial recognition algorithm encounters someone wearing sunglasses: Suddenly we can't detect the eyes, and the algorithm fails. We could engineer our way around this by adding more and more rules, for instance:

> IF you can't detect eyes, assume the person is wearing glasses. Measure the distance between the ears instead adn multiply by .8 to approximate the eye distance.

You see how quickly an algorithm like this might turn into an endless series of IF statements relatively quickly. The premise of machine learning is to make the machine _write it's own algorithm_. Rather than defining a long list of rules, we give the machine examples of what we want it to do - in the case of facial recognition, this might be a database of photographs of known people. Then, we let the machine find an algorithm that solves the problem. The machine might even come up with criteria that we could never think of: Intuitively, we wrote our algorithm based on the eyes - but perhaps it's much easier to identify people by their earlobes? A machine learning model might find that during training.
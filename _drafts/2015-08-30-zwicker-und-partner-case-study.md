---
layout: post
title:  "Case Study: Redesigning Zwicker & Partner"
date:   2015-08-30 12:51:32
thumb: "http://upload.wikimedia.org/wikipedia/en/0/06/Beck_Map_1933.jpg"
intro: "I just finished work on a new responsive site for Zwicker & Partner, a German-based radiology practice. This is about some of the tools we used, conversations we had and things we learned in the process."
---

Medicine, like every scientific discipline, is about sharing knowledge. The whole point of any scientific research project is to get the results published for everyone to see, learn from and use in their own studies. Following that spirit, Zwicker & Partner have published dozens of articles and given countless talks to educate patients, colleagues and the general public about the work they do. The redesign project was all about making that content accessible for more people than the existing website could.

##Content First

The first task in the design process was to find that content on the existing website, review and catalogue it for later use. We used a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1dgB2zeRMfFjbcv8X0vgK68mCedhBZaDtr3CROR5C7Cg/edit?usp=sharing) with columns for title of the article, the date it was last updated, url and any attached files or other resources. The spreadsheet ended up with just shy of 200 entries. We used that spreadsheet to review every piece of content, flag ones that needed to be rewritten, updated or re-structured.

To ensure consistency in language and style across the site, I developed a [content template](https://docs.google.com/document/d/1nWz5id7elPgUEBNMZo6jE4P02oIoxTGVD7GXC0K9TVc/edit?usp=sharing) we could refer to when editing the articles. The most important thing it introduces is the summary that leads every article. The next step was to manually transfer the revised content from Typo3 into Wordpress.

##Visual Design
The main goal of the visual design was to give quick access to the content. I drew lots of inspiration from public signage

###Illustrations
At this point, the design was functional, but didn't convey much in the sense of character. 

##Implementation Details

I thought I'd share some of the tools I used throughout the process.

The site is built on Wordpress, using the Timber plugin to allow for easier templating. I used Grunt to compile my CSS, minify my assets and do all sorts of other useful stuff. The proxy feature in browser sync allowed me to have a live-updating preview of the site locally on my laptop.


Accessibility

Designing for Crisis

Performance

Increased Google PageSpeed Index from 58 to 99. CSS loads asynchronously so content isn’t delayed.

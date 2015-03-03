---
layout: post
title: "2015 ZHDK Applicants' Assignment: Good Morning Twitter"
date: 2015-01-21 12:51:32
categories: ""
thumb: "https://farm9.staticflickr.com/8586/16407299477_e1f327e497_b.jpg"
intro: Zurich School of Arts put out an assignment for prospective students each year. This time, the topic was "Sharing".

---

Universites' assignments for prospective students are among the most vague, non-descript pieces of writing you can find. The brief I got from Zurich School of Arts was no exception to that. They give you one word, in this case *"Sharing"* and then explain for two pages that you can do literally *whatever you want* and that there's *no limits at all*.

Designing without constraints is difficult. So I made some up.

##Made-up Constraints

I came up with these pretty much on the spot. If I did the same exercise today, I'd probably come up with a completely different set. 

- Social Media is all about sharing things, so make something about social media.
- Make something about Twitter, because that's the only form of social media I use and understand (at least to some extent)
- Make it digital. If I made something that I could potentially have multiple prints of, I could use it for other applications as well. Good plan.
- Probably make something data-driven because that would stand out from the rest of my portfolio.

These might not be terribly original, but the important thing was to have something I could work with. I could always come back and modify these, should I need to.

##Collecting the Data
I went with node just because JavaScript is the only programming language I feel at least somewhat comfortable with. I used [node-twitter](https://www.npmjs.com/package/twitter) by [Desmond Morris](http://desmondmorris.com/) to connect to the Twitter API. This allowed me to get to a working prototype in less than an hour.

The final script connects to the twitter Streaming API, gets every tweet that contains the words "Good Morning" in one of around 15 languages and, checks which of them have geo coordinates and saves those to a temporary file.

<script src="https://gist.github.com/0bdaa2923af4acb03e9c.js?file=stream.js" type="text/javascript"></script>

I let this run for 24 hours from 9am on Febuary 19th to 9am on Febuary 20th 2015.

##Plotting
<figure><img src="https://farm9.staticflickr.com/8600/16404283729_8eddab45cf_h.jpg" width="1600" height="1089" alt="plot"><figcaption class="desc">Good Morning Twitter, Preliminary Plot, Data Visualisation, ~17.000 Tweets, Annotated Printout</figcaption></figure>
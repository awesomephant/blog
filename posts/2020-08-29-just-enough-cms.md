---
layout: post
title: Just enough CMS
date: 2020-08-29
includesMath: false
includesMusic: false
intro: ""
tags: post
---

Here's a question I ask myself all the time: *Does this website I'm about to build need a CMS?*.

If the answer is yes, I'm creating a lot of work for myself *now*: I'll have to spin up some local development environment, think up a data structure, and write a bunch of templates. But *later* the CMS will make it really easy to update the site, so hopefully I'll make up the time I spent setting it up.

If the answer is no, I'm making the opposite bargain. I'm making my life easy *now* by writing straight-up HTML files, but if I ever need to update the site *later* it'll be a bunch of effort.

Something that's been helping me recently is to think about this not as a yes/no question, but as one of degrees. Your website might need *a little bit of CMS*, or *a whole bunch*. Your needs might change over time, too. Thankfully there's all kinds of technologies that give you those gradations.

## Data files
Your data is still in your git repository, but you've moved it from your HTML into something like a ```.yaml``` file that's easier to write. Then you have some build process that combines the information from that file with a template and produced the final HTML. This is exactly how I'm writing this blog post: A markdown file that's compiled to HTML by [Eleventy](https://www.11ty.dev/).


## Headless
There's a bunch of different levels of involvement here. At the low end is something like a shared Google spreadsheet that you export to CSV and throw your build process (totally valid thing to do).

Then there's things like Contentful and Sanity that follow a "bring your own schema" model, ie. they *only* deal with the data you specify.

Even higher up the scale are things like Ghost, or even Wordpress (through the [REST API](https://developer.wordpress.org/rest-api/)) that start to make some assumptions about how you might want to structure your content. They probably have some built-in schemas for things like articles and comments.

Either way, these tools give you some useful powers:

- Fancy editing UI
- User management
- Some way to deal with assets, especially images.

## Full-on CMS
To me, these are products like Wordpress, Shopify, or Tumblr. Big, sohpisticated programs that run on your server and handle both the authoring and the delivery of your website.

You get all the features of the headless CMS, plus some selection of other *stuff*. A big one for me is e-commerce, but there's also things like commenting, scheduling, sharing, a plugin system, and sometimes in-built distribution systems.

---

Lately I've been enjoying working on the lower end of this scale. There's been a few cases where I've had to [move up the scale mid-project](https://maxkoehler.com/work/camberwell-2020/), but that turned out to be easier than I had thought. I imagine going the other way would be much harder.
---
layout: post
title: Content management systems in the real world
date: 2022-01-17
includesMath: false
includesMusic: false
intro: ""
tags: post
draft: true
---

## Who this article is for

This is part two of a seminar originally written for undergraduate design students, but it'll work for anyone who is comfortable with HTML and the command line.

In part one we discussed that content management systems let us build bigger web projects by abstracting our content away from your markup. We do that by moving our content into some form of datastore, writing templates to describe how we want to display that data, and finally setting up some system to combine templates and data into HTML files a browser can render.

There are _many_ choices for each of these components.

## Data stores

Any place you can store information in an organised way and retrieve it programatically is probably going to work as a datastore for your website. Here some I've worked with:

- Text files, including specialised formats like Markdown, CSV, TSV, and JSON.
- Productivity software like Google Sheets and Google Docs. These are cool because you get all their normal collaboration features, so you can work on website content together without any extra setup.
- Traditional databases like MySQL or Postgres.

Which one you choose depends on the kind of site you're working on. 

## Templating languages

- JSX – usually comes together with a framework called React.
- Mustache – it's named that because the placeholders use curly braces `\{\{\}\}`, which kind of look like a sideways mustache.
- Handlebars – see above.
- Liquid – developed by Shopify, but used elsewhere too.
- PHP – really a programming language, but has been used for templating for a long time.
- Twig – often used in PHP projects.


## Systems

Some systems are attached to particular datastores and templating languages. For instance, Wordpress only works with MySQL and generally uses PHP templates (though I like to use Twig instead). Kirby uses PHP templates too, but stores the data in text files. Both Wordpress and Kirby also give you a visual interface to edit the data, so you don't have to edit MySQL tables or those text files directly. Systems like this are sometimes called *monolithic*.

If that's too limiting, there are systems that give you more choices. First, there are systems that *only* give a datastore with an editing interface, with the assumption that you'll figure out your own templating situation. These systems are sometimes called _headless_.

A Google spreadsheet would fall into this category, as would specialised services like Contentful, Sanity, and Ghost.

There are also tools that _just_ do templating and don't particularly care about where the data comes from. This site is built in Eleventy, which can be attached to pretty much any datastore and supports a range of templating languages. React would fall into the same category - it has sophisticated templating, but won't help you to store your data.

## Let's set up a CMS

<p class="note">
This article <a href="https://maxakohler.medium.com/whats-a-content-management-system-9cf62a4cab9e">also appeared on Medium</a>.
</p>

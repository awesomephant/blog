---
layout: post
title: What's a Content Management System?
date: 2021-11-20
includesMath: false
includesMusic: false
canonical: https://maxakohler.medium.com/whats-a-content-management-system-9cf62a4cab9e
intro: "As your web projects grow, writing plain HTML becomes impractical - a Content Management System (CMS) is the layer of abstraction you need."
tags: post
thumb: https://www.maxkoehler.com/assets/cms-spot-1.png
spot:
  src: /assets/cms-spot-1.png
  alt: Drawing of young person sitting on the floor with a laptop, surrounded by tall stacks of paper. 
---

## Who this article is for

This was originally written as a seminar for undergraduate design students, but it'll work for anyone who is comfortable with  HTML. If you've built a few websites in HTML and CSS and are ready to take on bigger projects, read on.

## The Problem

Your first few websites are probably built in plain HTML (and CSS and Javascript, but we're not really talking about those here). There's nothing wrong with those technologies - they'll get you pretty far! But as your projects grow, you tend to run into two problems:

- **Sites with lots of content become unwiedly.** Let's say you're building a site with a hundred articles, or a thousand archival records, or ten thousand of something else: it's not that you _couldn't_ write out HTML for all of that content, but it would be pretty tedious. And if you wanted to change anything about the markup after the fact, that would be a time-consuming task.
- **Other people need to edit content on your website.** You could teach them all to write HTML, but that's not always an option: Maybe they work in a different department, or they'll want to work on the site long after you've moved onto the next project and are able to help out. Also, HTML might not be the best place to work on content: a writer might prefer to work in Google Docs or some other writing app, but there's no easy way to wrangle that back into a HTML file.

You'll encounter other issues when scaling up your web projects, but many of them can be traced back to one of these two.

## The solution

The solution to introduce a level of abstraction. Specifically, we're going to abstract our content away from our markup (ie. our HTML), so we can work on each separately. We do that in three steps:

1. Take all the content (like text and images) out of our HTML file and put them into a separate datastore.
2. Write templates that look more or less like HTML but have special placeholders where our content used to be.
3. Set up a piece of software that takes our content and our templates and combines them back into regular HTML - because that's the only thing browsers understand.

The combination of one, two, or all three of these things is called a CMS (Content Management System). Some CMS have even more features, like an interface to let you edit content in the datastore, or template customisation, or analytics, or webhosting – but the big, central idea is abstracting content from markup.

The best way to understand this idea is to look at an example. I'll leave out most of the technical details for now - we'll deal with them in the second part: _Content Management Systems in the Real World_.

## An example

Let's say we have a website called _Max's recipe box_ that lists a bunch of recipes and how long they take to cook. The site works great, but we've run into the two problems we mentioned in the beginning: We're adding lots of recipes, so the HTML file is becoming unwieldy. Also, our friend Alice wants to contribute to the site, but she doesn't want to edit HTML files. We've decided to address these problems by getting the site onto a CMS. How do we go about that?

At the moment, our HTML file looks like this:

```html
<h1>Max's recipe box</h1>
<ul>
  <li>
    <h2>Mushroom pizza</h2>
    <span>Duration: 0:45</span>
  </li>
  <li>
    <h2>Pumpkin soup</h2>
    <span>Duration: 0:45</span>
  </li>
  <li>
    <h2>Apple pie</h2>
    <span>Duration: 0:45</span>
  </li>
</ul>
```

Let's start by extracting the title of our site (`Max's recipe box`) into a datastore - in this case we'll use a text file:

```csv
site_title
Max's recipe box
```

We have to label the piece of data we extracted so we can reference it later. I came up with `site_title`, but anything that makes sense in your mind will work.

Then, we put a placeholder where that piece of content used to be in our HTML. We'll use a templating language called Liquid for these examples, which uses {%raw%}`{{ double curly braces }}`{%endraw%} to mark placeholders - other languages have different conventions. Our file now looks like this:

{%raw%}

```liquid/0
<h1>{{ site_title }}</h1>
<ul>
  <li>
    <h2>Mushroom pizza</h2>
    <span>Duration: 0:45</span>
  </li>
  <li>
    <h2>Pumpkin soup</h2>
    <span>Duration: 0:45</span>
  </li>
  <li>
    <h2>Apple pie</h2>
    <span>Duration: 0:45</span>
  </li>
</ul>
```

{%endraw%}

Note that we're using the label from our datastore (`site_title`) to refer to the piece of content we just extracted. The addition of that placeholder turns our HTML file into a _template_.

Our new setup is already useful: If Alice wanted to change the title of the site, she wouldn't have to touch any HTML - all she would have to edit is that little text file.

Now, let's do the same with the list of recipes. We start by pulling the titles and durations into another text file:

```csv
title, duration
Mushroom pizza, 0:45
Pumpkin Soup, 1:20
Apple Pie, 2:00
```

Again, we're using the first line of our file to label our data: `title` and `duration`. Every line after that represents an individual recipe, each with the actual title and duration. This way of organising a text file is called CSV (Comma-Separated Values), and when you squint at it you'll see that it works like a spreadsheet: the first line of the file lists the column titles, then the data follows row after row. You can actually export CSVs from most spreadsheet software, which can be pretty handy.

With our data extracted and organised, we can replace the recipe list in our template with more placeholders:

{%raw%}

```liquid/2-7
<h1>{{siteTitle}}</h1>
<ul>
  {% for recipe in recipes %}
  <li>
    <h2>{{recipe.title}}</h2>
    <span>Duration: {{recipe.duration}}</span>
  </li>
  {% endfor %}
</ul>
```

{%endraw%}

The line {%raw%}`{% for recipe in recipes %}`{%endraw%} is telling the computer: _Hey! For every recipe in our datastore, repeat whatever markup follows until you see {% raw %}`{% endfor %}`{% endraw %}._ Between those tags we use placeholders like {%raw%}`{{recipe.title}}`{%endraw%} to display specific pieces of information for the current recipe. Liquid has many more constructs like this for dealing with data in smart ways – for example, we could output different HTML if a recipe has a particularly long title, or no title at all – but the principle is the same.

Moving our recipes into a datastore has the same benefit as extracting the title: If Alice wants to add a recipe to the list, she can just edit the CSV file. Even better, she could import that file into Google Sheets, invite other people, set up a whole editorial process for adding recipes – as long as she export a CSV file at the end, it wouldn't impact our workflow at all.

But we've also solved our second problem: The template doesn't care if our site has 5 or 5,000 recipes - it'll iterate through them and output the HTML just the same. If we need to change anything about the markup, we just edit the template and the computer does all the boring typing for us.

## Demo

The easiest way to get a feel for these concepts is to work with them directly. Here's a coding environment with the three files we discussed: Two CSV files (the datastore) and a Liquid template. All three are editable. Press the button below to smush them into a HTML file, then change the data, the template, or both, and observe how the rendered HTML changes.

{% include cms-demo.liquid %}

Don't worry about how exactly our data and templates are rendered into HTML in this demo (though feel free to look at the code if you're curious) – the goal for now is to get you comfortable with the principle of separating content from markup. Once you've achieved that, you're ready to tackle the tricky business of setting up your own content management system and using it for real-world projects.

{% include fig.liquid, src: "/assets/cms-spot-2.png", alt: "Steaming mug with a smiley face sits on a pile of paper", class: "thumbnail" %}

Part two of this article, _Content Management Systems in the real world_, is coming soon. [Sign up to my email newsletter](https://tinyletter.com/maxakohler) or [follow me on Twitter](https://twitter.com/maxakohler) to be notified when it does. [^1]

<p class="note">
This article <a href="https://maxakohler.medium.com/whats-a-content-management-system-9cf62a4cab9e">also appeared on Medium</a>.
</p>
---
layout: post
title: Per-file commit logs with Eleventy
intro: Using computed data in Eleventy to produce file-specific changelogs
date: 2022-03-19
includesMath: false
includesMusic: false
tags: post
showChangelog: true
---

## Background

Sometimes it's a good idea to publicly document how a website changes over time. I'm thinking of things like legal documents, technical documentation, public policy, or any other piece of content you want to be extra transparent about.

To do this well, you'd probably want to:

- Document changes completely and accurately. If the point of the exercise is to create transparency, you're hindering yourself if you're picking and choosing what to include.
- Document changes in context. If I want to know how you changed your privacy policy, I don't want to go digging for that information in a giant changelog containing every change made to the website ever

If your content is under version control you're already doing this. Unless you go out of your way, you literally cannot change a file _without_ creating a permanent record containing the diff, your name, the date, and a message describing the change. And git has extremely good built-in tools to query those records by file, date, author, and lots of other parameters.

Why not leverage that and generate file-specific changelogs straight from the commit history?

## Eleventy + Simple Git

We're going to use [Simple Git](https://www.npmjs.com/package/simple-git) to read the commit history and it available to templates using Eleventy's [computed data](https://www.11ty.dev/docs/data-computed/) feature.

Let's assume we want to generate changelogs for Markdown files in a collection called `posts`.

We start by creating a data file at `/posts/posts.11tydata.js` (the filename must match the name of the collection). That file contains the following Javascript:

```js
const git = require("simple-git")();

async function getChanges(data) {
  const options = {
    file: data.page.inputPath,
  };
  try {
    return await git.log(options).all;
  } catch (e) {
    return null;
  }
}

module.exports = {
  eleventyComputed: {
    changes: async (data) => await getChanges(data),
  },
};
```

Because we created the data file inside the `/posts` directory (as opposed to the global `_data` folder) we have access file-specific data properties. One of these (auto-generated [by Eleventy](https://www.11ty.dev/docs/data-eleventy-supplied/)) is `page.inputPath`, which contains the path to the original source file being processed. We pass that information to `git.log()` to get the file's commit history and save it to Eleventy's [data cascade](https://www.11ty.dev/docs/data-cascade/) in our `module.exports` statement.

When we run Eleventy now, each post has the commit log available as data (in reverse chronological order):

```diff-json
 {
   "title": "My Page Title",
+  changes: [
+    {
+      "hash": "0cd158fc81a4d3aefd52e6f416542d3549ef4b4e",
+      "date": "2022-03-19T22:46:53+01:00",
+      "message": "This is the latest commit",
+      "refs": "ori­gin/​mas­ter, ori­gin/​HEAD",
+      "body": "",
+      "au­thor_­name": "Max Kohler",
+      "author_email": "hello@maxkohler.com"
+    },
+    {
+      "hash": "0cd158fc81a4d3aefd52e6f416542d3549ef4b4e",
+      "date": "2022-03-19T22:46:53+01:00",
+      "message": "This is another commit",
+      "refs": "ori­gin/​mas­ter, ori­gin/​HEAD",
+      "body": "This one has an extended description",
+      "au­thor_­name":"Max Kohler",
+      "author_email":"hello@maxkohler.com"
+    }
+  ]
 }
```

Now we can use whatever templating engine we have available to turn this information into a changelog. I happen to use Liquid, so I'd write something like:

{% raw %}
```liquid
{% if changes %}
<ul class="changes">
  {% for c in changes %}
  <li class="change">
    <time class="change__time">{{ c.date }}</time>
    <h3 class="change__title">{{ c.message }}</h3>
    <span class="change__hash">{{ c.hash }}</span>
  </li>
  {% endfor %}
</ul>
{% endif %}
```
{% endraw %}

This works both in [templates](https://www.11ty.dev/docs/layouts/) and individual Markdown files.

## Demo

Here's the real, auto-generated changelog for this post using a slightly modified version of the code above:

{% include "changes.liquid" %}

## Notes

- `git log` is an expensive operation. On my machine in a repository with about 1,000 commits it increases my average processing from 50ms to 150ms. If you're going to do this, it might be a good idea to limit it to files where you actually want to show the changelog, or to only do it on production builds, or both.
- If your source code is public, a cheaper way of doing this is to link to the commit log on Github or wherever you're hosting it.
- `git log` has lots of options.
- Hito Steyerl sometimes _forks_ essays. I think she uses the word in a more general sense, but it might be interesting to have text that has a literal git history attached to it.

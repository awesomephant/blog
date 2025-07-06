---
layout: post
title: Per-file commit logs with Eleventy
intro: Using computed data and simple-git to generate file-specific changelogs.
date: 2022-03-21
includesMath: false
includesMusic: false
tags: post
thumb: https://www.maxkohler.com/assets/git.png
showChangelog: true
changes:
  - message: ksjdhfs
    date: 01-01-2022
---

## Background

Sometimes it's a good idea to publicly document how a website changes over time. I'm thinking of things like legal documents, technical writing, public policy, or any other piece of content you want to be extra transparent about.

If you're going to do this, you probably want to:

- Document _every_ change (even minor ones), and have that documentation accurately reflect the changes you made.
- Provide that documentation _in context_. If someone wants to trace changes to your privacy policy, that information should be right there with the original document. Don't make them go digging for it in an email or company blog.

If your content is under version control you're already doing both of these things. Unless you go out of your way, you literally cannot change a file _without_ creating a permanent record containing the diff, your name, the date, and a message describing the change. And git has extremely good built-in tools to query those records by file, date, author, and other contextual parameters.

Why not leverage that and generate changelogs for individual pages directly from the commit history?

## Eleventy + Simple Git

We're going to use [Simple Git](https://www.npmjs.com/package/simple-git) to read the commit history and make it available to templates using Eleventy's [computed data](https://www.11ty.dev/docs/data-computed/) feature.

Let's assume we want to generate changelogs for Markdown files in a collection called `posts`. We start by creating a data file at `/posts/posts.11tydata.js`. Note that the filename must match the name of the collection.

```diff
 package.json
 .eleventy.js
 _includes/
 posts/
   one.md
   two.md
   three.md
+  posts.11tydata.js
```

Creating our data file inside the `/posts` directory puts it at the end of Eleventy's [data cascade](https://www.11ty.dev/docs/data-cascade/), allowing us to read and write data for individual posts.

We start by _reading_ `page.inputPath`, an [auto-generated](https://www.11ty.dev/docs/data-eleventy-supplied/) property that contains the path to the Markdown file being processed. Then, we pass that information to `git.log()` to get that file's commit history, and _write_ the result into the post's data object.

<span class="code__title">posts.11tydata.js</span>

```js
const git = require("simple-git")()

async function getChanges(data) {
  const options = {
    file: data.page.inputPath,
  }

  try {
    const history = await git.log(options)
    return history.all
  } catch (e) {
    return null
  }
}

module.exports = {
  eleventyComputed: {
    changes: async (data) => await getChanges(data),
  },
}
```

When we run Eleventy now, the data object for each post contains a list of commits to the underlying Markdown file in reverse-chronological order:

```diff-json
 {
   "title": "My Page Title",
+  "changes": [
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

We can now use whatever templating engine we want to render this data to the page. I happen to use Liquid, so I'd write something like:

<span class="code__title">\_includes/post.liquid</span>
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

## Demo

Here's the real, auto-generated changelog for this post using a slightly modified version of the code above:

{% include "changes.liquid" %}

## Notes

- If you want to tweak which commits are returned by `git.log()`, it has [lots of options](https://github.com/steveukx/git-js#git-log).
- `git.log()` is an expensive operation. On my machine in a repository with about 1,000 commits it increases my average processing from 50 to 150ms. If you're going to do this, you might want to limit it to files where you actually want to show the changelog, or production builds, or both.
- This solution only deals with linear history - one change after another. It would be interesting to try to visualise forks, branches, merges and everything else git can do, specifically in the context of writing. I remember reading a Hito Steyerl essay she described as _fork_ another text - even if she was using the term somewhat metaphorically, I like the idea.

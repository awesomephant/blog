---
layout: post
title: Per-file commit logs with Eleventy
intro: Using computed data and simple-git to generate file-specific changelogs.
date: 2022-03-21
updated: 2026-02-21
includesMath: false
includesMusic: false
tags: post
thumb: https://www.maxkohler.com/assets/git.png
showChangelog: true
changes:
  - message: Fix typo
    date: 03-27-2022
    hash: c7c1f4c689da3a76b75abf0729e8ec6c26b335fb
  - message: Fix date
    date: 03-21-2022
    hash: c7c1f4c689da3a76b75abf0729e8ec6c26b335fb
  - message: Remove unnecessary code snippet title
    date: 03-21-2022
    hash: 833b861b3c7bc80e2e55a7fe0cf8e34345e035be
  - message: Edit copy
    date: 03-21-2022
    hash: 828e46d5f3b0f3cbd930f8fdd077efdf2a5ae097
  - message: Add Eleventy/Changelog post
    date: 03-21-2022
    hash: 9b650a337eec0ed2c62c9adfdfd42e6e12314689
---

We're going to use [`simple-git`](https://www.npmjs.com/package/simple-git) to read the commit history and make it available to templates using eleventy's [computed data feature](https://www.11ty.dev/docs/data-computed/).

To generate changelogs for markdown files in the `posts` collection, we start by creating a data file at `/posts/posts.11tydata.js` (the filename must match the name of the collection)

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

Creating our data file here puts it at the end of Eleventy's [data cascade](https://www.11ty.dev/docs/data-cascade/), allowing us to read and write data for individual posts.

We start by _reading_ `page.inputPath`, an [auto-generated property](https://www.11ty.dev/docs/data-eleventy-supplied/) that contains the path to the markdown file being processed. Then, we pass that information to `git.log()` to get that file's commit history, and _write_ the result back to the post's data object.

{% codetitle "posts/posts.11tydata.js" %}

```js
const git = require('simple-git')()

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

When we run eleventy now, the data object for each post contains a list of commits to the underlying markdown file in reverse chronological order:

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

We can now use any templating engine to render this data to the page. In Liquid you could write something like:

{% codetitle "_includes/post.liquid" %}

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

## Background

Sometimes it's a good idea to publicly document how a website changes over time. I'm thinking of things like legal documents, technical writing, public policy, or any other piece of content you want to be extra transparent about.

If you're going to do this, you probably want to:

- Document _every_ change (even minor ones), and have that documentation accurately reflect the changes you made.
- Provide that documentation _in context_. If someone wants to trace changes to your privacy policy, that information should be right there with the original document. Don't make them go digging for it in an email or company blog.

If your content is under version control you're already doing both of these things. Unless you go out of your way, you literally cannot change a file _without_ creating a permanent record containing the diff, your name, the date, and a message describing the change. And git has extremely good built-in tools to query those records by file, date, author and other contextual parameters, so it's a natural solution to the problem.

## Notes

- If you want to tweak which commits are returned by `git.log()`, it has [lots of options](https://github.com/steveukx/git-js#git-log).
- `git.log()` is an expensive operation. On my machine in a repository with about 1,000 commits it increases my average processing from 50 to 150ms. If you're going to do this, you might want to limit it to files where you actually want to show the changelog, or production builds, or both.
- This solution only deals with linear history - one change after another. It would be interesting to try to visualise forks, branches, merges and everything else git can do, specifically in the context of writing. I remember reading a Hito Steyerl essay she described as _fork_ another text - even if she was using the term somewhat metaphorically, I like the idea.

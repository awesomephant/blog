---
layout: post
title: The simplest possible Wordpress footnotes
date: 2022-10-17
includesMath: false
includesMusic: false
tags: post
draft: false
---

The other day I was building a Wordpress website that needed footnotes on posts. Wordpress doesn't support that natively (there's an [issue about it](https://github.com/WordPress/gutenberg/issues/1890) that's been open since 2017). My first thought was to use a plugin, but I couldn't find one that was maintained and had the right the feature set.

I want a footnote solution to do the the following:

- In the post editor, let me write something like: `This is my senctence((and this goes into a footnote))`.
- When I render the post oin the frontend:
  - Replace that markup with a numbered anchor link
  - Render the content of the note in an `<ol>` at the bottom of the post

Here's what I came up with:

```php
function mytheme_extract_footnotes($content)
{
	$footnotes = array();
	$context = array();
	$pattern = "/(?:\(\()(.*)(?:\)\))/";

	preg_match_all($pattern, $content, $footnotes);

	$content = preg_replace_callback($pattern, function ($matches) {
		$fn_index = 0;
		$fn_index++;
		return '<a class="footnote__ref" href="#note-' . $fn_index . '">' . $fn_index . '</a>';
	}, $content);

	return $content . $output;
}

add_filter('the_content', 'mytheme_extract_footnotes');
```

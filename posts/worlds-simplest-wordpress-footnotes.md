---
layout: post
title: The simplest possible Wordpress footnotes
intro: Adding footnotes without any plugins
date: 2022-10-17
includesMath: false
includesMusic: false
tags: post
draft: false
---

The other day I was building a Wordpress website that needed footnotes on posts. Wordpress doesn't support that natively (there's an [issue about it](https://github.com/WordPress/gutenberg/issues/1890) that's been open since 2017). My first thought was to use a plugin, but I couldn't find one that was maintained, had the right features, and didn't include all kinds of extra markup.

Here's what I want my footnotes to do:

- In the post editor, I want to write something like: `This is my senctence((and this goes into a footnote))`
- That markup should be replaced with a numbered anchor link
- The content of the note should be rendered at the bottom of the post in an `<ol>` 

```php
function mytheme_extract_footnotes($content)
{
	$footnotes = array();
	$context = array();
	$pattern = "/(?:\(\()(.*)(?:\)\))/";

	preg_match_all($pattern, $content, $footnotes);

	$content = preg_replace_callback($pattern, function ($matches) {
		static $fn_index = 0;
		$fn_index++;
		return '<a class="footnote__ref" href="#note-' . $fn_index . '">' . $fn_index . '</a>';
	}, $content);

	$context["footnotes"] = $footnotes[1];

	return $content . $output;
}

add_filter('the_content', 'mytheme_extract_footnotes');
```

The site I was working on used Timber, so I actually wrote the following:

```php
$output = Timber::compile('/partial/footnotes.twig', $context);
```

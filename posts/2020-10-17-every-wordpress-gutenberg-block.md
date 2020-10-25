---
layout: post
title: A list of every Wordpress Editor Block
date: 2020-09-28
includesMath: false
includesMusic: false
intro: ""
tags: post
---

I've been doing some Wordpress theme development recently, and I couldn't find a decent reference for the blocks that come with the [default Wordpress editor](https://developer.wordpress.org/block-editor/developers/). So I'll keep one here.

{% details "Wordpress Core"%}

I'm pulling these out of [the Wordpress Source](https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src)

## Content

- `core/audio`
- `core/calendar`
- `core/buttons`
- `core/button` – Only used inside ```core/buttons/```
- `core/code`
- `core/classic`
- `core/cover`
- `core/embed`
- `core/file`
- `core/gallery`
- `core/heading`
- `core/html`
- `core/image`
- `core/list`
- `core/paragraph`
- `core/preformatted`
- `core/pullquote`
- `core/quote`
- `core/table`
- `core/verse`
- `core/video`
- `core/youtube`
- `core/facebook`
- `core/instagram`
- `core/vimeo`

## Layout

- `core/block`
- `core/columns`
- `core/column` – Only used inside `core/columns`.
- `core/more`

## Relational

- `core/archives`
- `core/categories`
- `core/latest-comments`
- `core/latest-posts`
- `core/media-text`
- `core/missing`
- `core/navigation-link`
- `core/navigation`
- `core/nextpage`
- `core/group`

{% enddetails %}

## Disabling blocks in the Post Editor

These identifiers are useful because they let you define a limited set of blocks that will be available in the post editor from your `functions.php` file.

```php
function theme_allowed_block_types($allowed_block_types){
    return array(
		'core/paragraph',
		'core/heading',
        'core/list'
        # Add more identifiers here
	);
}
add_filter('allowed_block_types', 'theme_allowed_block_types');
```

In addition to this, I like to disable the default block CSS and style them myself instead. You do that by attaching a function to  the [```wp_print_styles```](https://developer.wordpress.org/reference/hooks/wp_print_styles/) hook:

```php
function remove_block_css()
{
	wp_deregister_style('wp-block-library');
}
add_action('wp_print_styles', 'remove_block_css');
```

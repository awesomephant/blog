---
layout: post
title: Using CSV data with Eleventy
date: 2021-02-06
updated: 2026-02-20
includesMath: false
includesMusic: false
intro: ''
tags: post
thumb: ''
---

## TLDR

Eleventy has built-in [support for custom data formats](https://www.11ty.dev/docs/data-custom/). To read data from a CSV file:

- Add it to the `_data` folder
- Install [csv-parse](https://csv.js.org/parse/) using `npm install --save-dev csv-parse`
- Add the following to your [Eleventy config](https://www.11ty.dev/docs/config/):

{% codetitle ".eleventy.js" %}

```diff-js
import { parse } from 'csv-parse/sync'

export default function (eleventyConfig) {
+	eleventyConfig.addDataExtension('csv', (contents) => {
+		return parse(contents, { columns: true, skip_empty_lines: true })
+	})
}
```

This will add the data to Eleventy's [data cascade](https://www.11ty.dev/docs/data-cascade/) using the CSV's filename as the key.

## Background + alternate approach

I like to use [Google Sheets as a CMS](/work/digital-direction/) for one-off website projects. This means I author content in a sheet, export to a CSV file, and throw that into a static site generator to produce the HTML I need.

Eleventy doesn't have a built-in way to do that. It has a concept of [global data files](https://www.11ty.dev/docs/data-global/), but those only support `json` files out of the box.

However, you can roll your own support for CSV or any other data format using [Javascript Data Files](https://www.11ty.dev/docs/data-js/). The idea is to put a Javascript file into the `_data` folder that `export`s whatever data we need. Eleventy runs that file and adds the output to its global data object, making it available in your templates.

For example, if you have a CSV file called `foo.csv`, you can put the following Javascript file next to it:

{% codetitle "_data/bar.js" %}

```js
import { parse } from 'csv-parse/lib/sync'
import { fs } from 'fs'

export default function () {
	const input = fs.readFileSync('./values.csv')
	const records = parse(input, { columns: true, skip_empty_lines: true })
	return records
}
```

This will make the data from the CSV availble under the `bar` key in Eleventy's data object, so template code like this will work as expected:

{% codetitle "index.liquid" %}
{%raw%}

```liquid
{% for row in bar %}
    {{ row.title }}
{% endfor %}
```

{%endraw%}

We could also [use Eleventy's pagination feature](https://www.11ty.dev/docs/pages-from-data/) to turn our data into individual pages.

The idea that you can run arbitrary Javascript pipe the results right into Eleventy's data object is pretty powerful. The documentation gives examples of [fetching data from an API](https://www.11ty.dev/docs/data-js/#example-using-graphql) and [exposing environment variables](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables), but you could also do calculations, parse data in proprietary formats, or anything else you might need to do.

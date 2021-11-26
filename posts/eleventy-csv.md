---
layout: post
title: How to use CSV data with Eleventy
date: 2021-02-06
includesMath: false
includesMusic: false
intro: ""
tags: post
thumb: ""
canonical: https://maxakohler.medium.com/its-probably-art-b554f7c5f3e0
---

I like to [use spreadsheets as a CMS](/work/digital-direction/) for one-off website projects. This means I author whatever information I need in Google Sheets, export it to a CSV file, and throw that file into a static site generator to produce the HTML pages I need.

Eleventy doesn't have a built-in way to do that. It does have a concept of [global data files](https://www.11ty.dev/docs/data-global/), but those only support `json` files out of the box. If you just throw your CSV into the `_data` folder, nothing happens.

But there's another feature that does allow us to do this: [Javascript Data Files](https://www.11ty.dev/docs/data-js/). Instead of a static JSON file, we can put a Javascript file into the data folder that `exports` whatever data we need. Eleventy executes that file, and adds the output to its global data object, making it available in template files.

We can use this to parse our CSV file, and hand the data over to Eleventy. I'm using [csv-parse](https://csv.js.org/parse/) here. 

Install it with ```npm install csv-parse```.

Then we can write a script like this:

```js
const parse = require("csv-parse/lib/sync");
const fs = require("fs");

function readCSV() {
  const input = fs.readFileSync("./_data/values.csv");
  const records = parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
  console.log(`${records.length} records found.`);
  return records;
}

module.exports = function () {
  const data = readCSV();
  return data;
};
```

We'll save that file as `myData.js` inside the `_data` folder, next to our original CSV file. As with regular data files, the filename controls under which key the data will be available. Once that's done, we can write template code like this, and it works just as expected:

{%raw%}
```liquid
{% for row in myData %}
    {{ row.title }}
{% endfor %}
```
{%endraw%}

We could also [use Eleventy's pagination feature](https://www.11ty.dev/docs/pages-from-data/) to turn our data into individual pages.

The idea that you can run arbitrary Javascript pipe the results right into Eleventy's data object is pretty powerful. The documentation gives examples of [fetching data from an API](https://www.11ty.dev/docs/data-js/#example-using-graphql) and [exposing environment variables](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables), but you could also do calculations, parse data in any format, or anything else you could need.

## Update

Five minutes after I wrote this, I realised that Eleventy has a built-in way to add [support for custom data formats](https://www.11ty.dev/docs/data-custom/). Javascript data files are still the way to go if you're fetching data from an API or other doing other fanciness, but to read data from a CSV file adding this to your `.eleventy` file will do the trick:

```js
eleventyConfig.addDataExtension("csv", (contents) => {
  const records = parse(contents, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
});
```

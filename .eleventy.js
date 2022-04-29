const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it")
const taskLists = require('markdown-it-task-lists');
const anchor = require("markdown-it-anchor");
let footnotes = require("markdown-it-footnote");
const typesetPlugin = require('eleventy-plugin-typeset');

let markdownOptions = {
  html: true,
};
let markdownLib = markdownIt(markdownOptions)
  .use(taskLists)
  .use(footnotes)
  .use(anchor, {tabIndex: false})

markdownLib.renderer.rules.footnote_block_open = () => (
  '<section class="footnotes">\n' +
  '<ol class="footnotes-list">\n'
);
markdownLib.renderer.rules.footnote_caption = (tokens, idx) => {
  var n = Number(tokens[idx].meta.id + 1).toString();

  if (tokens[idx].meta.subId > 0) {
    n += ':' + tokens[idx].meta.subId;
  }
  return n;
};

function getIndex(arr, prop, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][prop] === value) {
      return i
    }
  }
  return false
}

const md = new markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("renderMarkdown", function (value) {
    return md.render(value);
  });
  eleventyConfig.addPairedShortcode("details", function (content, summary) {
    return `<details><summary>${summary}</summary>${md.render(content)}</details>`;
  });
  eleventyConfig.addPairedShortcode("leadin", function (content) {
    return `<span class="leadin">${content}</span>`;
  });
  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob([
      "./notes/*.md",
      "./notes/*.markdown",
    ]);
  });

  eleventyConfig.addCollection("postsByYear", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob(["./posts/*.md", "./work/*.md"]);
    let postsByYear = []
    let currentYear = ""

    posts.forEach(p => {
      let y = new Date(p.data.date).getFullYear()
      if (p.data.draft !== true) {
        if (y !== currentYear) {
          postsByYear.push({
            year: y,
            shortYear: y.toString().substr(2),
            posts: [p]
          })
          currentYear = y;
        } else {
          let index = getIndex(postsByYear, "year", currentYear)
          postsByYear[index].posts.push(p)
        }
      }
    })
    return postsByYear.reverse()
  })

  if (process.env.NODE_ENV === "production") {
    console.log("Building site for production.")
    eleventyConfig.addGlobalData("env", "production");
  } else {
    eleventyConfig.addGlobalData("env", "dev");
    console.log("Building in dev mode.")
  }

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("./*.png");
  eleventyConfig.addPassthroughCopy("./*.xml");
  eleventyConfig.addPassthroughCopy("./*.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("*.vcf");
  eleventyConfig.addWatchTarget("./_site/main.css")

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPlugin(typesetPlugin({
    only: ".single-post, .project-title",
    disable: ["ligatures"]
  }));
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
    lineSeparator: "\n",
  });
  return {};
};

const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it")
const taskLists = require('markdown-it-task-lists');
let footnotes = require("markdown-it-footnote");
const typesetPlugin = require('eleventy-plugin-typeset');

let markdownOptions = {
  html: true,
};
let markdownLib = markdownIt(markdownOptions).use(taskLists).use(footnotes)

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


const md = new markdownIt();

if (process.env.NODE_ENV === "production") {
  console.log("Building site for production.")
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("wordcount", function (s) {
    const words = s.split(" ");
    const minutes = words.length / 180;
    return minutes.toFixed(1);
  });

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
  function getIndex(arr, prop, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i
      }
    }
    return false
  }
  eleventyConfig.addCollection("postsByYear", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob(["./posts/*.md"]);
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
  eleventyConfig.addCollection("workByYear", function (collectionApi) {
    const work = collectionApi.getFilteredByGlob(["./work/*.md"]);
    let workByYear = []
    let currentYear = ""

    work.forEach(p => {
      let y = new Date(p.data.date).getFullYear()
      if (p.data.draft !== true) {

        if (y !== currentYear) {
          workByYear.push({
            year: y,
            shortYear: y.toString().substr(2),
            posts: [p]
          })
          currentYear = y;
        } else {
          let index = getIndex(workByYear, "year", currentYear)
          workByYear[index].posts.push(p)
        }
      }
    })
    return workByYear.reverse()
  })
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("./*.png");
  eleventyConfig.addPassthroughCopy("./*.xml");
  eleventyConfig.addPassthroughCopy("./*.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("tosdr.txt");
  eleventyConfig.addWatchTarget("./css/");

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPlugin(typesetPlugin({
    only: ".single-post"
  }));
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  return {};
};

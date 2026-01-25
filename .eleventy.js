const { parse } = require("csv-parse/sync");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const taskLists = require("markdown-it-task-lists");
const anchor = require("markdown-it-anchor");
let footnotes = require("markdown-it-footnote");
const pagingate = require("./paginate");
const htmlmin = require("html-minifier-terser");

let markdownOptions = {
  html: true,
};
let markdownLib = markdownIt(markdownOptions)
  .use(taskLists)
  .use(footnotes)
  .use(anchor, { tabIndex: false });

markdownLib.renderer.rules.footnote_block_open = () =>
  '<section class="footnotes">\n' + '<ol class="footnotes-list">\n';
markdownLib.renderer.rules.footnote_caption = (tokens, idx) => {
  var n = Number(tokens[idx].meta.id + 1).toString();

  if (tokens[idx].meta.subId > 0) {
    n += ":" + tokens[idx].meta.subId;
  }
  return n;
};

function groupPostsByMonth(posts) {
  let gp = [];
  posts.forEach((p) => {
    const d = new Date(p.data.date);
    const y = d.getFullYear();
    const m = d.getMonth();
    if (gp.length === 0 || gp[gp.length - 1]?.year !== y) {
      gp.push({
        year: d.getFullYear(),
        months: [
          {
            month: m,
            date: d.toISOString(),
            posts: [p],
          },
        ],
      });
    } else {
      const gpidx = gp.length - 1;
      if (gp[gpidx].months[gp[gpidx].months.length - 1].month === m) {
        gp[gpidx].months[gp[gpidx].months.length - 1].posts.push(p);
      } else {
        gp[gpidx].months.push({
          month: m,
          date: d.toISOString(),
          posts: [p],
        });
      }
    }
  });
  return gp;
}

const md = new markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("renderMarkdown", function (value) {
    return md.render(value);
  });
  eleventyConfig.addFilter("formatRunningDistance", (d) => {
    const labels = {
      21.0975: "HM",
      42.195: "M",
    };
    return labels[d] ? labels[d] : `${d}k`;
  });
  eleventyConfig.addPairedShortcode("details", function (content, summary) {
    return `<details><summary>${summary}</summary>${md.render(content)}</details>`;
  });
  eleventyConfig.addPairedShortcode("mermaid", function (content) {
    return `<pre class="mermaid">
---
config:
  theme: 'base'
  themeVariables:
    fontFamily: "Atlas"
    primaryColor: "#f7f7f7"
    primaryTextColor: 'black'
    primaryBorderColor: "gray"
    secondaryColor: "white"
---
    ${content}
    </pre>`;
  });
  eleventyConfig.addPairedShortcode("leadin", function (content) {
    return `<span class="leadin">${content}</span>`;
  });
  eleventyConfig.addShortcode("codetitle", function (title) {
    const ws = title.split("/");
    return `<span class="code__title">${ws.length > 1 ? `<span class="path">${ws.slice(0, ws.length - 1).join("/")}/</span>` : ""}${ws[ws.length - 1]}</span>`;
  });
  eleventyConfig.addCollection("workByMonth", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob(["./work/*.md"]);
    return groupPostsByMonth(posts);
  });
  eleventyConfig.addCollection("postsByMonth", function (collectionApi) {
    return groupPostsByMonth(collectionApi.getFilteredByGlob(["./posts/*.md"]));
  });
  eleventyConfig.addCollection("pagedNotes", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob([
      "./notes/*.md",
      "./notes/*.markdown",
    ]);
    posts.reverse();
    return pagingate(posts, 10, "NOTES");
  });

  eleventyConfig.addGlobalData("builtOn", new Date().toLocaleString());

  if (process.env.NODE_ENV === "prod") {
    console.log("Building site for production.");
    eleventyConfig.addGlobalData("env", "prod");
  } else {
    eleventyConfig.addGlobalData("env", "dev");
    console.log("Building in dev mode.");
  }

  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }
    return content;
  });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("./*.png");
  eleventyConfig.addPassthroughCopy("./*.xml");
  eleventyConfig.addPassthroughCopy("./*.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("*.vcf");
  eleventyConfig.addWatchTarget("./_site/main.css");
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addDataExtension("csv", (contents) => {
    const records = parse(contents, {
      columns: true,
      skip_empty_lines: true,
    });
    return records;
  });

  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
    lineSeparator: "\n",
  });
  eleventyConfig.addPlugin(pluginRss);
  return {};
};

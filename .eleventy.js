const pluginSass = require("eleventy-plugin-sass");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPairedShortcode("footnotes", function (todoItems) {
    return `<aside class='footnotes'>
            ${todoItems}
</aside>
            `;
  });

  eleventyConfig.addFilter("wordcount", function (s) {
    const words = s.split(" ");
    const minutes = words.length / 150;
    return minutes.toFixed(1);
  });

  eleventyConfig.addShortcode("fig", function (url, caption, alt, source) {
    if (!caption) {
      caption = "";
    }
    let sourceString = "";
    if (source) {
      sourceString = `<a href='${source}' class='fig-source'>Source</a>`;
    }

    return `<figure class='post-figure'>
        <img alt="${alt}" loading="lazy" src='${url}'/>
        <figcaption>${md.render(caption)} ${sourceString}</figcaption>
        </figure>
        `;
  });

  eleventyConfig.addShortcode("fn", function (content) {
    return `
        <span class="fn" data-content='${md.render(content)}'>
        </span>
    `;
  });

  eleventyConfig.addTransform("resolveFootnotes", function (
    content,
    outputPath
  ) {
    if (outputPath.endsWith(".html")) {
      const dom = new JSDOM(content);
      let transformed = "";
      const footnotes = dom.window.document.querySelectorAll(".fn");
      const footnoteContainer = dom.window.document.querySelector(
        ".post-footnotes"
      );
      if (footnotes && footnoteContainer) {
        const footnoteList = dom.window.document.createElement("ol");
        footnotes.forEach((fn, i) => {
          const fnItem = dom.window.document.createElement("li");
          fn.textContent = i + 1;
          fnItem.innerHTML = fn.getAttribute("data-content");
          footnoteList.appendChild(fnItem);
        });
        footnoteContainer.appendChild(footnoteList);
        transformed = dom.serialize();
        return transformed;
      }
    }
    return content;
  });

  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob(["./notes/*.md", "./notes/*.markdown"]);
  });

  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("./*.png");
  eleventyConfig.addPassthroughCopy("./*.xml");
  eleventyConfig.addPassthroughCopy("./*.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSass, {});
  eleventyConfig.addPlugin(syntaxHighlight);
  return {};
};

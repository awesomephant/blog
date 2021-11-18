const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const sass = require("sass");
const markdownIt = require("markdown-it")
const taskLists = require('markdown-it-task-lists');

let markdownOptions = {
  html: true,
};
let markdownLib = markdownIt(markdownOptions).use(taskLists)
const md = new markdownIt();

if (process.env.NODE_ENV === "production") {
  console.log("Building site for production.")
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPairedShortcode("footnotes", function (todoItems) {
    return `<aside class='footnotes'>
            ${todoItems}
</aside>
            `;
  });
  eleventyConfig.addFilter("wordcount", function (s) {
    const words = s.split(" ");
    const minutes = words.length / 180;
    return minutes.toFixed(1);
  });
  eleventyConfig.addShortcode(
    "fig",
    function (url, caption, alt, source, className) {
      if (!caption) {
        caption = "";
      }
      let sourceString = "";
      if (source) {
        sourceString = `<span class='fig-source long'>${md.render(
          source
        )}</span>`;
      }

      return `<figure class='post-figure ${className}'>
        <img alt="${alt}" loading="lazy" src='${url}'/>
        <figcaption>${md.render(caption)} ${sourceString}</figcaption>
        </figure>
        `;
    }
  );
  eleventyConfig.addShortcode(
    "embed",
    function (src, format) {
      return `<figure class='post-figure big'>
      <div class='embed' style="padding:${1 / eval(format)}% 0 0 0;position:relative;">
      <iframe src="${src}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <div class="embed-placeholder"></div>
      </div>
      </figure>
        `;
    }
  );
  eleventyConfig.addFilter("renderMarkdown", function (value) {
    return md.render(value);
  });
  eleventyConfig.addShortcode("css", function (filename) {
    if (process.env.NODE_ENV === "production") {
      let css = sass.renderSync({
        file: `./css/${filename}`,
        outputStyle: "compressed",
      });
      return `<style>${css.css.toString()}</style>`;
    } else {
      return `<link rel="stylesheet" href="/${filename.replace("scss", "css")}"/>`
    }
  });
  eleventyConfig.addShortcode("fn", function (content) {
    return `
        <span class="fn" data-content='${md.render(content)}'>
        </span>
    `;
  });
  eleventyConfig.addPairedShortcode("details", function (content, summary) {
    return `<details><summary>${summary}</summary>${md.render(content)}</details>`;
  });
  eleventyConfig.addPairedShortcode("leadin", function (content) {
    return `<span class="leadin">${content}</span>`;
  });
  eleventyConfig.addTransform(
    "resolveFootnotes",
    function (content, outputPath) {
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
            const link = dom.window.document.createElement("a");
            link.setAttribute("href", `#fn-${i}`);
            link.textContent = i + 1;
            fn.appendChild(link);
            fnItem.setAttribute("id", `fn-${i}`);
            fnItem.innerHTML = fn.getAttribute("data-content");
            footnoteList.appendChild(fnItem);
          });
          footnoteContainer.appendChild(footnoteList);
          transformed = dom.serialize();
          return transformed;
        }
      }
      return content;
    }
  );
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
  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy("./*.png");
  eleventyConfig.addPassthroughCopy("./*.xml");
  eleventyConfig.addPassthroughCopy("./*.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addWatchTarget("./css/");

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  return {};
};

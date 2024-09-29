const { parse } = require("csv-parse/sync")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const markdownIt = require("markdown-it")
const taskLists = require("markdown-it-task-lists")
const anchor = require("markdown-it-anchor")
let footnotes = require("markdown-it-footnote")
const pagingate = require("./paginate")

let markdownOptions = {
  html: true,
}
let markdownLib = markdownIt(markdownOptions).use(taskLists).use(footnotes).use(anchor, { tabIndex: false })

markdownLib.renderer.rules.footnote_block_open = () => '<section class="footnotes">\n' + '<ol class="footnotes-list">\n'
markdownLib.renderer.rules.footnote_caption = (tokens, idx) => {
  var n = Number(tokens[idx].meta.id + 1).toString()

  if (tokens[idx].meta.subId > 0) {
    n += ":" + tokens[idx].meta.subId
  }
  return n
}

function getIndex(arr, prop, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][prop] === value) {
      return i
    }
  }
  return false
}

function groupPostsByYear(posts) {
  let postsByYear = []
  let currentYear = ""

  posts.forEach((p) => {
    let y = new Date(p.data.date).getFullYear()
    if (y !== currentYear) {
      postsByYear.push({
        year: y,
        shortYear: y.toString().substr(2),
        posts: [p],
      })
      currentYear = y
    } else {
      let index = getIndex(postsByYear, "year", currentYear)
      postsByYear[index].posts.push(p)
    }
  })
  return postsByYear.reverse()
}

const md = new markdownIt()

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("renderMarkdown", function (value) {
    return md.render(value)
  })
  eleventyConfig.addPairedShortcode("details", function (content, summary) {
    return `<details><summary>${summary}</summary>${md.render(content)}</details>`
  })
  eleventyConfig.addPairedShortcode("leadin", function (content) {
    return `<span class="leadin">${content}</span>`
  })

  eleventyConfig.addCollection("workByYear", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob(["./work/*.md"])
    return groupPostsByYear(posts)
  })
  eleventyConfig.addCollection("postsByYear", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob(["./posts/*.md"])
    return groupPostsByYear(posts)
  })
  eleventyConfig.addCollection("pagedNotes", function (collectionApi) {
    const posts = collectionApi.getFilteredByGlob(["./notes/*.md", "./notes/*.markdown"])
    posts.reverse()
    return pagingate(posts, 12)
  })

  eleventyConfig.addGlobalData("builtOn", new Date().toLocaleString())

  if (process.env.NODE_ENV === "prod") {
    console.log("Building site for production.")
    eleventyConfig.addGlobalData("env", "prod")
  } else {
    eleventyConfig.addGlobalData("env", "dev")
    console.log("Building in dev mode.")
  }

  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.addPassthroughCopy("./*.png")
  eleventyConfig.addPassthroughCopy("./*.xml")
  eleventyConfig.addPassthroughCopy("./*.txt")
  eleventyConfig.addPassthroughCopy("_redirects")
  eleventyConfig.addPassthroughCopy("favicon.ico")
  eleventyConfig.addPassthroughCopy("site.webmanifest")
  eleventyConfig.addPassthroughCopy("*.vcf")
  eleventyConfig.addWatchTarget("./_site/main.css")
  eleventyConfig.setLibrary("md", markdownLib)

  eleventyConfig.addDataExtension("csv", (contents) => {
    const records = parse(contents, {
      columns: true,
      skip_empty_lines: true,
    })
    return records
  })

  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
    lineSeparator: "\n",
  })
  eleventyConfig.addPlugin(pluginRss)
  return {}
}

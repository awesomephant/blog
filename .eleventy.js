const typesetPlugin = require('eleventy-plugin-typeset');
const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(
        typesetPlugin({
            only: '.post-content',
            disable: ['ligatures']
        })
    );

    eleventyConfig.addShortcode("fig", function (url, caption) {
        return (
            `<figure><img loading="lazy" src='/sian-website/${url}'/><figcaption>${caption}</figcaption></figure>
            `
        );
    });
    eleventyConfig.addPairedShortcode("footnotes", function (todoItems) {
        return (
            `<aside class='footnotes'>
            ${todoItems}
</aside>
            `
        );
    })

    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("./*.png");
    eleventyConfig.addPassthroughCopy("./*.xml");
    eleventyConfig.addPassthroughCopy("./*.txt");
    eleventyConfig.addPassthroughCopy("_redirects");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("site.webmanifest");

    eleventyConfig.addPlugin(pluginSass, {});
    return {}
};
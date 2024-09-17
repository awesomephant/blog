module.exports = function (posts, n) {
  const pages = []
  let page = []
  for (let i = 0; i < posts.length; i++) {
    if (page.length < n) {
      page.push(posts[i])
    } else {
      pages.push(page)
      page = [posts[i]]
    }
  }
  console.log(`${pages.length} pages generated`)
  return pages
}

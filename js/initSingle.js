export default function initSingle() {
  let headlines = document.querySelectorAll(".single__copy h2[id], .post-content h3[id]")
  for (let i = 0; i < headlines.length; i++) {
    let link = document.createElement("a")
    link.setAttribute("href", "#" + headlines[i].id)
    link.classList.add("post-jumplink")
    headlines[i].insertAdjacentElement("afterbegin", link)
  }

  let paragraphs = document.querySelectorAll(".single__copy p, .single__copy li")
  for (let i = 0; i < paragraphs.length; i++) {
    let image = paragraphs[i].querySelector("img, video, iframe")
    if (image) {
      paragraphs[i].classList.add("has-image")
    }
  }

  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded")
      img.classList.add("cached")
    }
    img.addEventListener("load", () => {
      img.classList.add("loaded")
    })
  })
}

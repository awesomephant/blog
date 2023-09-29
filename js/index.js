import textBalancer from "text-balancer"
function initList() {
  let search = document.querySelector(".notes-search")
  let index = document.querySelectorAll(".notes-item")

  function filterList(s) {
    index.forEach((item) => {
      let title = item.querySelector(".note-title").innerText
      let teacher = item.querySelector(".note-teacher").innerText
      let re = new RegExp(`(${s})`, "gi")
      if (re.test(title + teacher)) {
        item.classList.remove("hidden")
      } else {
        item.classList.add("hidden")
      }
    })
  }
  if (search) {
    search.addEventListener("input", () => {
      filterList(search.value)
    })
  }
}

function initEmbeds() {
  const embeds = document.querySelectorAll(".embed-container")
  embeds.forEach((em) => {
    const button = em.querySelector(".embed-load")
    const iframe = em.querySelector("iframe")
    button.addEventListener("click", () => {
      em.classList.add("active")
      iframe.setAttribute("src", iframe.getAttribute("data-src"))
    })
  })
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    textBalancer.balanceText(".single__title")
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
    initList()
    initEmbeds()
  },
  false
)

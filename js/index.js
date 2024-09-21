import initEmbeds from "./initEmbeds"
import initSingle from "./initSingle"
import initCopyEmail from "./initCopyEmail"
import IndexView from "./IndexView"

document.addEventListener("DOMContentLoaded", () => {
  initCopyEmail()
  initSingle()
  initEmbeds()
  new IndexView()
})

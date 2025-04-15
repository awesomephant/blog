class PaginatedList {
  constructor(container) {
    console.log("pagination")
    this.nextButton = container.querySelector(".paginate-next")
    this.prevButton = container.querySelector(".paginate-prev")
    this.pages = container.querySelectorAll(".paginate__page")
    this.indexEl = container.querySelector(".paginate__index")
    this.activePage = container.querySelector(".paginate__page.is-active")
    this.currentPage = parseInt(this.activePage.dataset.index)
    this.bindEvents()
    this.render()
  }

  advance(n) {
    if (this.currentPage + n < this.pages.length && this.currentPage + n >= 0) {
      this.currentPage += n
    }
  }

  bindEvents() {
    this.nextButton.addEventListener("click", () => {
      this.advance(1)
      console.log(this.currentPage)
      this.render()
    })
    this.prevButton.addEventListener("click", () => {
      this.advance(-1)
      this.render()
    })
  }

  render() {
    this.indexEl.innerText = `${this.currentPage + 1}/${this.pages.length}`
    this.nextButton.toggleAttribute("disabled", this.currentPage === this.pages.length - 1)
    this.prevButton.toggleAttribute("disabled", this.currentPage === 0)
    this.pages.forEach((el, i) => {
      el.classList.toggle("is-active", this.currentPage === i)
    })
  }
}

class KeyboardUI {
	constructor(container){
		this.keys = {}
		this.targetEls = container.querySelectorAll("[aria-shortcuts]")
		this.targetEls.forEach(el => {
			this.keys[el.getAttribute("aria-shortcuts").toLowerCase()] = el
		})
		this.bindEvents();
		this.render()
	}
	bindEvents(){
		window.addEventListener("keyup", e => {
			if (this.keys[e.key.toLowerCase()]){
				const targetEl = this.keys[e.key].querySelector("a, button:not(:disabled)")
				console.log(targetEl)
				targetEl.focus()
			}
		})
	}
	render(){
		this.targetEls.forEach(el => {
			const titleEl = el.querySelector(".title")
			const t = titleEl.innerText
			titleEl.innerText = `[${t.split('')[0]}]${t.split('').slice(1).join('')}`
		})
	}
}

export default class IndexView {
  constructor() {
    this.paginatedLists = document.querySelectorAll(".is-paginated")
    this.initPagination()
	this.initKeyboardUI()
  }
  initPagination() {
    this.paginatedLists.forEach((el) => {
      new PaginatedList(el)
    })
  }
  initKeyboardUI(){
	new KeyboardUI(document.querySelector("body"))
  }
}

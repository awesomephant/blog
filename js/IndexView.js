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
    this.indexEl.innerText = `(${this.currentPage + 1}/${this.pages.length})`
    this.pages.forEach((el, i) => {
      el.classList.toggle("is-active", this.currentPage === i)
    })
  }
}

export default class IndexView {
  constructor() {
    console.log("index view")
    this.paginatedLists = document.querySelectorAll(".is-paginated")
    this.initPagination()
  }
  initPagination() {
    this.paginatedLists.forEach((el) => {
      new PaginatedList(el)
    })
  }
}

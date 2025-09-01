export default class Clock {
  constructor(container) {
    this.container = container
    this.amplitude = 15
    this.min = 100

    this.cols = [
      container.querySelectorAll(".home__projects .home__year"),
      container.querySelectorAll(".home__projects .home__month"),
      container.querySelectorAll(".project__title"),
      container.querySelectorAll(".project__category"),
      container.querySelectorAll(".home__projects .is-featured-container"),
      container.querySelectorAll(".home__posts .home__year"),
      container.querySelectorAll(".home__posts .home__month"),
      container.querySelectorAll(".home__posts .writing__title"),
      container.querySelectorAll(".home__posts .writing__publication"),
      container.querySelectorAll(".home__posts .writing__featured"),
      container.querySelectorAll(".follow__label, .teaching__title, .is-active .running__date, .is-active .notes__venue, .friends__name, .footer__nav a, .site__footer .label"),
      container.querySelectorAll(".follow__value, .teaching__venue, .is-active .running__distance, .is-active .running__time, .is-active .notes__title, .friends__comment, .site__footer .value"),
      container.querySelectorAll(".teaching .is-featured-container, .is-active .running__pace"),
      container.querySelectorAll(".home__running .is-active .is-featured-container"),
    ]
    console.log(this.cols[this.cols.length - 1])
    this.time = 0
    this.update()
    this.render()
    window.setInterval(() => {
      this.loop()
    }, 1000 * 60)
  }

  loop() {
    this.update()
    this.render()
  }

  update() {
    this.time = new Date()
  }

  render() {
    this.cols.forEach((col, i) => {
      col.forEach((el, j) => {
        el.classList.add("clock-cell")
        const step = (j / col.length) * 2 * Math.PI
        const x = Math.sin((window.innerWidth / this.cols.length) * i * 5 + this.time.getDay())
        const v = this.min + Math.sin(step + this.time.getHours() + x * 0.7) * -this.amplitude
        el.style.setProperty("--bg", `hsl(210, 75%, ${v}%)`)
      })
    })
  }
}

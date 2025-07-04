export default class Clock {
  constructor(container) {
    this.container = container
    this.canvas = document.createElement("canvas")
    this.canvas.classList.add("clock")
    this.container.appendChild(this.canvas)
    this.res = 0.1
    this.c = this.canvas.getContext("2d")
    this.c.imageSmoothingEnabled = false

    const cellSelector =
      ".home__month,.home__year, .writing__title, .writing__publication, .is-featured-container, .project__title, .project__category, .follow__label, .follow__value, .teaching__title, .teaching__venue, .is-active .running__date, .is-active .running__distance, .is-active .running__time, .is-active .running__pace, .is-active .notes__venue, .is-active .notes__title, #copy-email em, .home__item em"
    this.cells = container.querySelectorAll(cellSelector)
    this.setDimensions()
    this.update()
    this.render()
    console.log(this.cells)
    // window.setInterval(() => {
    //   this.loop()
    // }, 10000)
  }

  loop() {
    this.update()
    this.render()
  }

  setDimensions() {
    this.canvas.width = this.canvas.clientWidth * this.res
    this.canvas.height = this.canvas.clientHeight * this.res
  }

  update() {
    const d = new Date()
    const fs = this.canvas.width * 1.1
    this.c.fillStyle = "white"
    this.c.font = `bold ${fs}px/1 TimesNewPixel`
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    const h = d.getHours()
    const m = d.getMinutes()
    // this.c.fillText(`SUNDAY`, -fs * 0.02, fs * 0.6, this.canvas.width)
    this.c.fillText(`${h > 12 ? h - 12 : h}${m < 10 ? `0${m}` : m}`, -fs * 0.01, fs * 0.65, this.canvas.width * 0.99)
  }

  render() {
    this.cells.forEach((c) => {
      const { x, y, width, height } = c.getBoundingClientRect()
      const d = this.c.getImageData(Math.floor(x * this.res), Math.floor(y * this.res), Math.floor(width * this.res), Math.floor(height * this.res))
      let alpha = []
      for (let i = 0; i < d.data.length; i += 3) {
        alpha.push(d.data[i])
      }
      const avg = alpha.reduce((a, b) => a + b) / alpha.length
      c.classList.toggle("clock-active", avg > 10)
    })
  }
}

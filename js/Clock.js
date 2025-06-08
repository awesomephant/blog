const digits = {
  1: "",
}
export default class Clock {
  constructor(container) {
    console.log("clock")
    this.w = 10
    this.h = 10
    this.imageData = new ImageData(this.w, this.h)
    this.container = container
    this.canvas = document.createElement("canvas")
    this.canvas.classList.add("clock")
    this.canvas.width = this.w
    this.canvas.height = this.h
    this.c = this.canvas.getContext("2d")
    document.body.appendChild(this.canvas)

    this.update()
    this.render()
    console.log(this.imageData)
    window.setInterval(() => {
      this.loop()
    }, 10000)
  }
  loop() {
    this.update()
    this.render()
  }

  update() {
    for (var i = 0; i < this.w * this.h; i += 4) {
      this.imageData.data[i] = 200
      this.imageData.data[i + 1] = 12
      this.imageData.data[i + 2] = 169
      this.imageData.data[i + 3] = 255
    }
  }

  render() {
    this.c.putImageData(this.imageData, 0, 0)
  }
}

var state = {
  goodActive: false,
  oldScrollPosition: 0,
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    let headlines = document.querySelectorAll(
      ".post-content h2[id], .post-content h3[id]"
    );
    for (let i = 0; i < headlines.length; i++) {
      let link = document.createElement("a");
      link.setAttribute("href", "#" + headlines[i].id);
      link.classList.add("post-jumplink");
      headlines[i].insertAdjacentElement("afterbegin", link);
    }

    let paragraphs = document.querySelectorAll(
      ".post-content p, .post-content li"
    );

    for (let i = 0; i < paragraphs.length; i++) {
      let image = paragraphs[i].querySelector("img, video, iframe");
      let text = paragraphs[i].innerText;
      if (image) {
        paragraphs[i].classList.add("hasimage");
      }
      paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(
        /\[\d+\]/g,
        `<a class='footnote' href='#1'>3</a>`
      );
    }

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.complete) {
        img.classList.add("loaded");
        img.classList.add("cached");
      }
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });
    });
  },
  false
);

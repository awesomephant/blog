export default function initEmbeds() {
  const embeds = document.querySelectorAll(".embed-container");
  embeds.forEach((em) => {
    const button = em.querySelector(".embed-load");
    const iframe = em.querySelector("iframe");
    button.addEventListener("click", () => {
      em.classList.add("active");
      iframe.setAttribute("src", iframe.getAttribute("data-src"));
    });
  });
}

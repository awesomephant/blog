export default function initCopyEmail() {
  const copyEmailEl = document.querySelector("#copy-email")
  if (copyEmailEl) {
    const emailValueEl = copyEmailEl.querySelector(".email__value")
    copyEmailEl.addEventListener("click", (e) => {
      navigator.clipboard.writeText(copyEmailEl.dataset.email).then(
        function () {
          emailValueEl.innerText = "Copied!"
          window.setTimeout(() => {
            emailValueEl.innerText = copyEmailEl.dataset.email
          }, 3000)
        },
        (err) => {
          emailValueEl.innerText = "Error :("
        }
      )
    })
  }
}

export default function initCopyEmail() {
  const copyEmailEl = document.querySelector(".copy-email")
  if (copyEmailEl) {
    copyEmailEl.addEventListener("click", (e) => {
      navigator.clipboard.writeText(copyEmailEl.dataset.email).then(
        function () {
          copyEmailEl.innerText = "Copied!"
          window.setTimeout(() => {
            copyEmailEl.innerText = "Email"
          }, 3000)
        },
        (err) => {
          copyEmailEl.innerText = "Error :("
        }
      )
    })
  }
}

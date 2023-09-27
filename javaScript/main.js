const header = document.querySelector("header")

window.addEventListener("scroll", diminuiHeader)

function diminuiHeader() {
  if (window.pageYOffset > 0 && header.classList.contains("scrollmax")) {
    header.classList.remove("scrollmax")
    header.classList.add("scrollmin")
  } else if (
    window.pageYOffset == 0 &&
    header.classList.contains("scrollmin")
  ) {
    header.classList.remove("scrollmin")
    header.classList.add("scrollmax")
  }
}

function toggleMode() {
  const modoNoturno = document.querySelector(".sobre")
  modoNoturno.classList.toggle("dark__mode")

  // troca de imagem
}

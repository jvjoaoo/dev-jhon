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

// Animação Switch (Darkmode e LightMode)
function toggleMode() {
  const modoNoturno = document.querySelector(".sobre")
  modoNoturno.classList.toggle("dark__mode")
}

// Efeito accordion
function clickAccordion(t) {
  let pai = document.getElementsByClassName("title__accordion")[t].parentElement
  let conteudo = pai.lastElementChild.classList.contains("hide")

  if (conteudo == true) {
    pai.lastElementChild.className = "show"
  } else {
    pai.lastElementChild.className = "hide"
  }
}

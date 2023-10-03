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
  let conteudo = pai.classList.contains("skillHide")
  let sessoes = document.getElementsByClassName("skills__accordion")

  if (conteudo == true) {
    pai.className = "skills__accordion skillShow"
  } else {
    pai.className = "skills__accordion skillHide"
  }

  if (conteudo == true) {
    for (let s = 0; s < sessoes.length; s++) {
      sessoes[s].className = "skills__accordion skillHide"
    }
    pai.className = "skills__accordion skillShow"
  } else {
    pai.className = "skills__accordion skillHide"
  }
}

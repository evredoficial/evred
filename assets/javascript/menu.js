/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header .container')
const toggle = document.querySelectorAll('.container .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
};

for (const element of toggle) {
  element.addEventListener('click', function () {
    body.classList.toggle('show')
  })
};


/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
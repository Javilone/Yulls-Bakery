// BUTTON TO GO UP
const goUpBtn = document.querySelector(".goUp-btn");
const upBtnInitialPos = goUpBtn.offsetTop + 250;

// Función para verificar la posición de scroll
function verificarScroll() {
  // Obtengo la posición actual de scroll
  const scrollY = window.scrollY || window.pageYOffset;

  // Verifico si se ha hecho scroll hacia abajo más allá de la posición inicial
  if (scrollY > upBtnInitialPos) {
    goUpBtn.classList.add("fixed");
  } else {
    goUpBtn.classList.remove("fixed");
  }
}

document.addEventListener("scroll", verificarScroll);

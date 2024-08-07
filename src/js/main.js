// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import './productsButtons.js';
import './formHandles.js';


// CAROUSEL
const myCarouselElement = document.querySelector('#carouselFade')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 6000,
    touch: true
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// BUTTON TO GO UP 
const goUpBtn = document.querySelector('.goUp-btn');
const upBtnInitialPos = goUpBtn.offsetTop + 250;

// Función para verificar la posición de scroll
function verificarScroll() {
    // Obtengo la posición actual de scroll
    const scrollY = window.scrollY || window.pageYOffset;

    // Verifico si se ha hecho scroll hacia abajo más allá de la posición inicial
    if (scrollY > upBtnInitialPos) {
        goUpBtn.classList.add('fixed');
    } else {
        goUpBtn.classList.remove('fixed');
    }
}

window.addEventListener('scroll', verificarScroll);
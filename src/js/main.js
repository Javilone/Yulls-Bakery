// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import './productsButtons.js';


// MAIN CAROUSEL
const myCarouselElement = document.querySelector('#carouselFade')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 6000,
    touch: true
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// FORM RESPONSE MANAGEMENT 
const messageWindow = document.getElementById("mensaje");

function messageWindowFunction() {
    messageWindow.classList.toggle('form-message-window');
}

messageWindow.addEventListener("click", messageWindowFunction);


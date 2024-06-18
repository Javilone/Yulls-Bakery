// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const myCarouselElement = document.querySelector('#carouselFade')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 3000,
    touch: true
})
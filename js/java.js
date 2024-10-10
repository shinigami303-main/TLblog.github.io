/* Carrossel */
let slideIndices = [1, 1, 1, 1, 1, 1, 1, 1]; // Índices para os 8 carrosséis
const totalSlides = 2; // Cada carrossel tem 2 imagens

showSlides(1, 1); // Inicializa o carrossel 1
showSlides(1, 2); // Inicializa o carrossel 2
showSlides(1, 3); // Inicializa o carrossel 3
showSlides(1, 4); // Inicializa o carrossel 4
showSlides(1, 5); // Inicializa o carrossel 5
showSlides(1, 6); // Inicializa o carrossel 6
showSlides(1, 7); // Inicializa o carrossel 7
showSlides(1, 8); // Inicializa o carrossel 8

function moveSlide(n, carouselIndex) {
    showSlides(slideIndices[carouselIndex - 1] += n, carouselIndex);
}

function showSlides(n, carouselIndex) {
    const slides = document.querySelectorAll(`#carousel-${carouselIndex} .carousel img`);
    
    if (n > totalSlides) slideIndices[carouselIndex - 1] = 1;
    if (n < 1) slideIndices[carouselIndex - 1] = totalSlides;

    slides.forEach((slide, index) => {
        slide.style.display = (index + 1 === slideIndices[carouselIndex - 1]) ? 'block' : 'none';
    });
}

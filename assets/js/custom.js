let index = 0;
let offset = 0; // Position actuelle du décalage
const speed = 1; // Vitesse du défilement (pixels par frame)
let interval;

function moveSlide() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  offset -= speed; // Décale continuellement vers la gauche

  // Vérifie si la première image est totalement sortie
  if (Math.abs(offset) >= slides[0].offsetWidth + 15) {
    offset = 0; // Réinitialise l'offset
    index = (index + 1) % totalSlides; // Incrémente l'index

    // Déplace la première image à la fin pour créer l'effet de boucle
    const firstSlide = slides[0];
    carousel.appendChild(firstSlide);
  }

  carousel.style.transform = `translateX(${offset}px)`; // Applique le décalage
}

function startCarousel() {
  interval = setInterval(moveSlide, 16); // Appelle la fonction toutes les 16ms (~60fps)
}

startCarousel();

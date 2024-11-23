let offset = 0; // Position actuelle du décalage
const speed = 1; // Vitesse du défilement (pixels par frame)

function moveSlide() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-item');
  const slideWidth = slides[0].offsetWidth; // Largeur d'une image

  // Décale continuellement vers la gauche
  offset -= speed;

  // Si l'image est complètement sortie de l'écran
  if (Math.abs(offset) >= slideWidth) {
    offset += slideWidth; // Réinitialise l'offset pour éviter les "trous"
    carousel.appendChild(slides[0]); // Déplace la première image à la fin
  }

  // Applique le décalage
  carousel.style.transform = `translateX(${offset}px)`;
}

function startCarousel() {
  setInterval(moveSlide, 16); // Appelle la fonction toutes les 16ms (~60fps)
}

startCarousel();

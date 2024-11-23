let offset = 0; // Position actuelle du décalage
const speed = 1; // Vitesse du défilement (pixels par frame)

function moveSlide() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-item');
  const slideWidth = slides[0].offsetWidth + 15; // Largeur de l'image + marge (si applicable)

  // Décale continuellement vers la gauche
  offset -= speed;

  // Vérifie si la première image est complètement sortie de l'écran
  if (Math.abs(offset) >= slideWidth) {
    offset += slideWidth; // Ajuste l'offset pour éviter les sauts
    // Déplace la première image à la fin pour maintenir l'effet de boucle
    carousel.appendChild(slides[0]);
  }

  // Applique le décalage sans saccades
  carousel.style.transform = `translateX(${offset}px)`;
}

function startCarousel() {
  setInterval(moveSlide, 16); // Appelle la fonction toutes les 16ms (~60fps)
}

startCarousel();

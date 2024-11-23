let index = 0;
let imageCount = 0; // Compteur d'images passées
let interval;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  index = (index + step + totalSlides) % totalSlides;
  const offset = -index * (slides[0].offsetWidth + 15);
  document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
  
  imageCount++; // Incrémente le compteur d'images passées
  if (imageCount >= 15) {
    resetAnimation();
  }
}

function autoSlide() {
  moveSlide(1); // Déplace d'une image à la fois
}

function resetAnimation() {
  // Réinitialise après 6 images
  setTimeout(() => {
    index = 0; // Réinitialise l'index à zéro
    imageCount = 0; // Réinitialise le compteur d'images
    moveSlide(0); // Réinitialise la position du carrousel
  }, 1000); // Attends 1 seconde pour la réinitialisation
}

// Démarre l'animation initiale
interval = setInterval(autoSlide, 3000);

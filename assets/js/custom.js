let index = 0;
let imageCount = 0; // Compteur d'images passées
let interval;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  const carousel = document.querySelector('.carousel');

  // Calcul de la position
  index = (index + step + totalSlides) % totalSlides;
  const offset = -index * (slides[0].offsetWidth + 15);

  // Applique la transformation
  carousel.style.transform = `translateX(${offset}px)`;
  carousel.style.transition = 'transform 1s ease'; // Animation fluide

  imageCount++; // Incrémente le compteur d'images passées

  // Vérifie si 15 images sont passées
  if (imageCount >= 15) {
    resetAnimation();
  }
}

function autoSlide() {
  moveSlide(1); // Déplace d'une image à la fois
}

function resetAnimation() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-item');

  // Réinitialise après avoir affiché 15 images
  setTimeout(() => {
    index = 0; // Réinitialise l'index
    imageCount = 0; // Réinitialise le compteur d'images

    // Désactive temporairement la transition pour repositionner instantanément
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';

    // Redémarre l'animation avec un léger délai pour que la transition reprenne
    setTimeout(() => {
      carousel.style.transition = 'transform 1s ease';
    }, 50); // Délai court pour garantir une animation fluide
  }, 1000); // Attends 1 seconde avant de redémarrer
}

// Démarre l'animation initiale
interval = setInterval(autoSlide, 3000);

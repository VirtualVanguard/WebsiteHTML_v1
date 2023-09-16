// Constantes pour les classes CSS
const HEADER_CLASS_HIDDEN = 'hidden';
const HEADER_CLASS_FIXED = 'fixed';

// Sélectionnez l'élément du header
const header = document.querySelector('.sticky-header');

// Fonction pour faire apparaître la navbar avec un fondu
function fadeInNavbar() {
  header.style.opacity = '1'; // Définir l'opacité à 1 pour la faire apparaître
}

// Fonction pour faire disparaître la navbar avec un fondu
function fadeOutNavbar() {
  header.style.opacity = '0'; // Définir l'opacité à 0 pour la faire disparaître
}

// Fonction pour mettre à jour la classe du header en fonction de la position de défilement
function updateHeaderClass() {
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    fadeInNavbar();
    header.classList.remove(HEADER_CLASS_HIDDEN);
    header.classList.add(HEADER_CLASS_FIXED);
  } else {
    fadeOutNavbar();
    header.classList.remove(HEADER_CLASS_FIXED);
    header.classList.add(HEADER_CLASS_HIDDEN);
  }
}

// Écoutez l'événement de défilement de la page
window.addEventListener('scroll', updateHeaderClass);

// Documentation du code
console.log("virtualvanguard_javascript_header : Code initialisé");
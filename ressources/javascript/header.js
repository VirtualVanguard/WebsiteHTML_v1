// Sélectionnez l'élément du header
const header = document.querySelector('.sticky-header');

// Écoutez l'événement de défilement de la page
window.addEventListener('scroll', () => {
  // Obtenez la position verticale actuelle de la page
  const scrollY = window.scrollY;

  // Mettez à jour la classe CSS en fonction de la position de défilement
  if (scrollY > 100) {
    header.classList.remove('hidden');
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
    header.classList.add('hidden');
  }
});
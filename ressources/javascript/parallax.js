// Créez une fonction réutilisable pour gérer l'effet de parallaxe
function handleParallax() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const canvas = document.getElementById("parallax-bg");

    if (canvas) {
        canvas.style.backgroundPositionY = (scrolled / 10) + "px";
    }
}

// Ajoutez un gestionnaire d'événement de défilement
window.addEventListener("scroll", function () {
    requestAnimationFrame(handleParallax);
});

// Exécutez la fonction une fois au chargement de la page pour une position initiale correcte
window.addEventListener("load", handleParallax);

// Documentation du code
console.log("virtualvanguard_javascript_parallax : Code initialisé");
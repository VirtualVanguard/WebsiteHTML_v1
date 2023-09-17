function handleParallax() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const canvas = document.getElementById("parallax-bg");

    if (canvas) {
        canvas.style.backgroundPositionY = (scrolled / 10) + "px";
        
        // Ajoutez le blur en fonction de la distance défilée.
        // Ici, nous ajoutons 1 pixel de flou pour chaque 100 pixels défilés.
        const blurValue = scrolled / 100;
        canvas.style.filter = `blur(${blurValue}px)`;
    }
}

window.addEventListener("scroll", function () {
    requestAnimationFrame(handleParallax);
});

window.addEventListener("load", handleParallax);

console.log("virtualvanguard_javascript_parallax : Code avec effet de flou initialisé");
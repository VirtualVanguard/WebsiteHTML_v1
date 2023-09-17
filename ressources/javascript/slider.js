// Variables pour suivre l'index de l'image actuellement affichée
let currentImageIndex = 0;
let autoplayInterval;

// Éléments HTML
const slider = document.getElementById('slider');
const sliderContent = document.getElementById('slider_content');
const nextButton = document.getElementById('slider_nextImage');
const lastButton = document.getElementById('slider_lastImage');
const sliderAutoplayButton = document.getElementById('slider_autoplay');
let isAutoplayPaused = false;

// Fonction pour mettre à jour l'image du slider
function updateSlider() {
    sliderContent.textContent = imageUrls[currentImageIndex];
    slider.style.backgroundImage = `url('${imageUrls[currentImageIndex]}')`;
}

document.getElementById('slider_nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    updateSlider();
});

document.getElementById('slider_lastImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
    updateSlider();
});

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        updateSlider();
    }, 5000); // Intervalle de changement d'image en millisecondes (ici, 3 secondes)
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Gestion du bouton Autoplay
sliderAutoplayButton.addEventListener('click', () => {
    if (isAutoplayPaused) {
        startAutoplay();
        isAutoplayPaused = false;
        sliderAutoplayButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
            </svg>
        `;
    } else {
        stopAutoplay();
        isAutoplayPaused = true;
        sliderAutoplayButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
            </svg>
        `;
    }
});

// Ajoutez également cette ligne pour définir l'icône de départ en fonction de l'état initial de l'autoplay
sliderAutoplayButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="${isAutoplayPaused ? 'M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' : 'M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z'}" clip-rule="evenodd" />
    </svg>
`;

// Démarrez l'autoplay par défaut
startAutoplay();

// Documentation du code
console.log("virtualvanguard_javascript_slider : Code initialisé");
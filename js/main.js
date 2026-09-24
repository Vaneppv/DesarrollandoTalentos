// Main Initialization for techUniversal FLL Web App

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Render all academies in Academias Locales section
    if (typeof renderAllAcademies === 'function') {
        renderAllAcademies();
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
});

function revealSimulator(event) {
    if (event) {
        event.preventDefault();
    }
    const content = document.getElementById('simulator-interactive-content');
    const ctaBox = document.getElementById('simulator-cta-box');
    const academias = document.getElementById('academias');
    const eventos = document.getElementById('eventos');

    if (content) {
        content.classList.add('active');
    }
    if (ctaBox) {
        ctaBox.style.display = 'none';
    }
    if (academias) {
        academias.classList.remove('hidden-section');
    }
    if (eventos) {
        eventos.classList.remove('hidden-section');
    }
    if (typeof selectProfile === 'function' && typeof profilesData !== 'undefined') {
        const keys = Object.keys(profilesData);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        selectProfile(randomKey);
    }
    const simSection = document.getElementById('simulador');
    if (simSection) {
        simSection.scrollIntoView({ behavior: 'smooth' });
    }
}


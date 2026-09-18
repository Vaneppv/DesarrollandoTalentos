// Simulator Data and Logic for Ipuana Robot Profile Sync (Art, Music, Tech & Literature Focus)

const profilesData = {
    arte: {
        title: "Perfil: Arte, Pintura y Diseño",
        desc: "El niño demostró alta sensibilidad cromática y destreza en dinámicas visuales durante la interacción con el robot Ipuana.",
        academies: [
            { name: "Academia de Artes Plásticas 'Picassito'", location: "Zona Norte (A 1.2 km)", rating: "4.9", course: "Pintura al Óleo y Expresión Creativa" },
            { name: "Taller Creativo 'Colorines'", location: "Centro Comercial Plaza (A 2.5 km)", rating: "4.8", course: "Ilustración Digital y Cómic Infantil" }
        ],
        events: [
            { title: "Concurso Infantil de Pintura al Aire Libre", date: "Sábado 28 Sep", location: "Parque Central" },
            { title: "Exposición de Pequeños Artistas 2026", date: "Viernes 10 Oct", location: "Galería Municipal" }
        ],
        route: "Nivel 1: Taller de iniciación cromática -> Nivel 2: Técnicas mixtas y volumen -> Nivel 3: Exposición en galería juvenil."
    },
    musica: {
        title: "Perfil: Música, Ritmo y Sonido",
        desc: "Excelente sentido rítmico, gran percepción auditiva y afinación natural detectada al interactuar con Ipuana.",
        academies: [
            { name: "Conservatorio Infantil 'Mozart Kids'", location: "Zona Este (A 1.8 km)", rating: "5.0", course: "Iniciación Musical y Violín" },
            { name: "Escuela de Ritmo 'BeatKids'", location: "Av. Las Palmeras (A 3.1 km)", rating: "4.7", course: "Batería, Teclado y Ensamble Infantil" }
        ],
        events: [
            { title: "Festival de Orquestas Infantiles", date: "Domingo 5 Oct", location: "Teatro Municipal" },
            { title: "Taller de Creación de Instrumentos", date: "Sábado 18 Oct", location: "Centro Cultural" }
        ],
        route: "Nivel 1: Juegos rítmicos y flauta dulce -> Nivel 2: Elección de instrumento principal -> Nivel 3: Participación en orquesta juvenil."
    },
    tecnologia: {
        title: "Perfil: Tecnología y Robótica",
        desc: "Alta capacidad de resolución lógica, pensamiento computacional y fascinación por la automatización detectada por Ipuana.",
        academies: [
            { name: "RoboKids Academy", location: "Centro Tecnológico (A 1.5 km)", rating: "4.9", course: "Robótica con LEGO WeDo y Programación Visual" },
            { name: "CodeJunior Lab", location: "Parque Científico (A 3.0 km)", rating: "4.8", course: "Creación de Videojuegos y Pensamiento Lógico" }
        ],
        events: [
            { title: "Mini-Torneo de Robótica FLL Junior", date: "Sábado 12 Oct", location: "Polideportivo Municipal" },
            { title: "Feria de Ciencia y Código Infantil", date: "Viernes 24 Oct", location: "Auditorio Tech" }
        ],
        route: "Nivel 1: Bloques de programación básica -> Nivel 2: Robótica y sensores -> Nivel 3: Competencia regional de robótica."
    },
    literatura: {
        title: "Perfil: Literatura y Creación Literaria",
        desc: "Gran fluidez verbal, imaginación narrativa desbordante y sensibilidad por la lectura y escritura creativa.",
        academies: [
            { name: "Taller de Letras 'Cuentacuentos'", location: "Centro Histórico (A 2.0 km)", rating: "4.9", course: "Escritura Creativa y Creación de Cuentos" },
            { name: "Escuela de Teatro y Lectura 'Palabra Viva'", location: "Zona Cultural (A 2.8 km)", rating: "4.7", course: "Oratoria, Lectura Expressiva y Dramaturgia" }
        ],
        events: [
            { title: "Feria del Libro Infantil y Juvenil", date: "Domingo 19 Oct", location: "Plaza Mayor" },
            { title: "Concurso de Cuentos Cortos 'Ipuana'", date: "Sábado 8 Nov", location: "Biblioteca Central" }
        ],
        route: "Nivel 1: Juegos de palabras y lectura guiada -> Nivel 2: Creación de cuentos ilustrados -> Nivel 3: Publicación en antología infantil."
    }
};

function selectProfile(profileKey) {
    const data = profilesData[profileKey];
    if (!data) return;

    // Update Header Hero Card
    const heroTitleEl = document.getElementById('hero-detected-profile');
    const heroAcademiesEl = document.getElementById('hero-academies-count');
    const heroEventsEl = document.getElementById('hero-events-count');

    if (heroTitleEl) {
        const icons = { arte: '🎨', musica: '🎵', tecnologia: '🤖', literatura: '📚' };
        const icon = icons[profileKey] || '✨';
        heroTitleEl.innerHTML = `<span class="text-2xl mr-2">${icon}</span> ${data.title.replace('Perfil: ', '')}`;
    }
    if (heroAcademiesEl) heroAcademiesEl.innerText = data.academies.length;
    if (heroEventsEl) heroEventsEl.innerText = data.events.length;

    // Update button styles
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.style.borderColor = '#e2e8f0';
        btn.style.backgroundColor = '#ffffff';
        const badge = btn.querySelector('span:last-child');
        if (badge) {
            badge.innerText = "Hacer clic para probar";
            badge.style.color = "#94a3b8";
        }
    });

    const activeBtn = document.getElementById(`btn-${profileKey}`);
    if (activeBtn) {
        activeBtn.style.borderColor = '#4f46e5';
        activeBtn.style.backgroundColor = 'rgba(79, 70, 229, 0.05)';
        const activeBadge = activeBtn.querySelector('span:last-child');
        if (activeBadge) {
            activeBadge.innerText = "Seleccionado";
            activeBadge.style.color = "#4f46e5";
        }
    }

    // Update simulator result panel
    const resTitle = document.getElementById('result-title');
    const resDesc = document.getElementById('result-desc');
    const resRoute = document.getElementById('result-route');

    if (resTitle) resTitle.innerText = data.title;
    if (resDesc) resDesc.innerText = data.desc;
    if (resRoute) resRoute.innerText = data.route;

    // Render academies
    const academiesContainer = document.getElementById('result-academies');
    if (academiesContainer) {
        academiesContainer.innerHTML = data.academies.map(acc => `
            <div style="background-color: rgba(255,255,255,0.05); padding: 1rem; border-radius: 0.75rem; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <h5 style="font-weight: 700; color: #ffffff; font-size: 0.875rem; margin-bottom: 0.25rem;">${acc.name}</h5>
                    <p style="font-size: 0.75rem; color: #cbd5e1; margin-bottom: 0.25rem;">${acc.course}</p>
                    <span style="font-size: 0.75rem; color: #818cf8; display: block;">${acc.location}</span>
                </div>
                <button onclick="alert('¡Inscripción solicitada en ${acc.name}!')" style="padding: 0.375rem 0.875rem; background-color: #4f46e5; color: #ffffff; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 600; border: none; cursor: pointer;">Ver</button>
            </div>
        `).join('');
    }

    // Render events
    const eventsContainer = document.getElementById('result-events');
    if (eventsContainer) {
        eventsContainer.innerHTML = data.events.map(ev => `
            <div style="background-color: rgba(255,255,255,0.05); padding: 0.75rem; border-radius: 0.75rem; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem;">
                <div>
                    <span style="font-weight: 700; color: #ffffff; display: block; margin-bottom: 0.125rem;">${ev.title}</span>
                    <span style="color: #cbd5e1;">${ev.date} • ${ev.location}</span>
                </div>
                <button onclick="alert('¡Registrado al evento ${ev.title}!')" style="color: #c4b5fd; font-weight: 700; background: none; border: none; cursor: pointer; margin-left: 0.5rem;">Asistir</button>
            </div>
        `).join('');
    }
}

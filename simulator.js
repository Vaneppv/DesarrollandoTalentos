// Simulator Data and Logic for Ipuana Robot Profile Sync (Art & Music Focus)

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
        const icon = profileKey === 'arte' ? '🎨' : '🎵';
        heroTitleEl.innerHTML = `<span class="text-2xl mr-2">${icon}</span> ${data.title.replace('Perfil: ', '')}`;
    }
    if (heroAcademiesEl) heroAcademiesEl.innerText = data.academies.length;
    if (heroEventsEl) heroEventsEl.innerText = data.events.length;

    // Update button styles
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.classList.remove('border-indigo-600', 'bg-indigo-50/50', 'border-2');
        btn.classList.add('border-slate-200', 'bg-white', 'border-2');
        const badge = btn.querySelector('span:last-child');
        if (badge) {
            badge.innerText = "Hacer clic para probar";
            badge.className = "block text-xs text-slate-400 font-semibold mt-1";
        }
    });

    const activeBtn = document.getElementById(`btn-${profileKey}`);
    if (activeBtn) {
        activeBtn.classList.remove('border-slate-200', 'bg-white');
        activeBtn.classList.add('border-indigo-600', 'bg-indigo-50/50');
        const activeBadge = activeBtn.querySelector('span:last-child');
        if (activeBadge) {
            activeBadge.innerText = "Seleccionado";
            activeBadge.className = "block text-xs text-indigo-600 font-semibold mt-1";
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
            <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                    <h5 class="font-bold text-white text-sm">${acc.name}</h5>
                    <p class="text-xs text-slate-300">${acc.course}</p>
                    <span class="text-xs text-indigo-300 mt-1 block">${acc.location}</span>
                </div>
                <button onclick="alert('¡Inscripción solicitada en ${acc.name}!')" class="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition">Ver</button>
            </div>
        `).join('');
    }

    // Render events
    const eventsContainer = document.getElementById('result-events');
    if (eventsContainer) {
        eventsContainer.innerHTML = data.events.map(ev => `
            <div class="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                <div>
                    <span class="font-bold text-white block">${ev.title}</span>
                    <span class="text-slate-300">${ev.date} • ${ev.location}</span>
                </div>
                <button onclick="alert('¡Registrado al evento ${ev.title}!')" class="text-violet-300 hover:text-white font-bold ml-2">Asistir</button>
            </div>
        `).join('');
    }
}

// Simulator Data and Logic for Ipuana Robot Profile Sync (Real Academies from Maracaibo)

const profilesData = {
    arte: {
        title: "Perfil: Arte, Pintura y Diseño",
        desc: "El niño demostró alta sensibilidad cromática y destreza en dinámicas visuales durante la interacción con el robot Ipuana.",
        academies: [
            { name: "Escuela Técnica de Artes Visuales Julio Árraga", location: "Calle 78 (Dr. Portillo) con Av. 25, Maracaibo", rating: "4.9", course: "Dibujo, Pintura y Cerámica Infantil" },
            { name: "Talleres de Dibujo y Pintura del CBA", location: "Av. 3F N° 67-217, Sector La Lago, Maracaibo", rating: "4.8", course: "Expresión Plástica y Creación Artística" }
        ],
        events: [
            { title: "Concurso Infantil de Pintura al Aire Libre", date: "Sábado 28 Sep", location: "Parque Central" },
            { title: "Exposición de Pequeños Artistas 2026", date: "Viernes 10 Oct", location: "Centro de Arte Lía Bermúdez" }
        ],
        route: "Nivel 1: Taller de iniciación cromática -> Nivel 2: Técnicas mixtas y volumen -> Nivel 3: Exposición en galería juvenil."
    },
    musica: {
        title: "Perfil: Música, Ritmo y Sonido",
        desc: "Excelente sentido rítmico, gran percepción auditiva y afinación natural detectada al interactuar con Ipuana.",
        academies: [
            { name: "YK Música (Your Kingdom Music)", location: "CC Aventura, Sector Tierra Negra, Maracaibo", rating: "5.0", course: "Iniciación Musical, Teclado y Canto" },
            { name: "Conservatorio de Música José Luis Paz", location: "Vereda del Lago / Av. El Milagro, Maracaibo", rating: "4.9", course: "Violín, Flauta y Ensamble Infantil" }
        ],
        events: [
            { title: "Festival de Orquestas Infantiles", date: "Domingo 5 Oct", location: "Teatro Baralt" },
            { title: "Taller de Creación de Instrumentos", date: "Sábado 18 Oct", location: "Centro de Bellas Artes" }
        ],
        route: "Nivel 1: Juegos rítmicos y flauta dulce -> Nivel 2: Elección de instrumento principal -> Nivel 3: Participación en orquesta juvenil."
    },
    tecnologia: {
        title: "Perfil: Tecnología y Robótica",
        desc: "Alta capacidad de resolución lógica, pensamiento computacional y fascinación por la automatización detectada por Ipuana.",
        academies: [
            { name: "RoboKids Academy", location: "Centro Tecnológico, Maracaibo", rating: "4.9", course: "Robótica con LEGO WeDo y Programación Visual" },
            { name: "CodeJunior Lab", location: "Parque Científico, Maracaibo", rating: "4.8", course: "Creación de Videojuegos y Pensamiento Lógico" }
        ],
        events: [
            { title: "Mini-Torneo de Robótica FLL Junior", date: "Sábado 12 Oct", location: "Polideportivo Municipal" },
            { title: "Feria de Ciencia y Código Infantil", date: "Viernes 24 Oct", location: "Auditorio Tech" }
        ],
        route: "Nivel 1: Bloques de programación básica -> Nivel 2: Robótica y sensores -> Nivel 3: Competencia regional de robótica."
    },
    literatura: {
        title: "Perfil: Teatro, Literatura y Expresión Oral",
        desc: "Gran fluidez verbal, imaginación narrativa desbordante y sensibilidad por la lectura, el teatro y la escritura creativa.",
        academies: [
            { name: "Centro de Formación Teatro Baralt", location: "Av. 5 con Calle 95 (Plaza Bolívar), Maracaibo", rating: "4.9", course: "Iniciación Actoral y Expresión Escénica Infantil" },
            { name: "Barikai (Taller en el CBA)", location: "Av. 3F N° 67-217, Sector La Lago, Maracaibo", rating: "4.8", course: "Formación Actoral y Cuentacuentos" }
        ],
        events: [
            { title: "Feria del Libro Infantil y Juvenil", date: "Domingo 19 Oct", location: "Teatro Baralt" },
            { title: "Concurso de Cuentos Cortos 'Ipuana'", date: "Sábado 8 Nov", location: "Centro de Bellas Artes" }
        ],
        route: "Nivel 1: Juegos de palabras y lectura guiada -> Nivel 2: Creación de cuentos y teatro infantil -> Nivel 3: Puesta en escena en teatro."
    },
    danza: {
        title: "Perfil: Danza, Movimiento y Expresión Corporal",
        desc: "Excelente sentido del equilibrio, coordinación rítmica y gran expresividad corporal detectada durante la interacción con Ipuana.",
        academies: [
            { name: "Jazz Ballet del Zulia", location: "Calle 67 con Av. 3C (Cecilio Acosta), Maracaibo", rating: "4.9", course: "Iniciación al Ballet y Danza Contemporánea" },
            { name: "Escuela de Ballet Grazyna Yeropunov", location: "Sector Valle Claro, Maracaibo", rating: "4.8", course: "Ballet Clásico y Expresión Rítmica" }
        ],
        events: [
            { title: "Festival de Pequeños Danzarines", date: "Sábado 4 Oct", location: "Teatro Baralt" },
            { title: "Gala Anual de Danza Infantil 2026", date: "Viernes 17 Oct", location: "Centro de Convenciones" }
        ],
        route: "Nivel 1: Expresión corporal y juegos rítmicos -> Nivel 2: Técnica base y coordinación -> Nivel 3: Participación en muestras coreográficas."
    }
};

const allAcademiesData = [
    // DANZA
    { name: "Jazz Ballet del Zulia", category: "Danza", icon: "💃", badgeClass: "badge-purple-soft", location: "Calle 67 con Av. 3C (Cecilio Acosta), Casa 3C-25, Maracaibo", phone: "+58 414-6308577" },
    { name: "Escuela de Ballet Clásico Grazyna Yeropunov", category: "Danza", icon: "💃", badgeClass: "badge-purple-soft", location: "Sector Valle Claro / El Rosal Sur, Maracaibo", phone: "(0261) 793-3138 / (0414) 059-6093" },
    { name: "Je Danse Academia", category: "Danza", icon: "💃", badgeClass: "badge-purple-soft", location: "Sector La Lago, Maracaibo", phone: "(0414) 631-2240" },
    { name: "Impulso Elite Dance", category: "Danza", icon: "💃", badgeClass: "badge-purple-soft", location: "Av. 4 (Bella Vista), Maracaibo", phone: "(0424) 612-8933" },
    { name: "Academia de Baile Flamenco La Romería", category: "Danza", icon: "💃", badgeClass: "badge-purple-soft", location: "Sector La Lago, Maracaibo", phone: "(0414) 361-4816" },
    { name: "Fundación Fusión Dance", category: "Danza", icon: "💃", badgeClass: "badge-purple-soft", location: "Urbanización Canta Claro, Maracaibo", phone: "(0424) 620-8262" },

    // MÚSICA
    { name: "Academia de Música TFORMAT", category: "Música", icon: "🎵", badgeClass: "badge-indigo-soft", location: "Sector Bella Vista / Prolongación Circunvalación 2, Maracaibo", phone: "+58 414-6123450" },
    { name: "World Music", category: "Música", icon: "🎵", badgeClass: "badge-indigo-soft", location: "Avenida 20, Maracaibo", phone: "+58 424-6931692" },
    { name: "Academia de Música Pentagrama", category: "Música", icon: "🎵", badgeClass: "badge-indigo-soft", location: "Sector Paraíso, Maracaibo", phone: "(0414) 618-9210" },
    { name: "Escuela de Música del Centro de Bellas Artes", category: "Música", icon: "🎵", badgeClass: "badge-indigo-soft", location: "Av. 3F N° 67-217, Sector La Lago, Maracaibo", phone: "(0261) 792-3785" },

    // TEATRO
    { name: "Barikai (Taller y Formación Actoral en el CBA)", category: "Teatro", icon: "🎭", badgeClass: "badge-pink-soft", location: "Av. 3F N° 67-217, Sector La Lago (Centro de Bellas Artes), Maracaibo", phone: "(0424) 682-2910 / (0424) 614-1273" },
    { name: "Teorema Producciones / Espacios Escénicos", category: "Teatro", icon: "🎭", badgeClass: "badge-pink-soft", location: "Teatro Baralt y Centro de Bellas Artes, Maracaibo", phone: "(0414) 625-1190" },
    { name: "Centro de Formación Teatro Baralt", category: "Teatro", icon: "🎭", badgeClass: "badge-pink-soft", location: "Avenida 5 con Calle 95, diagonal a la Plaza Bolívar, Maracaibo", phone: "(0261) 722-3878" },
    { name: "Taller de Formación Actoral TEA", category: "Teatro", icon: "🎭", badgeClass: "badge-pink-soft", location: "Av. 3F, Sector La Lago (Centro de Bellas Artes), Maracaibo", phone: "(0261) 792-3785" },
    { name: "Surnorte Teatro", category: "Teatro", icon: "🎭", badgeClass: "badge-pink-soft", location: "Calle 72 con Av. 13, Maracaibo", phone: "(0412) 678-4390" },
    { name: "Pequeño Teatro de Maracaibo", category: "Teatro", icon: "🎭", badgeClass: "badge-pink-soft", location: "Sector Las Delicias, Maracaibo", phone: "(0414) 633-8921" },

    // PINTURA / ARTES PLÁSTICAS
    { name: "Spacio 14 (Talleres y espacios de creación artística)", category: "Pintura", icon: "🎨", badgeClass: "badge-blue-soft", location: "Sector Tierra Negra / Zona Norte, Maracaibo", phone: "(0414) 612-4850" },
    { name: "Centro Art Escuela de Diseño y Plástica", category: "Pintura", icon: "🎨", badgeClass: "badge-blue-soft", location: "Sector 5 de Julio con Av. 11, Maracaibo", phone: "(0261) 743-1590" },
    { name: "Taller de Arte Libre Lía Bermúdez", category: "Pintura", icon: "🎨", badgeClass: "badge-blue-soft", location: "Paseo Urdaneta, Calle 95 con Av. 2 (Frente al Lago), Maracaibo", phone: "(0261) 723-1757" },
    { name: "Academia de Pintura Infantil y Juvenil Pinceles", category: "Pintura", icon: "🎨", badgeClass: "badge-blue-soft", location: "Urbanización La Victoria, Maracaibo", phone: "(0424) 654-2210" },

    // TECNOLOGÍA
    { name: "Alpha Student Academy", category: "Tecnología", icon: "🤖", badgeClass: "badge-green-soft", location: "Centro Comercial La Paragua, Local #31, Maracaibo", phone: "+58 412-5297259" },
    { name: "TechCreativos", category: "Tecnología", icon: "🤖", badgeClass: "badge-green-soft", location: "Avenida 3F con Calle 59A, Sector Las Mercedes, Maracaibo", phone: "+58 412-6926807" },
    { name: "Maker Space Maracaibo", category: "Tecnología", icon: "🤖", badgeClass: "badge-green-soft", location: "Calle 89B, entre Av. 23A, Local # 23A 81", phone: "+58 412-3984288" }
];

const profileToCategory = {
    arte: 'Pintura',
    musica: 'Música',
    tecnologia: 'Tecnología',
    literatura: 'Teatro',
    danza: 'Danza'
};

function selectProfile(profileKey) {
    const data = profilesData[profileKey];
    if (!data) return;

    // Update Header Hero Card
    const heroTitleEl = document.getElementById('hero-detected-profile');
    const heroDescEl = document.getElementById('hero-detected-desc');
    const heroAcademiesEl = document.getElementById('hero-academies-count');
    const heroEventsEl = document.getElementById('hero-events-count');

    if (heroTitleEl) {
        const icons = { arte: '🎨', musica: '🎵', tecnologia: '🤖', literatura: '📚', danza: '💃' };
        const icon = icons[profileKey] || '✨';
        heroTitleEl.innerHTML = `<span class="emoji-lg">${icon}</span> ${data.title.replace('Perfil: ', '')}`;
    }
    if (heroDescEl) {
        heroDescEl.innerText = data.desc;
    }
    if (heroEventsEl) heroEventsEl.innerText = data.events.length;

    // Update button styles
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.classList.remove('active-profile');
        btn.classList.add('profile-btn-inactive');
        const badge = btn.querySelector('span:last-child');
        if (badge) {
            badge.innerText = "Hacer clic para probar";
            badge.className = "block text-xs profile-badge-inactive font-semibold mt-1";
        }
    });

    const activeBtn = document.getElementById(`btn-${profileKey}`);
    if (activeBtn) {
        activeBtn.classList.remove('profile-btn-inactive');
        activeBtn.classList.add('active-profile');
        const activeBadge = activeBtn.querySelector('span:last-child');
        if (activeBadge) {
            activeBadge.innerText = "Seleccionado";
            activeBadge.className = "block text-xs profile-badge-active font-semibold mt-1";
        }
    }

// Update simulator result panel
    const resTitle = document.getElementById('result-title');
    const resDesc = document.getElementById('result-desc');
    const resRoute = document.getElementById('result-route');

    if (resTitle) resTitle.innerText = data.title;
    if (resDesc) resDesc.innerText = data.desc;
    if (resRoute) resRoute.innerText = data.route;

    // Render academies from allAcademiesData by category
    const category = profileToCategory[profileKey];
    const academies = category ? allAcademiesData.filter(a => a.category === category) : data.academies;

    const academiesContainer = document.getElementById('result-academies');
    if (academiesContainer) {
        const limitedAcademies = academies.slice(0, 2);
        academiesContainer.innerHTML = limitedAcademies.map(academy => `
            <div class="academy-card-compact">
                <div>
                    <span class="academy-name">${academy.name}</span>
                    <span class="academy-meta">${academy.icon} ${academy.category} • ${academy.location}</span>
                </div>
                <button class="btn-academy-info" onclick="alert('Academia: ${academy.name}\\nTeléfono: ${academy.phone}\\nUbicación: ${academy.location}')">Ver info</button>
            </div>
        `).join('');
    }
    if (heroAcademiesEl) heroAcademiesEl.innerText = academies.length;
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Render events
    const eventsContainer = document.getElementById('result-events');
    if (eventsContainer) {
        eventsContainer.innerHTML = data.events.map(ev => `
            <div class="simulator-event-card">
                <div>
                    <span class="simulator-event-title">${ev.title}</span>
                    <span class="simulator-event-date">${ev.date} • ${ev.location}</span>
                </div>
                <button onclick="alert('¡Registrado al evento ${ev.title}!')" class="btn-simulator-attend">Asistir</button>
            </div>
        `).join('');
    }
}

function renderAllAcademies() {
    const container = document.getElementById('all-academies-container');
    if (!container) return;

    const categories = ['Danza', 'Música', 'Teatro', 'Pintura', 'Tecnología'];
    let html = '';

    categories.forEach(cat => {
        const academies = allAcademiesData.filter(a => a.category === cat).slice(0, 2);
        if (academies.length === 0) return;

        academies.forEach(academy => {
            html += `
                <div class="academy-card-compact-light">
                    <div>
                        <span class="academy-name">${academy.name}</span>
                        <span class="academy-meta">${academy.icon} ${academy.category} • ${academy.location}</span>
                    </div>
                    <button class="btn-academy-info" onclick="alert('Academia: ${academy.name}\\nTeléfono: ${academy.phone}\\nUbicación: ${academy.location}')">Ver info</button>
                </div>
            `;
        });
    });

    container.innerHTML = html;
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
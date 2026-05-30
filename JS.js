document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. BASE DE DATOS DE ATAQUES (CARRUSEL & LABORATIOS)
    // ==========================================
    const portfolioData = [
        {
            id: 1,
            title: 'Phishing',
            description: 'Técnica de engaño donde el atacante se hace pasar por una entidad legítima para robar datos.',
            image: 'images/iot-matrix.jpg',
            tech: ['engaño', 'suplantación', 'credenciales']
        },
        {
            id: 2,
            title: 'Troyano',
            description: 'Malware que se oculta dentro de un programa aparentemente seguro para acceder o controlar el sistema infectado.',
            image: 'images/neural-network.jpg',
            tech: ['malware', 'oculto', 'acceso']
        },
        {
            id: 3,
            title: 'Credential Stuffing',
            description: 'Ataque que usa combinaciones de usuario y contraseña filtradas para acceder a cuentas.',
            image: 'images/blockchain-vault.jpg',
            tech: ['contraseñas', 'automatización', 'filtraciones']
        },
        {
            id: 4,
            title: 'Ataque DDoS',
            description: 'Saturación de un servidor o red mediante tráfico masivo para dejar el servicio inaccesible.',
            image: 'images/cyber-defense.jpg',
            tech: ['saturación', 'tráfico', 'interrupción']
        },
        {
            id: 5,
            title: 'Inyección SQL',
            description: 'Ataque que introduce código SQL malicioso en formularios o entradas para acceder o manipular bases de datos.',
            image: 'images/data-nexus.jpg',
            tech: ['baseDatos', 'código', 'explotación']
        },
        {
            id: 6,
            title: 'Compromiso de Proveedores',
            description: 'Ataque que explota la seguridad de proveedores para infiltrarse en una organización objetivo.',
            image: 'images/ar-interface.jpg',
            tech: ['terceros', 'acceso', 'cadena']
        },
        {
            id: 7,
            title: 'Ataques a IoT',
            description: 'Explotación de dispositivos conectados a internet con poca seguridad para usarlos en ataques.',
            image: 'images/quantum-cloud.jpg',
            tech: ['dispositivos', 'vulnerables', 'botnet']
        }
    ];

    // Base de datos para los Hexágonos con las URL de redirección añadidas
    const skillsData = [
        { name: 'Phishing', icon: '🎣', level: 95, category: 'AAA', url: 'paginas/phishing.html' },
        { name: 'Spear Phishing', icon: '📨', level: 90, category: 'AAA', url: 'paginas/spear-phishing.html' },
        { name: 'Smishing', icon: '📱', level: 88, category: 'AAA', url: 'paginas/smishing.html' },
        { name: 'Ransomware de Doble Extorsión', icon: '🔒', level: 92, category: 'BBB', url: 'paginas/ransomware.html' },
        { name: 'Fileless Malware', icon: '👻', level: 85, category: 'BBB', url: 'paginas/fileless-malware.html' },
        { name: 'Man-in-the-Middle', icon: '🕵️', level: 93, category: 'CCC', url: 'paginas/mitm.html' },
        { name: 'Credential Stuffing', icon: '🔑', level: 82, category: 'CCC', url: 'paginas/credential-stuffing.html' },
        { name: 'Password Spraying', icon: '🔓', level: 87, category: 'CCC', url: 'paginas/password-spraying.html' },
        { name: 'DDoS', icon: '🌐', level: 78, category: 'DDD', url: 'paginas/ddos.html' },
        { name: 'Inyección SQL', icon: '🗄️', level: 75, category: 'GGG', url: 'paginas/sql-injection.html' },
        { name: 'Compromiso de Proveedores', icon: '🔓', level: 85, category: 'EEE', url: 'paginas/supply-chain.html' },
        { name: 'Ataques a IoT', icon: '📡', level: 90, category: 'FFF', url: 'paginas/iot.html' }
    ];

    // ==========================================
    // 2. CONTROL DEL LOADER & CABECERA
    // ==========================================
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    }

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 3. DESPLAZAMIENTO SUAVE (SCROLL)
    // ==========================================
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section && header) {
            const headerHeight = header.offsetHeight;
            const targetPosition = section.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            if (navMenu && menuToggle) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav);

    // ==========================================
    // 4. SISTEMA DEL CARRUSEL 3D
    // ==========================================
    let currentIndex = 0;
    const carousel = document.getElementById('carousel');
    const indicatorsContainer = document.getElementById('indicators');

    function createCarouselItem(data, index) {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.dataset.index = index;
        
        const techBadges = data.tech.map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');
        
        item.innerHTML = `
            <div class="card">
                <div class="card-number">0${data.id}</div>
                <div class="card-image">
                    <img src="${data.image}" alt="${data.title}">
                </div>
                <h3 class="card-title">${data.title}</h3>
                <p class="card-description">${data.description}</p>
                <div class="card-tech">${techBadges}</div>
                <button class="card-cta" onclick="scrollToSection('ataques')">Ver Más</button>
            </div>
        `;
        return item;
    }

    function initCarousel() {
        if (!carousel || !indicatorsContainer) return;
        portfolioData.forEach((data, index) => {
            const item = createCarouselItem(data, index);
            carousel.appendChild(item);
            
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.dataset.index = index;
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
        updateCarousel();
    }

    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.indicator');
        const totalItems = items.length;
        if (totalItems === 0) return;

        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth <= 1024;
        
        items.forEach((item, index) => {
            let offset = index - currentIndex;
            
            if (offset > totalItems / 2) offset -= totalItems;
            else if (offset < -totalItems / 2) offset += totalItems;
            
            const absOffset = Math.abs(offset);
            const sign = offset < 0 ? -1 : 1;
            
            item.style.transform = '';
            item.style.opacity = '';
            item.style.zIndex = '';
            item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
            
            let spacing1 = 400, spacing2 = 600, spacing3 = 750;
            
            if (isMobile) {
                spacing1 = 280; spacing2 = 420; spacing3 = 550;  
            } else if (isTablet) {
                spacing1 = 340; spacing2 = 520; spacing3 = 650;
            }
            
            if (absOffset === 0) {
                item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                item.style.opacity = '1';
                item.style.zIndex = '10';
            } else if (absOffset === 1) {
                const translateX = sign * spacing1;
                const rotation = isMobile ? 25 : 30;
                const scale = isMobile ? 0.88 : 0.85;
                item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                item.style.opacity = '0.8';
                item.style.zIndex = '5';
            } else if (absOffset === 2) {
                const translateX = sign * spacing2;
                const rotation = isMobile ? 35 : 40;
                const scale = isMobile ? 0.75 : 0.7;
                item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                item.style.opacity = '0.5';
                item.style.zIndex = '3';
            } else if (absOffset === 3) {
                const translateX = sign * spacing3;
                const rotation = isMobile ? 40 : 45;
                const scale = isMobile ? 0.65 : 0.6;
                item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                item.style.opacity = '0.3';
                item.style.zIndex = '2';
            } else {
                item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                item.style.opacity = '0';
                item.style.zIndex = '1';
            }
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % portfolioData.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCarousel();
        }, 250);
    });

    // ==========================================
    // 5. CUADRÍCULA DE HEXÁGONOS (SANDBOX EDITADO)
    // ==========================================
    function initSkillsGrid() {
        const skillsGrid = document.getElementById('skillsGrid');
        const categoryTabs = document.querySelectorAll('.category-tab');
        if (!skillsGrid) return;
        
        function displaySkills(category = 'all') {
            skillsGrid.innerHTML = '';
            
            const filteredSkills = category === 'all' 
                ? skillsData 
                : skillsData.filter(skill => skill.category === category);
            
            filteredSkills.forEach((skill, index) => {
                // Modificado de 'div' a 'a' para actuar como enlace nativo a su respectiva página
                const hexagon = document.createElement('a');
                hexagon.className = 'skill-hexagon';
                hexagon.href = skill.url; 
                hexagon.style.animationDelay = `${index * 0.1}s`;
                
                hexagon.innerHTML = `
                    <div class="hexagon-inner">
                        <div class="hexagon-content">
                            <div class="skill-icon-hex">${skill.icon}</div>
                            <div class="skill-name-hex">${skill.name}</div>
                            <div class="skill-level">
                                <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                            </div>
                            <div class="skill-percentage-hex">${skill.level}%</div>
                        </div>
                    </div>
                `;
                skillsGrid.appendChild(hexagon);
            });
        }
        
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                displaySkills(tab.dataset.category);
            });
        });
        
        displaySkills();
    }

    // ==========================================
    // 6. EFECTOS ESPECIALES Y ESCUCHAS
    // ==========================================
    function initParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (18 + Math.random() * 8) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Inicialización global de los componentes
    initCarousel();
    initSkillsGrid();
    initParticles();
});

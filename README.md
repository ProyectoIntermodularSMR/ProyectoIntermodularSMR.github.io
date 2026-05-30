# Lucid37.github.io
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ataques, Virus y Proteccion</title>
    <link rel="stylesheet" href="CSS.css">
</head>
<body>
    <div class="loader" id="loader">
        <div class="loader-content">
            <div class="loader-prism">
                <div class="prism-face"></div>
                <div class="prism-face"></div>
                <div class="prism-face"></div>
            </div>
            <div style="color: var(--accent-purple); font-size: 18px; text-transform: uppercase; letter-spacing: 3px;">Refracting Reality...</div>
        </div>
    </div>

    <header class="header" id="header">
        <nav class="nav-container">
            <a href="#home" class="logo">
                <div class="logo-icon">
                    <div class="logo-prism">
                        <div class="prism-shape"></div>
                    </div>
                </div>
                <span class="logo-text">
                    <span class="prism">ATAQUES</span>
                    <span class="flux">VM</span>
                </span>
            </a>
            
            <ul class="nav-menu" id="navMenu">
                <li><a href="#inicio" class="nav-link active">Inicio</a></li>
                <li><a href="#ataques" class="nav-link">Ataques Informáticos</a></li>
                <li><a href="#sandbox" class="nav-link">Sandbox</a></li>
                <li><a href="#info" class="nav-link">Más Información</a></li>
            </ul>
            
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <section class="hero" id="inicio">
        <div class="carousel-container">
            <div class="carousel" id="carousel">
            </div>
            
            <div class="carousel-controls">
                <button class="carousel-btn" id="prevBtn">‹</button>
                <button class="carousel-btn" id="nextBtn">›</button>
            </div>
            
            <div class="carousel-indicators" id="indicators">
            </div>
        </div>
    </section>

    <section class="philosophy-section" id="ataques">
        <div class="philosophy-container">
            <div class="prism-line"></div>
            
            <h2 class="philosophy-headline">
                La mejor página para<br>aprender sobre CiberAtaques
            </h2>
            
            <p class="philosophy-subheading">
                Nuestra plataforma está diseñada para enseñar, analizar y comprender los principales ciberataques que afectan al mundo digital actual. A través de información detallada, ejemplos reales y entornos seguros basados en máquinas virtuales tipo sandbox, los usuarios pueden observar y estudiar el comportamiento de amenazas sin poner en riesgo sistemas reales.
            </p>
            
            <div class="philosophy-pillars">
                <div class="pillar">
                    <div class="pillar-icon">💎</div>
                    <h3 class="pillar-title">Innovación</h3>
                    <p class="pillar-description">
                        Descubre cómo funcionan los principales ciberataques actuales mediante contenido educativo y análisis prácticos realizados en entornos virtuales seguros diseñados para el aprendizaje en ciberseguridad</a>.
                    </p>
                </div>
                
                <div class="pillar">
                    <div class="pillar-icon">🔬</div>
                    <h3 class="pillar-title">Investiga</h3>
                    <p class="pillar-description">
                        Nuestra plataforma permite estudiar amenazas informáticas reales a través de laboratorios sandbox con máquinas virtuales, ofreciendo una experiencia práctica sin poner en riesgo equipos o redes reales</a>.
                    </p>
                </div>
                
                <div class="pillar">
                    <div class="pillar-icon">∞</div>
                    <h3 class="pillar-title">Acceso</h3>
                    <p class="pillar-description">
                       Accede gratuitamente a una plataforma de aprendizaje en ciberseguridad sin ningún tipo de límite, donde podrás explorar ciberataques, analizar amenazas reales y practicar en entornos sandbox con máquinas virtuales sin restricciones de uso</a>.
                    </p>
                </div>
            </div>
            
            <div class="philosophy-particles" id="particles">
            </div>
        </div>
    </section>
    <section class="skills-section" id="sandbox">
        <div class="skills-container">
            <div class="section-header">
                <h2 class="section-title">Sandbox</h2>
                <p class="section-subtitle">Entorno controlado en el que podras probas el funcionamiento de los distintos ataques informáticos y aprender sobre ellos:</p>
            </div>
            
            <div class="skill-categories">
                <div class="category-tab active" data-category="all">Todos</div>
                <div class="category-tab" data-category="AAA">Ingeniería Social y Fraude de Identidad</div>
                <div class="category-tab" data-category="BBB">Software Malicioso (Malware)</div>
                <div class="category-tab" data-category="CCC">Ataques de Autenticación y Credenciales</div>
                <div class="category-tab" data-category="DDD">Ataques a la Infraestructura y Red</div>
                <div class="category-tab" data-category="GGG">Vulnerabilidades de Aplicaciones Web y API</div>
                <div class="category-tab" data-category="EEE">Ataques a la Cadena de Suministro (Supply Chain)</div>
                <div class="category-tab" data-category="FFF">Amenazas Emergentes: Cloud e IoT</div>
            </div>

            <div class="skills-hexagon-grid" id="skillsGrid">
            </div>
        </div>
    </section>

    <section class="contact-section" id="info">
        <div class="section-header">
            <h2 class="section-title">Continua con tu aprendizaje</h2>
            <p class="section-subtitle">Quieres informarte más sobre la CiberSeguridad?. Estos son los sitios que te recomendamos</p>
        </div>
        
        <div class="contact-container">
            <div class="contact-info">
                <a href="https://www.incibe.es/incibe" target="_blank" class="info-item">
                    <div class="info-icon">🔐</div>
                    <div class="info-text">
                        <h4>INCIBE</h4>
                        <p>Es el organismo público de España que promueve la ciberseguridad.</p>
                    </div>
                </a>
                
                <a href="https://hs.hackthebox.com/" target="_blank" class="info-item">
                    <div class="info-icon">👾</div>
                    <div class="info-text">
                        <h4>Hack The Box</h4>
                        <p>Es una plataforma de aprendizaje de ciberseguridad que ofrece máquinas virtuales para practicar técnicas de hacking.</p>
                    </div>
                </a>
                
                <a href="https://www.enisa.europa.eu/" target="_blank" class="info-item">
                    <div class="info-icon">🫆</div>
                    <div class="info-text">
                        <h4>Cybersecurity and Infrastructure Security Agency (ENISA)</h4>
                        <p>Es la agencia de la Unión Europea encargada de fortalecer la ciberseguridad y apoyar a los Estados miembros en la protección digital.</p>
                    </div>
                </a>
                
                <a href="https://www.aepd.es/" target="_blank" class="info-item">
                    <div class="info-icon">📖</div>
                    <div class="info-text">
                        <h4>Agencia Española de Protección de Datos (AEPD)</h4>
                        <p>Es la autoridad pública independiente en España encargada de velar por la privacidad y la protección de los datos personales de las personas y garantizar el cumplimiento de la normativa de protección de datos.</p>
                    </div>
                </a>
            </div>
            
            <form class="contact-form" id="contactForm">
                    <div class="info-text">
                        <h4>Por cierto...</h4>                       
                        <p>La ciberseguridad comienza con el conocimiento. Mantenerse informado sobre las amenazas digitales ayuda a comprender los riesgos en internet y adoptar hábitos que protejan la información personal. Navegar de forma segura implica prevenir riesgos y contribuir a un entorno digital más seguro para todos.</p>
                       <br></br>
                       <img src="images/security2.png" alt="Ataque">
                    </div>
            </form>
        </div>
    </section>
<script src="JS.js"></script>
</body>
</html>

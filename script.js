// Portfolio JavaScript - Marco David Toledo Canna
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Header scroll effect
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link
    const sections = document.querySelectorAll('section[id]');
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + header.offsetHeight + 50;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animateElements = document.querySelectorAll('.animate-on-scroll, .skill-card, .project-card, .experience-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Typing effect for hero section
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing effect after loading
    setTimeout(() => {
        const heroTitle = document.querySelector('#home h1 .text-accent');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        }
    }, 1500);

    // Force PDF download functionality
    function forceDownloadPDF(url, filename) {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(link.href);
            })
            .catch(error => {
                console.error('Error downloading PDF:', error);
                // Fallback to direct link
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    }

    // Add event listeners to all CV download links
    const cvLinks = document.querySelectorAll('a[href*="CV_Marco_David_Toledo_Canna.pdf"]');
    cvLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            const filename = 'CV_Marco_David_Toledo_Canna.pdf';
            forceDownloadPDF(url, filename);
        });
    });

    // Enhanced background animations
    function createFloatingElements() {
        const hero = document.getElementById('home');
        const particlesContainer = hero.querySelector('.absolute.inset-0.overflow-hidden');
        
        // Create additional animated elements
        const elements = [
            { content: '< >', class: 'text-accent/20 text-lg' },
            { content: '{ }', class: 'text-white/10 text-sm' },
            { content: 'λ', class: 'text-blue-400/20 text-xl' },
            { content: '→', class: 'text-green-400/20 text-lg' },
            { content: '∞', class: 'text-purple-400/20 text-lg' },
            { content: '#', class: 'text-accent/15 text-sm' },
        ];

        elements.forEach((elem, index) => {
            const div = document.createElement('div');
            div.innerHTML = elem.content;
            div.className = `absolute ${elem.class} animate-float-slow pointer-events-none`;
            div.style.top = Math.random() * 80 + 10 + '%';
            div.style.left = Math.random() * 80 + 10 + '%';
            div.style.animationDelay = Math.random() * 3 + 's';
            div.style.animationDuration = (Math.random() * 3 + 4) + 's';
            particlesContainer.appendChild(div);
        });

        // Create moving particles
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute rounded-full animate-float opacity-40 pointer-events-none';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = i % 2 === 0 ? '#38BDF8' : '#ffffff';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Initialize floating elements
    setTimeout(createFloatingElements, 1000);

    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Project card 3D hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                // Show success message
                showNotification('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-600' : 
            type === 'error' ? 'bg-red-600' : 
            'bg-blue-600'
        } text-white`;
        
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fa-solid fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'} mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Slide in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(full)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.particle');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Scroll progress indicator
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
    }

    window.addEventListener('scroll', updateScrollProgress);

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });

    // Theme toggle (if needed in the future)
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Performance optimization - Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavLink();
        updateScrollProgress();
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // Analytics and tracking (placeholder)
    function trackEvent(eventName, eventData = {}) {
        // Implement analytics tracking here
        console.log('Event tracked:', eventName, eventData);
    }

    // Track page view
    trackEvent('page_view', {
        page: window.location.pathname,
        timestamp: new Date().toISOString()
    });

    // Track section views
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackEvent('section_view', {
                    section: entry.target.id,
                    timestamp: new Date().toISOString()
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => sectionObserver.observe(section));

    // Add click tracking to important elements
    document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"], a[href^="https://github.com"], a[href^="https://linkedin.com"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('external_link_click', {
                url: this.href,
                text: this.textContent.trim(),
                timestamp: new Date().toISOString()
            });
        });
    });

    // Console easter egg
    console.log(`
    ╔══════════════════════════════════════════════╗
    ║          Marco David Toledo Canna            ║
    ║            Full Stack Developer              ║
    ║                                              ║
    ║   📧 marcodaviddtc@gmail.com                ║
    ║   📱 +591 67733399                          ║
    ║   💼 LinkedIn: marco-david-toledo-canna...  ║
    ║   🐙 GitHub: marcodavidd020                 ║
    ║                                              ║
    ║   Especializado en Laravel, NestJS, Flutter ║
    ║         ¡Hablemos de tu próximo proyecto!   ║
    ╚══════════════════════════════════════════════╝
    `);

    console.log('🚀 Portfolio loaded successfully! Thanks for checking the console 😄');
});

// Service Worker removed - not needed for this portfolio

// Error handling
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // Could send to error tracking service
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

// Internationalization System
const translations = {
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_about: "Sobre Mí", 
        nav_experience: "Experiencia",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        download_cv: "Descargar CV",
        
        // Hero section
        hero_greeting: "Hola, soy",
        hero_title: "Full Stack Developer",
        hero_description: "Desarrollador especializado en Laravel, NestJS y Flutter. Creo soluciones robustas, escalables y de alta calidad con enfoque en testing y buenas prácticas.",
        hero_view_projects: "Ver Proyectos",
        hero_view_skills: "Ver Habilidades",
        
        // About section
        about_title: "Sobre Mí",
        about_my_story: "Mi Historia",
        about_description_1: "Soy estudiante de Ingeniería Informática en la Universidad Autónoma Gabriel René Moreno, con fecha de graduación prevista para 2025. Mi pasión por el desarrollo full stack me ha llevado a especializarme en tecnologías modernas como Laravel, NestJS y Flutter.",
        about_description_2: "Me destaco en la resolución de problemas complejos y poseo una comunicación efectiva con equipos de desarrollo. Mi enfoque está en crear soluciones robustas, escalables y de alta calidad, con fuerte orientación a testing y buenas prácticas.",
        about_technical_skills: "Habilidades Técnicas",
        
        // Experience section
        experience_title: "Mi Experiencia",
        experience_fullstack: "Full Stack Developer",
        experience_present: "Presente",
        experience_independent: "Proyectos Independientes",
        experience_description: "Desarrollo de aplicaciones web completas con Laravel, sistemas de gestión empresarial, e-commerce y aplicaciones móviles con Flutter.",
        experience_education: "Licenciatura en Ingeniería Informática",
        experience_university: "Universidad Autónoma Gabriel René Moreno",
        experience_edu_description: "Santa Cruz, Bolivia. Especialización en desarrollo de software y tecnologías web modernas. Fecha de graduación prevista: 2025 (en proyecto final).",
        
        // Projects section
        projects_title: "Proyectos Destacados",
        
        // Contact section
        contact_title: "Trabajemos Juntos",
        contact_info: "Información de Contacto",
        contact_phone: "Teléfono",
        contact_email: "Email",
        contact_location: "Ubicación",
        contact_form_name: "Nombre",
        contact_form_email: "Email",
        contact_form_subject: "Asunto",
        contact_form_message: "Mensaje",
        contact_form_send: "Enviar Mensaje"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Me",
        nav_experience: "Experience", 
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        download_cv: "Download CV",
        
        // Hero section
        hero_greeting: "Hi, I'm",
        hero_title: "Full Stack Developer",
        hero_description: "Developer specialized in Laravel, NestJS and Flutter. I create robust, scalable and high-quality solutions with a focus on testing and best practices.",
        hero_view_projects: "View Projects",
        hero_view_skills: "View Skills",
        
        // About section
        about_title: "About Me",
        about_my_story: "My Story",
        about_description_1: "I am a Computer Engineering student at Universidad Autónoma Gabriel René Moreno, with an expected graduation date of 2025. My passion for full stack development has led me to specialize in modern technologies like Laravel, NestJS and Flutter.",
        about_description_2: "I excel at solving complex problems and possess effective communication with development teams. My focus is on creating robust, scalable and high-quality solutions, with a strong orientation to testing and best practices.",
        about_technical_skills: "Technical Skills",
        
        // Experience section
        experience_title: "My Experience",
        experience_fullstack: "Full Stack Developer",
        experience_present: "Present",
        experience_independent: "Independent Projects",
        experience_description: "Development of complete web applications with Laravel, business management systems, e-commerce and mobile applications with Flutter.",
        experience_education: "Bachelor's in Computer Engineering",
        experience_university: "Universidad Autónoma Gabriel René Moreno",
        experience_edu_description: "Santa Cruz, Bolivia. Specialization in software development and modern web technologies. Expected graduation date: 2025 (in final project).",
        
        // Projects section
        projects_title: "Featured Projects",
        
        // Contact section
        contact_title: "Let's Work Together",
        contact_info: "Contact Information",
        contact_phone: "Phone",
        contact_email: "Email", 
        contact_location: "Location",
        contact_form_name: "Name",
        contact_form_email: "Email",
        contact_form_subject: "Subject",
        contact_form_message: "Message",
        contact_form_send: "Send Message"
    }
};

let currentLanguage = localStorage.getItem('language') || 'es';

// Language functions
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update current language indicator
    document.getElementById('current-language').textContent = lang.toUpperCase();
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = lang;
}

// Mouse Cursor Animation
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let trailX = 0;
let trailY = 0;

function initCursorAnimation() {
    const cursor = document.getElementById('cursor');
    const cursorTrail = document.getElementById('cursor-trail');
    
    if (!cursor || !cursorTrail) return;
    
    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor position
    function animateCursor() {
        // Direct cursor movement (no delay)
        cursorX = mouseX;
        cursorY = mouseY;
        
        // Smooth trail movement only
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Add hover effects
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorTrail.style.transform = 'scale(1.2)';
            cursor.style.backgroundColor = '#38BDF8';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorTrail.style.transform = 'scale(1)';
            cursor.style.backgroundColor = '#38BDF8';
        });
    });
    
    // Hide cursor on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        cursorTrail.style.display = 'none';
    }
}

// Sparkle effect for special interactions
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle fixed pointer-events-none z-50';
    
    const colors = ['#FFD700', '#FF8C00', '#FF4500', '#FB68EE', '#FF69B4', '#00CED1'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 6 + 4;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 20;
    
    sparkle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px ${color};
    `;
    
    document.body.appendChild(sparkle);
    
    sparkle.animate([
        {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)'
        },
        {
            opacity: 0,
            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`
        }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
    });
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cursor animation
    initCursorAnimation();
    
    // Initialize language system
    updateLanguage(currentLanguage);
    
    // Language selector functionality
    const languageSelector = document.getElementById('language-selector');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (languageSelector && languageDropdown) {
        languageSelector.addEventListener('click', () => {
            languageDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageSelector.contains(e.target)) {
                languageDropdown.classList.add('hidden');
            }
        });
        
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                updateLanguage(lang);
                languageDropdown.classList.add('hidden');
                
                // Create sparkle effect on language change
                const rect = option.getBoundingClientRect();
                createSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
            });
        });
    }
    
    // Add sparkle effect to special buttons
    const specialButtons = document.querySelectorAll('[data-i18n="hero_view_projects"], [data-i18n="hero_view_skills"]');
    specialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createSparkle(
                        rect.left + Math.random() * rect.width,
                        rect.top + Math.random() * rect.height
                    );
                }, i * 100);
            }
        });
    });

    // ... existing code ...
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const loadingScreen = document.getElementById('loading-screen');
    const header = document.getElementById('header');

    // Hide loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
        
        if (!mobileMenu.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 10);
        } else {
            document.body.style.overflow = 'auto';
            mobileMenu.classList.remove('show');
        }
    });

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        });
    });

    // Smooth scroll for navigation links
    function setupSmoothScroll(links) {
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                // Handle external links (like skills.html)
                if (targetId.includes('.html')) {
                    // Let the browser handle external navigation
                    return;
                }
                
                if (targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const headerHeight = header.offsetHeight;
                        const targetPosition = targetSection.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    setupSmoothScroll(navLinks);
    setupSmoothScroll(mobileNavLinks);

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + header.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('text-accent'));
                mobileNavLinks.forEach(link => link.classList.remove('text-accent'));
                
                // Add active class to current section links
                const activeDesktopLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                const activeMobileLink = document.querySelector(`.mobile-nav-link[href="#${sectionId}"]`);
                
                if (activeDesktopLink) activeDesktopLink.classList.add('text-accent');
                if (activeMobileLink) activeMobileLink.classList.add('text-accent');
            }
        });
    }

    // Header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('bg-opacity-95');
            header.classList.add('backdrop-blur-md');
        } else {
            header.classList.remove('bg-opacity-95');
            header.classList.remove('backdrop-blur-md');
        }
        
        updateActiveNavLink();
    });

    // Initialize active nav link
    updateActiveNavLink();

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right').forEach(el => {
        observer.observe(el);
    });

    // Add floating animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('animate-fade-in');
    });

    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(56, 189, 248, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Enhanced hover effects for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(56, 189, 248, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Typewriter effect for hero text
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Contact form handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
            this.reset();
        });
    }

    // Force download PDF function
    function forceDownloadPDF(url, filename) {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const blobURL = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = blobURL;
                a.download = filename;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(blobURL);
                showNotification('CV descargado correctamente', 'success');
            })
            .catch(error => {
                console.error('Error downloading PDF:', error);
                showNotification('Error al descargar el CV', 'error');
            });
    }

    // Update CV download links to use force download
    document.querySelectorAll('a[download*="CV"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.href;
            const filename = this.getAttribute('download');
            forceDownloadPDF(url, filename);
        });
    });

    // Create floating background elements
    function createFloatingElements() {
        const hero = document.querySelector('#home');
        if (!hero) return;

        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element absolute rounded-full opacity-20';
            
            // Random properties
            const size = Math.random() * 6 + 2;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
            element.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                background: linear-gradient(45deg, #38BDF8, #60A5FA);
                animation: float ${animationDuration}s infinite ease-in-out;
                animation-delay: ${delay}s;
                top: 100%;
            `;
            
            hero.appendChild(element);
        }
    }

    createFloatingElements();

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-md z-50 transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-600' : 
            type === 'error' ? 'bg-red-600' : 
            'bg-blue-600'
        } text-white`;
        
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fa-solid fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'} mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Slide in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(full)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.particle');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Scroll progress indicator
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
    }

    window.addEventListener('scroll', updateScrollProgress);

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });

    // Theme toggle (if needed in the future)
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Performance optimization - Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavLink();
        updateScrollProgress();
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // Analytics and tracking (placeholder)
    function trackEvent(eventName, eventData = {}) {
        // Implement analytics tracking here
        console.log('Event tracked:', eventName, eventData);
    }

    // Track page view
    trackEvent('page_view', {
        page: window.location.pathname,
        timestamp: new Date().toISOString()
    });

    // Track section views
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackEvent('section_view', {
                    section: entry.target.id,
                    timestamp: new Date().toISOString()
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => sectionObserver.observe(section));

    // Add click tracking to important elements
    document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"], a[href^="https://github.com"], a[href^="https://linkedin.com"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('external_link_click', {
                url: this.href,
                text: this.textContent.trim(),
                timestamp: new Date().toISOString()
            });
        });
    });

    // Console easter egg
    console.log(`
    ╔══════════════════════════════════════════════╗
    ║          Marco David Toledo Canna            ║
    ║            Full Stack Developer              ║
    ║                                              ║
    ║   📧 marcodaviddtc@gmail.com                ║
    ║   📱 +591 67733399                          ║
    ║   💼 LinkedIn: marco-david-toledo-canna...  ║
    ║   🐙 GitHub: marcodavidd020                 ║
    ║                                              ║
    ║   Especializado en Laravel, NestJS, Flutter ║
    ║         ¡Hablemos de tu próximo proyecto!   ║
    ╚══════════════════════════════════════════════╝
    `);

    console.log('🚀 Portfolio loaded successfully! Thanks for checking the console 😄');
}); 
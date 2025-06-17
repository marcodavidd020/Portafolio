// Portfolio JavaScript - Marco David Toledo Canna
// ==============================================

// Complete translations object including skills.html
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
        
        // Contact section
        contact_title: "Trabajemos Juntos",
        contact_info: "Información de Contacto",
        contact_email: "Email",
        contact_phone: "Teléfono", 
        contact_location: "Ubicación",
        contact_form_name: "Nombre",
        contact_form_email: "Email",
        contact_form_subject: "Asunto",
        contact_form_message: "Mensaje",
        contact_form_send: "Enviar Mensaje",
        
        // Skills page translations
        professional_profile: "Perfil",
        professional: "Profesional",
        professional_experience: "Experiencia Profesional",
        job_fullstack: "Full Stack Developer",
        date_present: "2022 - Presente",
        independent_projects: "Proyectos Independientes",
        job_fullstack_desc: "Desarrollo de aplicaciones web completas con Laravel, sistemas de gestión empresarial, e-commerce y aplicaciones móviles con Flutter.",
        engineering_student: "Estudiante de Ingeniería",
        university_name: "Universidad Autónoma Gabriel René Moreno",
        engineering_desc: "Licenciatura en Ingeniería Informática. Especialización en desarrollo de software y arquitectura de sistemas.",
        key_skills: "Habilidades Clave",
        technical_skills: "Técnicas",
        soft_skills: "Blandas",
        fullstack_dev: "Desarrollo Full Stack",
        responsive_design: "Diseño Responsive",
        restful_apis: "APIs RESTful",
        db_architecture: "Arquitectura de BD",
        devops_docker: "DevOps & Docker",
        self_taught: "Autodidacta",
        problem_solving: "Resolución de Problemas",
        teamwork: "Trabajo en Equipo",
        effective_communication: "Comunicación Efectiva",
        agile_methodologies: "Metodologías Ágiles",
        education: "Educación",
        degree_title: "Licenciatura en Ingeniería Informática",
        degree_desc: "Santa Cruz, Bolivia. Especialización en desarrollo de software y tecnologías web modernas.",
        github_projects: "Proyectos en GitHub",
        technical_competencies: "Competencias",
        technical: "Técnicas"
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
        hero_description: "Developer specialized in Laravel, NestJS and Flutter. I create robust, scalable and high-quality solutions with focus on testing and best practices.",
        hero_view_projects: "View Projects",
        hero_view_skills: "View Skills",
        
        // Contact section
        contact_title: "Let's Work Together", 
        contact_info: "Contact Information",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Location",
        contact_form_name: "Name",
        contact_form_email: "Email", 
        contact_form_subject: "Subject",
        contact_form_message: "Message",
        contact_form_send: "Send Message",
        
        // Skills page translations
        professional_profile: "Professional",
        professional: "Profile",
        professional_experience: "Professional Experience",
        job_fullstack: "Full Stack Developer",
        date_present: "2022 - Present",
        independent_projects: "Independent Projects",
        job_fullstack_desc: "Development of complete web applications with Laravel, business management systems, e-commerce and mobile applications with Flutter.",
        engineering_student: "Engineering Student",
        university_name: "Universidad Autónoma Gabriel René Moreno",
        engineering_desc: "Bachelor's Degree in Computer Engineering. Specialization in software development and systems architecture.",
        key_skills: "Key Skills",
        technical_skills: "Technical",
        soft_skills: "Soft",
        fullstack_dev: "Full Stack Development",
        responsive_design: "Responsive Design",
        restful_apis: "RESTful APIs",
        db_architecture: "Database Architecture",
        devops_docker: "DevOps & Docker",
        self_taught: "Self-taught",
        problem_solving: "Problem Solving",
        teamwork: "Teamwork",
        effective_communication: "Effective Communication",
        agile_methodologies: "Agile Methodologies",
        education: "Education",
        degree_title: "Bachelor's Degree in Computer Engineering",
        degree_desc: "Santa Cruz, Bolivia. Specialization in software development and modern web technologies.",
        github_projects: "GitHub Projects",
        technical_competencies: "Technical",
        technical: "Competencies"
    }
};

let currentLanguage = localStorage.getItem('language') || 'es';

// Language functions
function updateLanguage(lang, showNotification = false) {
    console.log('🌍 Updating language to:', lang);
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update current language indicator
    const currentLangEl = document.getElementById('current-language');
    if (currentLangEl) {
        currentLangEl.textContent = lang.toUpperCase();
        console.log('🌍 Updated language indicator:', lang.toUpperCase());
    }
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = lang;
    
    // Show notification only when explicitly requested (user action)
    if (showNotification) {
        const message = lang === 'es' ? 'Idioma cambiado a Español' : 'Language changed to English';
        showNotificationMessage(message, 'success');
    }
    
    console.log('🌍 Language updated successfully to:', lang);
}

// Notification system
function showNotificationMessage(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-600 text-white' : 
        type === 'error' ? 'bg-red-600 text-white' : 
        'bg-blue-600 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
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

// Mouse Cursor Animation
function initCursorAnimation() {
    const cursor = document.getElementById('cursor');
    const cursorTrail = document.getElementById('cursor-trail');
    
    if (!cursor || !cursorTrail || window.innerWidth <= 768) return;
    
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, trailX = 0, trailY = 0;
    
    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor position
    function animateCursor() {
        cursorX = mouseX;
        cursorY = mouseY;
        
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
            cursorTrail.style.transform = 'scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorTrail.style.transform = 'scale(1)';
        });
    });
}

// Enhanced CSS for dropdown
function addDropdownStyles() {
    const style = document.createElement('style');
    style.textContent = `
        #language-dropdown {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        }
        
        #language-dropdown.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        #mobile-menu {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        
        #mobile-menu.show {
            opacity: 1;
            visibility: visible;
        }
        
        #language-selector.active i.fa-chevron-down {
            transform: rotate(180deg);
        }
        
        #language-selector i.fa-chevron-down {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM Loaded - Initializing Portfolio');
    
    // Add enhanced styles
    addDropdownStyles();
    
    // Initialize cursor animation
    initCursorAnimation();
    
    // Initialize language system (without notification)
    updateLanguage(currentLanguage, false);
    
    // Language selector functionality
    const languageSelector = document.getElementById('language-selector');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    console.log('🌍 Language elements:', {
        selector: !!languageSelector,
        dropdown: !!languageDropdown,
        options: languageOptions.length
    });
    
    if (languageSelector && languageDropdown) {
        // Toggle dropdown with smooth animation
        languageSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('🌍 Language selector clicked');
            
            if (languageDropdown.classList.contains('show')) {
                // Hide dropdown
                languageDropdown.classList.remove('show');
                languageSelector.classList.remove('active');
                setTimeout(() => {
                    languageDropdown.classList.add('hidden');
                }, 300);
                console.log('🌍 Language dropdown hidden');
            } else {
                // Show dropdown
                languageDropdown.classList.remove('hidden');
                languageSelector.classList.add('active');
                setTimeout(() => {
                    languageDropdown.classList.add('show');
                }, 10);
                console.log('🌍 Language dropdown shown');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageSelector.contains(e.target) && !languageDropdown.contains(e.target)) {
                if (languageDropdown.classList.contains('show')) {
                    languageDropdown.classList.remove('show');
                    languageSelector.classList.remove('active');
                    setTimeout(() => {
                        languageDropdown.classList.add('hidden');
                    }, 300);
                }
            }
        });
        
        // Handle language option clicks
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                console.log('🌍 Language option clicked:', lang);
                updateLanguage(lang, true);
                
                // Hide dropdown with animation
                languageDropdown.classList.remove('show');
                languageSelector.classList.remove('active');
                setTimeout(() => {
                    languageDropdown.classList.add('hidden');
                }, 300);
                
                // Create sparkle effect on language change
                const rect = option.getBoundingClientRect();
                createSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
            });
        });
    } else {
        console.log('⚠️ Language selector elements not found');
    }

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    console.log('📱 Mobile menu elements:', {
        button: !!mobileMenuBtn,
        menu: !!mobileMenu,
        links: mobileNavLinks.length
    });

    if (mobileMenuBtn && mobileMenu) {
        console.log('📱 Mobile menu functionality initialized');
        
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('📱 Mobile menu button clicked');
            
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                // Show mobile menu
                mobileMenu.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    mobileMenu.classList.add('show');
                }, 10);
                console.log('📱 Mobile menu opened');
            } else {
                // Hide mobile menu
                mobileMenu.classList.remove('show');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }, 300);
                console.log('📱 Mobile menu closed');
            }
        });

        // Close mobile menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('📱 Mobile nav link clicked');
                mobileMenu.classList.remove('show');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }, 300);
            });
        });

        // Close mobile menu when clicking outside
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('show');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        });
    } else {
        console.log('⚠️ Mobile menu elements not found');
    }

    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Hide loading screen after page loads
        window.addEventListener('load', function() {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
                header.classList.add('bg-opacity-95');
                header.classList.add('backdrop-blur-md');
            } else {
                header.classList.remove('scrolled');
                header.classList.remove('bg-opacity-95');
                header.classList.remove('backdrop-blur-md');
            }

            // Hide/show header on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
            
            // Update active nav links
            updateActiveNavLink();
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement && header) {
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
        if (!header || !sections.length) return;
        
        const scrollPos = window.scrollY + header.offsetHeight + 50;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            const correspondingMobileLink = document.querySelector(`.mobile-nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('text-accent');
                });
                document.querySelectorAll('.mobile-nav-link').forEach(link => {
                    link.classList.remove('text-accent');
                });
                
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('text-accent');
                }
                if (correspondingMobileLink) {
                    correspondingMobileLink.classList.add('text-accent');
                }
            }
        });
    }

    // Initial call
    updateActiveNavLink();

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

    // Contact form handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:marcodaviddtc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotificationMessage('Abriendo cliente de correo...', 'success');
            
            // Reset form
            this.reset();
        });
    }

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

    // Animate skill bars on scroll for skills page
    const skillBars = document.querySelectorAll('.skill-bar');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.style.width;
                    skillBar.style.width = '0%';
                    setTimeout(() => {
                        skillBar.style.width = width;
                    }, 300);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    console.log('✅ Marco Portfolio - JavaScript Loaded Successfully!');
}); 
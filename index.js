document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    const typed = new Typed('.typed-text', {
        strings: ['Data Scientist', 'Machine Learning Engineer', 'AI Enthusiast', 'Data Analyst'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 1000,
        loop: true
    });

    // Navigation scroll effect
    const navContainer = document.querySelector('.nav-container');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navContainer.classList.add('nav-scrolled');
        } else {
            navContainer.classList.remove('nav-scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Create particles for the background
    const particlesContainer = document.getElementById('particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 2;
        
        // Random color (blue, green or purple hues)
        const colors = ['rgba(37, 99, 235, 0.7)', 'rgba(74, 222, 128, 0.7)', 'rgba(139, 92, 246, 0.7)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        // Apply styles
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            background-color: ${color};
            animation-delay: ${delay}s;
        `;
        
        particlesContainer.appendChild(particle);
    }

    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    animateOnScroll(progressBars, function(el) {
        const width = el.getAttribute('data-width');
        el.style.width = width + '%';
    });

    // Elements to animate on scroll
    const fadeElements = document.querySelectorAll('.about-content, .skill-category, .project-card, .timeline-item, .certification-card');
    animateOnScroll(fadeElements, function(el) {
        el.classList.add('visible');
    });

    // Animation on scroll function
    function animateOnScroll(elements, callback) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(el => {
            observer.observe(el);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Form submission handling (prevent default behavior)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would add code to handle the form submission,
            // such as sending the data to a server or showing a success message
            alert('Form submitted! (This is a demo - no data was actually sent)');
        });
    }
});
/* ================================================
   NIHALSPROJECT – App JavaScript
   Handles progress bar animation, filtering, & interactions
   ================================================ */

// ===== PROGRESS BAR ANIMATION =====
document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.getElementById('progress-bar-fill');

    // Animate progress bar to 100% on load
    setTimeout(() => {
        progressFill.style.width = '100%';
    }, 300);

    // ===== NAV FILTERING =====
    const navLinks = document.querySelectorAll('.nav-link');
    const projectCards = document.querySelectorAll('.project-card');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.dataset.filter;

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Filter cards
            projectCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all') {
                    card.style.display = '';
                    card.style.animation = 'cardAppear 0.4s ease both';
                } else if (filter === 'featured' && category === 'featured') {
                    card.style.display = '';
                    card.style.animation = 'cardAppear 0.4s ease both';
                } else if (filter === 'featured' && category !== 'featured') {
                    card.style.display = 'none';
                } else {
                    card.style.display = '';
                }
            });
        });
    });

    // ===== CARD CLICK INTERACTION =====
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pulse animation on click
            card.style.transform = 'scale(0.97)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        });
    });

    // ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        observer.observe(card);
    });

    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('site-header');
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 10) {
            header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScrollY = scrollY;
    });

    // ===== MINI CLOCK IN RAMADAN CARD =====
    const miniClock = document.querySelector('.mini-clock');
    if (miniClock) {
        function updateMiniClock() {
            // Show a simulated countdown
            const now = new Date();
            const h = String(Math.floor(Math.random() * 6 + 1)).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            miniClock.textContent = `${h}:${m}:${s}`;
        }

        // Update every second for a live feel
        setInterval(updateMiniClock, 1000);
        updateMiniClock();
    }

    console.log('🚀 NihalsProject loaded successfully!');
});

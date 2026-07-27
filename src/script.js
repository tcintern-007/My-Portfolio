// ============================================
// THEME MANAGEMENT
// ============================================

const themes = ['dark', 'light', 'blue'];
let currentTheme = localStorage.getItem('theme') || 'dark';

// Apply theme
function setTheme(theme) {
    document.documentElement.className = theme;
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    // Update active button states
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// Initialize theme
setTheme(currentTheme);

// Theme button click handlers
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setTheme(btn.dataset.theme);
    });
});

// ============================================
// MOBILE MENU
// ============================================

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden', !isMenuOpen);
    hamburger.setAttribute('aria-expanded', isMenuOpen);
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (isMenuOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

// Close menu on link click
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', false);
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    });
});

// Close menu on resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
        isMenuOpen = false;
        mobileMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', false);
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navHeight = 70;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link-desktop');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = 70;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 20;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.toggle('text-accent', link.getAttribute('href') === `#${current}`);
        link.classList.toggle('text-theme-secondary', link.getAttribute('href') !== `#${current}`);
    });
});

console.log('🚀 Portfolio loaded successfully!');
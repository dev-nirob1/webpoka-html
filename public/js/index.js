let isMenuOpen = false;

const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
};

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    // navbar bg color change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolling');
        } else {
            navbar.classList.remove('scrolling');
        }
    });
    // hamburger menu toggle
    hamburger.addEventListener('click', () => {
        toggleMenu();
        if (isMenuOpen) {
            navLinks.classList.add('active');
            hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    // toggle menu on click of nav links 
    navLinks.childNodes.forEach(element => {
        element.addEventListener('click', () => {
            isMenuOpen = false;
        });
    });
});
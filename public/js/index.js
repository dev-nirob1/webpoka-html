let isMenuOpen = false;

const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
};

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    const popup = document.getElementById('popup');
    const openPopupBtns = document.querySelectorAll('.popup-btn');
    const popupCloseBtn = document.getElementById('popup-close');

    // popup toggle
    popup.style.display = 'none'; // hide popup on page load
    openPopupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.style.display = 'flex';
        });
    });

    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

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


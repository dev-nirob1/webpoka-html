/* ========================================================================
   WEBPOKA - Main JavaScript File
   ======================================================================== */

// ========================================================================
// GLOBAL VARIABLES
// ========================================================================
let isMenuOpen = false;

// ========================================================================
// UTILITY FUNCTIONS
// ========================================================================
const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
};

// ========================================================================
// NAVBAR SCROLL EFFECT
// ========================================================================
// Add background color to navbar when user scrolls down
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolling');
    } else {
        navbar.classList.remove('scrolling');
    }
});

// ========================================================================
// DOM CONTENT LOADED - Initialize all event listeners
// ========================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // ====================================================================
    // NAVBAR ELEMENTS
    // ====================================================================
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // ====================================================================
    // VIDEO POPUP MODAL
    // ====================================================================
    const popup = document.getElementById('popup');
    const openPopupBtns = document.querySelectorAll('.popup-btn');
    const popupCloseBtn = document.getElementById('popup-close');

    // Hide popup on page load
    popup.style.display = 'none';
    
    // Open popup - click on any popup button
    openPopupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.style.display = 'flex';
        });
    });

    // Close popup - click on close button
    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // ====================================================================
    // IMAGE VIEWER MODAL
    // ====================================================================
    const imageBtn = document.querySelectorAll('.image-popup');
    const imageCloseBtn = document.querySelector('.image-close');
    const modal = document.querySelector('.modal');

    // Hide image modal on page load
    modal.style.display = 'none';
    
    // Close image modal - click on close button
    imageCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Open image modal - click on any image popup button
    imageBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    // ====================================================================
    // ACCORDION TOGGLE
    // ====================================================================
    const accordionTitles = document.querySelectorAll('.accordion-title');
    
    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const body = title.nextElementSibling;
            body.classList.toggle('active');
        });
    });

    // ====================================================================
    // MOBILE MENU TOGGLE (Hamburger Menu)
    // ====================================================================
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

    // ====================================================================
    // CLOSE MOBILE MENU ON NAV LINK CLICK
    // ====================================================================
    navLinks.childNodes.forEach(element => {
        element.addEventListener('click', () => {
            isMenuOpen = false;
        });
    });

});


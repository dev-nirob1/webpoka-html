
// ========GLOBAL VARIABLES
let isMenuOpen = false;

// =====HAMBURGER FUNCTION
const toggleMenu = () => {
isMenuOpen = !isMenuOpen;
};

// NAVBAR SCROLL EFFECT (SAFE)
const navbar = document.querySelector('.navbar');

if (navbar) {
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolling');
} else {
navbar.classList.remove('scrolling');
}
});
}

document.addEventListener('DOMContentLoaded', () => {

// ================= NAVBAR =================
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

if (hamburger && navLinks) {
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

    // Close menu on link click 
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

// ================= VIDEO POPUP =================
const popup = document.getElementById('popup');
const openPopupBtns = document.querySelectorAll('.popup-btn');
const popupCloseBtn = document.getElementById('popup-close');

if (popup) {
    popup.style.display = 'none';
}

if (popup && popupCloseBtn) {
    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}

openPopupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (popup) popup.style.display = 'flex';
    });
});

// ================= IMAGE MODAL =================
const imageBtns = document.querySelectorAll('.image-popup');
const imageCloseBtn = document.querySelector('.image-close');
const modal = document.querySelector('.modal');

if (modal) {
    modal.style.display = 'none';
}

if (imageCloseBtn && modal) {
    imageCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

imageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (modal) modal.style.display = 'flex';
    });
});

// ================= ACCORDION =================
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const body = title.nextElementSibling;
        // console.log(body)
        if (body) {
            body.classList.toggle('active');
        }
    });
});
});

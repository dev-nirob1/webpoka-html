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

    const imageBtn = document.querySelectorAll('.image-popup');
    const imageCloseBtn = document.querySelector('.close-btn');
    const modal = document.querySelector('.modal');

    modal.style.display = 'none'; // hide image popup on page load
    const images = document.querySelectorAll('.image-popup');
    const modalImage = document.querySelector('.modal-details .image img');
    let currentImageIndex = 0;
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            currentImageIndex = index;
            updateModalImage();
        });
    });
    const updateModalImage = () => {
        modalImage.src = images[currentImageIndex].src;
    };
    document.querySelector('.btn-next').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateModalImage();
    });
    document.querySelector('.btn-prev').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateModalImage();
    });
    imageCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

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


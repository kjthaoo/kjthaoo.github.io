//toggling the nav
const toggleNav = document.getElementById('toggle-nav');
const navItems = document.getElementById('nav-items');

toggleNav.addEventListener('click', () => {
    if (navItems.style.display === 'flex') {
        navItems.style.display = 'none';
    } else {
        navItems.style.display = 'flex';
    }
});

//go back to the top function
document.getElementById('back-to-top').addEventListener('click', (e) => {
    e.preventDefault(); 

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
let slideIndex = 0;

const showSlides = () => {
    const slides = document.querySelectorAll(".mySlides");
    slides.forEach((slide) => slide.style.display = "none"); // Hide all slides

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
};

document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Initialize the slideshow when the page loads
});

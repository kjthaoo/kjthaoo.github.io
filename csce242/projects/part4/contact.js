//toggling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

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

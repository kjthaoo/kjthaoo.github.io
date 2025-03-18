document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    if (email) {
        document.getElementById("subscribe-message").innerHTML = "Thank you for subscribing!";
        document.getElementById("subscribe-message").classList.remove("hide-small");
        document.getElementById("email").value = "";
    }
});

document.getElementById('message-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('message-status').textContent = 'Your message has been sent successfully!';
        document.getElementById('message-status').style.color = 'green';
        document.getElementById('message-form').reset();
    } else {
        document.getElementById('message-status').textContent = 'Please fill in all fields.';
        document.getElementById('message-status').style.color = 'red';
    }
});

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

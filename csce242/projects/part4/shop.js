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

//the filters etc.
const materialFilter = document.getElementById('material');
const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price');
const productsGrid = document.getElementById('products-grid');
const productCards = document.querySelectorAll('.item-card');

const applyFilters = () => {
    const selectedMaterial = materialFilter.value;
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;

    productCards.forEach(card => {
        const material = card.getAttribute('data-material');
        const category = card.getAttribute('data-category');
        const price = parseFloat(card.getAttribute('data-price'));

        let shouldDisplay = true;

        //material
        if (selectedMaterial !== 'all' && selectedMaterial !== material) {
            shouldDisplay = false;
        }

        //category
        if (selectedCategory !== 'all' && selectedCategory !== category) {
            shouldDisplay = false;
        }

        //price
        if (selectedPrice === 'low-to-high' && price > 100) {
            shouldDisplay = false;
        }
        if (selectedPrice === 'high-to-low' && price < 100) {
            shouldDisplay = false;
        }

        card.style.display = shouldDisplay ? 'block' : 'none';
    });
};

materialFilter.addEventListener('change', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);

document.addEventListener('DOMContentLoaded', applyFilters);

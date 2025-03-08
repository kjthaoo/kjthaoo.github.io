const getProducts = async() => {
    const url = "https://kjthaoo.github.io/csce242/json/shop.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showProducts = async() => {
    const products = await getProducts();
    const productsSection = document.getElementById("products-section");
    
    products.forEach((product)=>{
        const section = document.createElement("section");
        productsSection.append(section);
        const h3 = document.createElement("h3");
        h3.innerHTML = product.name;
        section.append(h3);

        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `Price: ${product.price}`
        p.innerHTML = `Description: ${product.description}`
        p.innerHTML = `Rating: ${product.rating}`

        const ul = document.createElement("ul");
        section.append(ul);

        //loop through each review
        product.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.append(review);
            ul.append(li);
        });

    });
};

showProducts();
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

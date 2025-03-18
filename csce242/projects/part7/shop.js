const getProducts = async () => { 
    const url = "https://kjthaoo.github.io/csce242/json/shop.json";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.log("Error fetching products:", error);
    }
};

const showProducts = async () => {
    const products = await getProducts();
    
    if (Array.isArray(products.items)) {
        const productsSection = document.getElementById("products-section");

        // this clear previous products
        productsSection.innerHTML = '';

        products.items.forEach((product) => {
            const section = document.createElement("section");
            section.classList.add("item-card");

            // clikk on each item-card to take to product.html
            section.addEventListener("click", () => {
                window.location.href = `product.html?product=${encodeURIComponent(product.name)}`;
            });


            // item attributes for filterign!
            section.setAttribute('data-material', product.material);
            section.setAttribute('data-category', product.category);
            section.setAttribute('data-price', product.price);

            productsSection.append(section);

            const img = document.createElement("img");
            img.src = product.img_name;
            img.alt = product.name;
            img.classList.add("product-image");
            section.append(img);

            const h3 = document.createElement("h3");
            h3.innerHTML = product.name;
            section.append(h3);

            const p = document.createElement("p");
            p.innerHTML = `
                <strong>Price:</strong> $${product.price}<br>
                <strong>Material:</strong> ${product.material}<br>
                <strong>Category:</strong> ${product.category}
            `;
            section.append(p);
        });
    } else {
        console.error("Products.items is not an array", products);
    }
};

showProducts();

// toggling the nav
const toggleNav = document.getElementById('toggle-nav');
const navItems = document.getElementById('nav-items');

toggleNav.addEventListener('click', () => {
    if (navItems.style.display === 'flex') {
        navItems.style.display = 'none';
    } else {
        navItems.style.display = 'flex';
    }
});

// go back to the top function
document.getElementById('back-to-top').addEventListener('click', (e) => {
    e.preventDefault(); 

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// the filters
const materialFilter = document.getElementById('material');
const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price');
const productsSection = document.getElementById('products-section');

const applyFilters = () => {
    const selectedMaterial = materialFilter.value;
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;

    // the nodelists!
    const productCards = productsSection.querySelectorAll('.item-card');

    // price filters
    if (selectedPrice === 'low-to-high') {
        // since productcards are 'nodelists' we cant use the sort method on them! gotta use array.from or foreach
        const sortedCards = Array.from(productCards).sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            return priceA - priceB;
        });

        // Reattach sorted elements in the correct order
        sortedCards.forEach(card => productsSection.appendChild(card));
    } else if (selectedPrice === 'high-to-low') {
        const sortedCards = Array.from(productCards).sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            return priceB - priceA;
        });

        sortedCards.forEach(card => productsSection.appendChild(card));
    }

    // other filters
    productCards.forEach(card => {
        const material = card.getAttribute('data-material');
        const category = card.getAttribute('data-category');

        let shouldDisplay = true;

        // material
        if (selectedMaterial !== 'all' && selectedMaterial !== material) {
            shouldDisplay = false;
        }

        // category
        if (selectedCategory !== 'all' && selectedCategory !== category) {
            shouldDisplay = false;
        }

        card.style.display = shouldDisplay ? 'block' : 'none';
    });
};

materialFilter.addEventListener('change', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);

document.addEventListener('DOMContentLoaded', applyFilters);

const getProducts = async() => {
    const url = "https://kjthaoo.github.io/csce242/json/product.json";

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

/*
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("product");
    const productData = {
        "Gold Bracelet": {
            img: "images/bracelet1.jpg",
            price: "$49.99",
            description: "This is a gold bracelet."
        },
        "3D Jewelry": {
            img: "images/3d1.jpg",
            price: "$105.99",
            description: "This is a gold bracelet."

        },
        "Gold Starlight": {
            img: "images/ring2.jpg",
            price: "$59.99",
            description: "This is a gold bracelet."

        },
        "Powder Moon": {
            img: "images/secondchance.jpg",
            price: "$79.99",
            description: "This is a gold bracelet."

        },
        "Recycled Metal Jasmine": {
            img: "images/recycled1.jpg",
            price: "$69.99",
            description: "This is a gold bracelet."

        },
        "Silver Feathered": {
            img: "images/ring3.jpg",
            price: "$189.99",
            description: "This is a gold bracelet."

        },
        "Gold Twist": {
            img: "images/bracelet2.jpg",
            price: "$54.99",
            description: "This is a gold bracelet."

        },
        "Iridescent Bloom": {
            img: "images/repurposedradiance.jpg",
            price: "$40.99",
            description: "This is a gold bracelet."

        },
        "TerraLace": {
            img: "images/ecoluxe.jpg",
            price: "$30.99",
            description: "This is a gold bracelet."

        },
        "Ceramic Whisper": {
            img: "images/ceramic.jpg",
            price: "$20.00",
            description: "This is a gold bracelet."

        },
        "Timeless Green": {
            img: "images/clay.jpg",
            price: "$60.00",
            description: "This is a gold bracelet."

        },
        "Starlit Shards": {
            img: "images/glassbead.jpg",
            price: "$15.99",
            description: "This is a gold bracelet."

        },
        "Gossamer Garden": {
            img: "images/glassgarden.jpg",
            price: "$45.99",
            description: "This is a gold bracelet."

        },
        "Ethereal Links": {
            img: "images/linkluxe.jpg",
            price: "$66.00",
            description: "This is a gold bracelet."

        },
        "Moonlit Pearls": {
            img: "images/moonlitpearls.jpg",
            price: "$120.00",
            description: "This is a gold bracelet."

        }
    };

    if (productData[productName]) {
        const { img, price, description } = productData[productName];
        document.querySelector(".product-image").src = img;
        document.querySelector(".product-title").textContent = productName;
        document.querySelector(".product-price").textContent = price;
        document.querySelector(".product-description").textContent = description;
    }

    // Add to Cart functionality
    document.querySelector(".add-to-cart").addEventListener("click", () => {
        alert("Item added to cart!");
    });
});
*/

// toggles nav
const toggleNav = document.getElementById('toggle-nav');
const navItems = document.getElementById('nav-items');

toggleNav.addEventListener('click', () => {
    if (navItems.style.display === 'flex') {
        navItems.style.display = 'none';
    } else {
        navItems.style.display = 'flex';
    }
});

// go back to top btn
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault(); 

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

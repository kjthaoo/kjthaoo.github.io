document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("product");
    const productData = {
        "Gold Bracelet": {
            img: "images/bracelet1.jpg",
            price: "$49.99"
        },
        "3D Jewelry": {
            img: "images/3d1.jpg",
            price: "$105.99"
        },
        "Gold Starlight": {
            img: "images/ring2.jpg",
            price: "$59.99"
        },
        "Powder Moon": {
            img: "images/secondchance.jpg",
            price: "$79.99"
        },
        "Recycled Metal Jasmine": {
            img: "images/recycled1.jpg",
            price: "$69.99"
        },
        "Silver Feathered": {
            img: "images/ring3.jpg",
            price: "$189.99"
        },
        "Gold Twist": {
            img: "images/bracelet2.jpg",
            price: "$54.99"
        },
        "Iridescent Bloom": {
            img: "images/repurposedradiance.jpg",
            price: "$40.99"
        },
        "TerraLace": {
            img: "images/ecoluxe.jpg",
            price: "$30.99"
        },
        "Ceramic Whisper": {
            img: "images/ceramic.jpg",
            price: "$20.00"
        },
        "Timeless Green": {
            img: "images/clay.jpg",
            price: "$60.00"
        },
        "Starlit Shards": {
            img: "images/glassbead.jpg",
            price: "$15.99"
        },
        "Gossamer Garden": {
            img: "images/glassgarden.jpg",
            price: "$45.99"
        },
        "Ethereal Links": {
            img: "images/linkluxe.jpg",
            price: "$66.00"
        },
        "Moonlit Pearls": {
            img: "images/moonlitpearls.jpg",
            price: "$120.00"
        }
    };

    if (productData[productName]) {
        const { img, price } = productData[productName];
        document.querySelector(".product-image").src = img;
        document.querySelector(".product-title").textContent = productName;
        document.querySelector(".product-price").textContent = price;
    }

    // Add to Cart functionality
    document.querySelector(".add-to-cart").addEventListener("click", () => {
        alert("Item added to cart!");
    });
});

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

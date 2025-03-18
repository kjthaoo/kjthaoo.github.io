document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("product");
    const productData = {
        "Gold Bracelet": {
            img: "images/bracelet1.jpg",
            price: "$49.99",
            description: "Crafted from 100% recycled gold, this elegant bracelet offers a sleek, minimalist design that exudes sophistication. Its eco-conscious construction provides a touch of sustainable luxury, perfect for adding timeless elegance to any ensemble.",
            reviews: [
                { user: "Emma W.", rating: 5, comment: "Absolutely stunning! The quality is amazing, and I love that it's sustainable." },
                { user: "Sophie L.", rating: 4, comment: "Very elegant, but I wish it was a little more adjustable." },
                { user: "Jason T.", rating: 5, comment: "Bought this as a gift—my wife adores it!" }
            ]
        },
        "3D Jewelry": {
            img: "images/3d1.jpg",
            price: "$105.99",
            description: "Made using 3D printing technology and high-quality recycled materials, this ring features a bold, modern design that pushes the boundaries of traditional jewelry. A perfect fusion of innovation and sustainability, it's an eye-catching piece that blends eco-friendliness with elegance.",
            reviews: [
                { user: "Liam P.", rating: 5, comment: "The craftsmanship is incredible! Looks even better in person." },
                { user: "Olivia H.", rating: 4, comment: "Super unique design. It’s a conversation starter!" },
                { user: "Noah W.", rating: 3, comment: "Good quality, but the fit was a bit off for me." }
            ]
        },
        "Gold Starlight": {
            img: "images/ring2.jpg",
            price: "$59.99",
            description: "This beautiful gold ring is forged from recycled gold, offering a radiant, celestial design that captures the essence of starlight. A statement piece that combines luxury with sustainability, it’s perfect for those who appreciate eco-conscious elegance.",
            reviews: [
                { user: "Sophia J.", rating: 5, comment: "I feel like a queen wearing this! Perfect fit and shine." },
                { user: "Ben K.", rating: 4, comment: "Looks beautiful but slightly thinner than expected." },
                { user: "Ava M.", rating: 5, comment: "Shimmers beautifully in the light! Love it!" }
            ]
        },
        "Powder Moon": {
            img: "images/secondchance.jpg",
            price: "$79.99",
            description: "Inspired by the tranquil beauty of the moon, this ring is crafted from recycled gold and designed with intricate detailing. The soft glow and elegant shape reflect both celestial beauty and sustainable craftsmanship, making it a perfect choice for those seeking an eco-friendly yet refined accessory.",
            reviews: [
                { user: "Mia S.", rating: 5, comment: "Moon-inspired? YES! This is my new favorite ring!" },
                { user: "Lucas D.", rating: 4, comment: "Beautifully crafted, but took a while to arrive." },
                { user: "Zoe T.", rating: 5, comment: "Stunning piece! Super lightweight and comfy." }
            ]
        },
        "Recycled Metal Jasmine": {
            img: "images/recycled1.jpg",
            price: "$69.99",
            description: "The Recycled Metal Jasmine ring combines eco-friendly recycled metals with a delicate floral design, capturing the elegance of jasmine flowers. Its intricate details and sustainable materials make it a standout piece for those who value both nature and luxury.",
            reviews: [
                { user: "Ella B.", rating: 5, comment: "The floral design is so detailed, I love it!" },
                { user: "Daniel C.", rating: 3, comment: "Nice but a bit more delicate than I expected." },
                { user: "Grace Y.", rating: 4, comment: "Great ring, just wish it came in more sizes." }
            ]
        },
        "Silver Feathered": {
            img: "images/ring3.jpg",
            price: "$89.99",
            description: "Made from recycled silver, these feather-inspired earrings are lightweight and graceful, capturing the delicate beauty of nature. Their elegant design, combined with sustainable craftsmanship, adds a refined yet organic touch to your look.",
            reviews: [
                { user: "Henry P.", rating: 5, comment: "So light and comfortable! I barely feel them on." },
                { user: "Isabella R.", rating: 4, comment: "Elegant, but I wish they were slightly bigger." }
            ]
        },
        "Gold Twist": {
            img: "images/bracelet2.jpg",
            price: "$54.99",
            description: "Crafted from recycled gold, this necklace features a sophisticated twist design that symbolizes the perfect blend of nature and elegance. Its timeless appeal, combined with sustainable materials, makes it an ideal accessory for eco-conscious fashion lovers.",
            reviews: [
                { user: "Oliver J.", rating: 5, comment: "Great quality and a beautiful design!" },
                { user: "Charlotte N.", rating: 5, comment: "My new go-to necklace, so simple yet elegant." }
            ]
        },
        "Iridescent Bloom": {
            img: "images/repurposedradiance.jpg",
            price: "$40.99",
            description: "These resin earrings are made from repurposed materials and feature a stunning iridescent bloom design. Their soft, shimmering colors and eco-friendly construction create a balance of playful elegance and environmental responsibility, perfect for those who appreciate beauty with a cause.",
            reviews: [
                { user: "Lily W.", rating: 5, comment: "Super vibrant and lightweight!" },
                { user: "Ethan Z.", rating: 4, comment: "Love the color shift, so unique!" }
            ]
        },
        "TerraLace": {
            img: "images/ecoluxe.jpg",
            price: "$30.99",
            description: "Made from recycled materials, these earrings feature an intricate lace-like design, inspired by the beauty of nature. The sustainable craftsmanship and elegant detailing make them a refined yet eco-conscious accessory for any occasion.",
            reviews: [
                { user: "Harper F.", rating: 5, comment: "Perfect for any outfit, I’m obsessed!" }
            ]
        },
        "Ceramic Whisper": {
            img: "images/ceramic.jpg",
            price: "$20.00",
            description: "Handcrafted from recycled ceramic, these earrings offer a minimalist and serene aesthetic. Their smooth, simple design is perfect for those who appreciate the elegance of sustainable materials and the beauty of subtle craftsmanship.",
            reviews: [
                { user: "David H.", rating: 5, comment: "Love the minimalist design!" }
            ]
        },
        "Timeless Green": {
            img: "images/clay.jpg",
            price: "$60.00",
            description: "These clay earrings are made from recycled clay, offering a timeless and rich green hue. The earthy tones and sustainable construction create a perfect blend of natural elegance and eco-friendly style, ideal for those who value sustainable luxury.",
            reviews: [
                { user: "Madison E.", rating: 5, comment: "Love the earthy tone, so elegant." }
            ]
        },
        "Starlit Shards": {
            img: "images/glassbead.jpg",
            price: "$15.99",
            description: "Sparkling like starlight, these glass bead earrings are crafted from recycled glass, offering an elegant touch of shimmer. The sustainable craftsmanship adds a unique charm, making them the perfect accessory for those who value beauty and eco-consciousness.",
            reviews: [
                { user: "Logan B.", rating: 4, comment: "Super pretty but a little fragile." }
            ]
        },
        "Gossamer Garden": {
            img: "images/glassgarden.jpg",
            price: "$45.99",
            description: "Inspired by nature, these delicate glass earrings are made from recycled glass materials. Their intricate design, reminiscent of a blooming garden, exudes elegance while making a statement for eco-friendly fashion.",
            reviews: [
                { user: "Stella K.", rating: 5, comment: "So intricate and unique!" }
            ]
        },
        "Ethereal Links": {
            img: "images/linkluxe.jpg",
            price: "$66.00",
            description: "Crafted from recycled gold, this bracelet features an elegant link design that flows gracefully around the wrist. Its timeless elegance is paired with sustainability, making it an ideal choice for those seeking eco-conscious luxury.",
            reviews: [
                { user: "Sebastian Q.", rating: 5, comment: "A classic! Pairs well with everything." }
            ]
        },
        "Moonlit Pearls": {
            img: "images/moonlitpearls.jpg",
            price: "$120.00",
            description: "These stunning pearl earrings are made using sustainably sourced pearls and recycled materials. The soft, moonlit glow of the pearls paired with the elegant design makes them a perfect eco-friendly accessory that radiates timeless luxury.",
            reviews: [
                { user: "Aurora D.", rating: 5, comment: "Pearls are my weakness, and these are stunning!" }
            ]
        }
    };

    if (productData[productName]) {
        const { img, price, description, reviews } = productData[productName];
        document.querySelector(".product-image").src = img;
        document.querySelector(".product-title").textContent = productName;
        document.querySelector(".product-price").textContent = price;
        document.querySelector(".product-description").textContent = description;

        const reviewsContainer = document.getElementById("reviews-container");
        reviews.forEach(review => {
            addReviewToPage(review.user, review.rating, review.comment);
        });
    }

    function addReviewToPage(user, rating, comment) {
        const reviewElement = document.createElement("p");
        reviewElement.innerHTML = `<strong>${user}</strong> (${rating}⭐): ${comment}`;
        document.getElementById("reviews-container").appendChild(reviewElement);
    }

    document.getElementById("review-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const userName = document.getElementById("reviewer-name").value.trim();
        const rating = document.getElementById("review-rating").value;
        const comment = document.getElementById("review-comment").value.trim();
        
        if (userName && rating && comment) {
            addReviewToPage(userName, rating, comment);
            document.getElementById("review-form").reset();
        } else {
            alert("Please fill in all fields before submitting your review.");
        }
    });

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

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('Element with ID "back-to-top" not found!');
    }
});

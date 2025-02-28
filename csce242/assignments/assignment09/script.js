class Pizza {
    constructor(name, image, price, size, crust, ingredients) {
        this.name = name;
        this.image = `images/${image}`;
        this.price = price;
        this.size = size;
        this.crust = crust;
        this.ingredients = ingredients;
    }

    getSection = () => `
        <div class="pizza-box" data-name="${this.name}">
            <h3>${this.name}</h3>
            <img src="${this.image}" class="pizza-img" alt="${this.name}">
        </div>
    `;
}

const pizzas = [
    new Pizza("Jalapeno Pizza", "jalapenos.jpg", 12.99, "Large", "Thin Crust", "Pepperoni, Mozzarella, Tomato Sauce"),
    new Pizza("Mushroom Pizza", "mushroom.jpg", 10.99, "Medium", "Neapolitan", "Tomatoes, Mozzarella, Basil, Olive Oil"),
    new Pizza("Olive Pizza", "olives.jpg", 13.99, "Large", "Stuffed Crust", "Chicken, BBQ Sauce, Red Onions, Cilantro"),
    new Pizza("Pepperoni Pizza", "pepperoni.jpg", 11.99, "Small", "Hand Tossed", "Bell Peppers, Olives, Mushrooms, Onions"),
    new Pizza("Meat Lovers", "sausage.jpg", 14.99, "Extra Large", "Pan Crust", "Pepperoni, Sausage, Ham, Bacon"),
];

const pizzaContainer = document.getElementById("pizza-container");
pizzaContainer.innerHTML = pizzas.map(pizza => pizza.getSection()).join("");

const modal = document.getElementById("pizza-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalPrice = document.getElementById("modal-price");
const modalSize = document.getElementById("modal-size");
const modalCrust = document.getElementById("modal-crust");
const modalIngredients = document.getElementById("modal-ingredients");
const closeModal = document.getElementById("close-modal");

const openModal = (pizzaName) => {
    const pizza = pizzas.find(p => p.name === pizzaName);
    if (pizza) {
        modalTitle.textContent = pizza.name;
        modalImage.src = pizza.image;
        modalPrice.textContent = `$${pizza.price}`;
        modalSize.textContent = pizza.size;
        modalCrust.textContent = pizza.crust;
        modalIngredients.textContent = pizza.ingredients;
        modal.style.display = "block";
    }
};

closeModal.addEventListener("click", () => modal.style.display = "none");

pizzaContainer.addEventListener("click", (e) => {
    const pizzaBox = e.target.closest(".pizza-box");
    if (pizzaBox) {
        openModal(pizzaBox.dataset.name);
    }
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

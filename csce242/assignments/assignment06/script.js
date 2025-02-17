/*toggle function*/
const toggleMenu = () => {
    const menuItems = document.getElementById("exercises");
    const arrow = document.getElementById("toggle-arrow");
    const commandBox = document.getElementById("box1");
    const yogaBox = document.getElementById("box2");

    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
        arrow.innerText = "▲";
    } else {
        menuItems.style.display = "none";
        arrow.innerText = "▼";
        commandBox.style.display = "none";
        yogaBox.style.display = "none";
    }
}

const showExercise = (exercise) => {
    const commandBox = document.getElementById("box1");
    const yogaBox = document.getElementById("box2");
    const commandInput = document.querySelector("#box1 input[name='txt-command-name']");

    if (exercise === "exercise1") {
        commandBox.style.display = "flex";
        yogaBox.style.display = "none";
        commandInput.style.display = "block";
    } else if (exercise === "exercise2") {
        commandBox.style.display = "none";
        yogaBox.style.display = "flex";
        commandInput.style.display = "none";
    }
}


/*exercise1*/
const exerciseInput = () => {
    const command = document.getElementById("commandInput").value.toLowerCase();
    const imageContainer = document.getElementById("imageContainer");
    
    imageContainer.innerHTML = "";

    const images = {
        bike: "images/bike.jpg",
        car: "images/car.jpg",
        skateboard: "images/skateboard.jpg",
        scooter: "images/scooter.jpg"
    };

    if (images[command]) {
        const imgElement = document.createElement("img");
        imgElement.src = images[command];
        imgElement.alt = command;
        imgElement.style.width = "200px";
        imageContainer.appendChild(imgElement);
    }
};

document.getElementById("commandInput").addEventListener("input", exerciseInput);

document.getElementById("red-btn").addEventListener("click", () => {
    document.getElementById("heartshape").style.backgroundColor = "red";
});

document.getElementById("green-btn").addEventListener("click", () => {
    document.getElementById("heartshape").style.backgroundColor = "green";
});

document.getElementById("blue-btn").addEventListener("click", () => {
    document.getElementById("heartshape").style.backgroundColor = "blue";
});

const originalImg = document.getElementById("originalImg");
const yogaImg = document.getElementById("yogaImg");

/* toggle for main nav */
function toggleMenu() {
    const menuItems = document.getElementById("exercises");
    const arrow = document.getElementById("toggle-arrow");
    const commandBox = document.getElementById("box1");
    const yogaBox = document.getElementById("box2");

    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
        arrow.innerText = "▲";
    }else {
        menuItems.style.display = "none";
        arrow.innerText = "▼";
        commandBox.style.display = "none";
        yogaBox.styles.display = "none";
    }
}
/* exercise 1 and exercise 2 */
function showExercise(exercise) {
    const commandBox = document.getElementById("box1");
    const yogaBox = document.getElementById("box2");
    /* added the commandinput so the 2 boxes can only show when toggled */
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

/* 'Enter command' stuff */
function handleCommandInput(command) {
    const originalImg = document.getElementById("originalImg");

    command = command.toLowerCase();

    switch (command) {
        case "b":
            originalImg.src = "images/read.jpg";
            break;
        case "c":
            originalImg.src = "images/clown.jpg";
            break;
        case "p":
            originalImg.src = "images/birthday.jpg";
            break;
        case "r":
            originalImg.src = "images/rain.jpg";
            break;
        case "s":
            originalImg.src = "images/shovel.jpg";
            break;
        case "w":
            originalImg.src = "images/work.jpg";
            break;
        default:
            console.log("Invalid command");
    }
}

const commandInput = document.querySelector("input[name='txt-command-name']");
commandInput.addEventListener("input", function(event) {
    const command = this.value.trim();
    handleCommandInput(command);
});

/* 'Yoga Slide' stuff */
const imageSlider = document.getElementById("imageSlider");
imageSlider.addEventListener("input", function() {
    const sliderValue = parseInt(this.value);
    const yogaImg = document.getElementById("yogaImg");

    yogaImg.src = "images/yoga" + sliderValue + ".jpg";
});
   
        
//document.getElementById().onclick = ;
const yogaImages = document.querySelectorAll('#yogaImg');
const descriptions = document.querySelectorAll('.description');
const soccerBall = document.getElementById("soccerBall");
const ballContainer = document.getElementById('ball-container');
const startLink = document.getElementById("startLink");

let isMoving = false;
let position = 0;
let direction = 1;
let maxPosition = ballContainer.clientHeight - 50; //deepness an dhow it stays in the container
let ballInterval;


/* exercise 2 yogaimgs */
const showDescription = (description) => {
    console.log("shows description");
    description.style.display = "block";
};

for(let i = 0; i < yogaImages.length; i++) {
    const image = yogaImages[i];
    const description = descriptions[i];

    image.onclick = () => {
        console.log("Image clicked");
        showDescription(description);
    };
}

/* toggling between exercise 1 and exercise 2 */
const showExercise = (exercise) =>{
    const commandBox = document.getElementById("box1");
    const yogaBox = document.getElementById("box2");
    
    if (exercise === "exercise1") {
        commandBox.style.display = "flex";
        yogaBox.style.display = "none";
    } else if (exercise === "exercise2") {
        commandBox.style.display = "none";
        yogaBox.style.display = "flex";
    }
};

const moveBall = () => {
    position += direction;

    if(position >= maxPosition) {
        direction = -1;
    }
    if(position <= 0) {
        direction = 1;
    }
    soccerBall.style.top = position + "px";
    //soccerBall.style.top = Math.min(position, maxPosition) + "px";

};

const toggleMovement = () => {
    if(isMoving) {
        clearInterval(ballInterval);
        startLink.textContent = "start";
    }else {
        ballInterval = setInterval(moveBall, 10);
        startLink.textContent = "stop";
    }
    isMoving = !isMoving;
};

startLink.addEventListener("click", toggleMovement);
//document.getElementById("isMoving").onclick = toggleMovement;
//document.getElementById("exercise").onclick = showExercise;
//document.getElementById("yogaImg").onclick = showDescription;

setInterval(moveBall, 10); //speed



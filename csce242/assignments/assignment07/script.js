const drawBtn = document.getElementById('draw-btn');
const climbBtn = document.getElementById('climb-btn');
const stairs = document.getElementById('stairs');
const imageContainer = document.getElementById('imageContainer');

const stickFigureLeft = 'images/left.png'; 
const stickFigureRight = 'images/right.png';

const drawStairs = () => {
    stairs.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const stair = document.createElement('div');
        stair.classList.add('stair');
        stair.style.top = `${i * 30}px`;
        stairs.appendChild(stair);
    }

    climbBtn.style.display = 'block';
};

let step = 0;
let stickFigure;
let climbInterval;

const climbStairs = () => {
    if (!stickFigure) {
        stickFigure = document.createElement('img');
        stickFigure.src = stickFigureLeft;
        stickFigure.style.position = 'absolute';
        stickFigure.style.bottom = '0px';
        imageContainer.appendChild(stickFigure);
        stickFigure.style.left = '50%';
        stickFigure.style.bottom = '0px';
        stickFigure.style.transform = 'translateX(-50%)';
        stairs.appendChild(stickFigure);
    }

    climbInterval = setInterval(() => {
        if (step < 10) {
            stickFigure.style.bottom = `${step * 30}px`;
            stickFigure.src = step % 2 === 0 ? stickFigureLeft : stickFigureRight;
            step++;
        } else {
            clearInterval(climbInterval);
        }
    }, 500);
};

drawBtn.addEventListener('click', () => {
    drawStairs();
});

climbBtn.addEventListener('click', () => {
    if (step === 10) {
        step = 0;
        stickFigure.style.bottom = '0px';
    }
    climbStairs();
});

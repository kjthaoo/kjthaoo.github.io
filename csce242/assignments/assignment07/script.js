const drawBtn = document.getElementById('draw-btn');
const climbBtn = document.getElementById('climb-btn');
const stairs = document.getElementById('stairs');
const imageContainer = document.getElementById('imageContainer');

const stickFigureLeft = 'left.png';
const stickFigureRight = 'right.png';

//the stairs drawn function
const drawStairs = () => {
    stairs.innerHTML = ''; 

    //first the for loop to draw the ladder!
    for (let i = 0; i < 10; i++) {
        const stair = document.createElement('div');
        stair.classList.add('stair');
        stair.style.top = `${i * 30}px`;
        stairs.appendChild(stair);
    }

    //climb button after drawing the stairs
    climbBtn.style.display = 'block';
};

//climbing functi
const climbStairs = () => {
    let step = 0;
    let climbing = true;

    const stickFigure = document.createElement('img');
    stickFigure.src = stickFigureLeft;
    imageContainer.appendChild(stickFigure);

    //moving
    const climbInterval = setInterval(() => {
        if (step < 10 && climbing) {
            stickFigure.style.bottom = `${step * 30}px`;

            //left and right image swithc
            stickFigure.src = step % 2 === 0 ? stickFigureLeft : stickFigureRight;

            step++;

            //then stops
            if (step === 10) {
                clearInterval(climbInterval);
                climbing = false;
            }
        }
    }, 500);
};

drawBtn.addEventListener('click', () => {
    drawStairs();
});

climbBtn.addEventListener('click', () => {
    climbStairs();
});

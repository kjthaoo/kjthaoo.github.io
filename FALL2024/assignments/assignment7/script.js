const myImg = document.getElementById("myImg");
const myImg2 = document.getElementById("myImg2");
const rotationSlider = document.getElementById("rotationSlider");
const box3 = document.getElementById("box3");

let isFirstImage = true;

rotationSlider.addEventListener("input", function() {
    const rotationValue = this.value;
    myImg2.style.transform = `rotate(${rotationValue}deg)`; //have to use the BACKTICKS OMG!!! not apostrophe ' 
});

myImg.addEventListener("click", function() {
    if (isFirstImage) {
        myImg.src = "images/bluecupcake2.jpg";
    } else {
        myImg.src = "images/bluecupcake.jpg";
    }
    isFirstImage = !isFirstImage;
});

box3.addEventListener("click", function() {
    const starImg =document.createElement("img");
    starImg.src = "images/star2.png";
    starImg.classList.add("star-image");

    this.appendChild(starImg);
});

//should i have the document.getElementID stuff here?
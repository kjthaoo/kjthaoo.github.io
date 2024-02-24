const slideForward = () => {
   /* at the end of the list of images */
   if (getCurrentImage().nextElementSibling == null) { //does the current have a sibling if not 
        slide(document.querySelector("#preview img"));
   } else {
        slide(getCurrentImage().nextElementSibling); //get the next sibling 
   }

};

const slideBackward = () => {
    /* at the beginning of the list of images */
    if (getCurrentImage().nextElementSibling == null) {
    slide(document.querySelector("#preview :last-child"));
   } else {
    slide(getCurrentImage().previousElementSibling);
   }

}

/* a generic function */
const slide = (nextImage) => {
    const currentImage = document.querySelector("#preview :not(hidden)"); //the 'child' that is not hidden
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hiddem");
};

const getCurrentImage = () => {
    return document.querySelector("#preview :not(hiddie)");
}

document.getElementById("forward-arrow").onclick = slideForward;
document.getElementById("backward-arrow").onclick = slideBackward;

document.querySelectorAll("#thumbs img").forEach((img, index) => {
    img.onclick = () => {
        slide(document.querySelector(`#preview :nth-child($(index+1))`));
    };
});
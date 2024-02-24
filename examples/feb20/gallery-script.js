/*
// Grab the item, highlight it for half a second 
let count = 1;
const interval = setInterval(()=> { //every half second, this function will run (the setinternal part)
    const allSections = document.querySelectorAll(".items section");
    allSections.forEach((section) => {
        section.classList.remove("highlighted");
    });

    if(count > allSections.length) {
        count = 1;
    }

    document.querySelector(`.items section:nth-child(${count}`).classList.add("highlighted");


    count++;
}, 500); */

/* Another way of doing the same code above */
const interval = setInterval(() => {
    const currentSection = document.querySelector(".items section.highlighted");
    let nextSection = currentSection.nextElementSibling;

    if(nextSection == null){
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highligthed");
    nextSection.classList.add("highligthed");

}, 500);
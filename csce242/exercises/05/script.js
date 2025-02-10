document.getElementById("btn-click-me").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "good bye";
    messageP.classList.toggle("sad");
}

//happy
document.getElementById("btn-happy").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden"); 
    displayP.classList.add("happy"); //displays the .happy
    displayP.innerHTML = "Good Times";

}

document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("sad");
    displayP.innerHTML = "Sad Times";

    document.getElementById("btn-clear").onclick = () => {
        document.getElementById("display").classList.add("hidden");
    }
}
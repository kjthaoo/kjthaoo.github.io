// how a current function looks like: () => {
   // }
//do stuff when buttton clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML = "hi kelly";
};

/*
document.getElementById("btn-color").onclick = () => {
    console.log("hello");
    document.getElementById("message").innerHTML = "Goodbye";
}
*/

//change color
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Goodbye";
    //messageP.classList.add("sad"); // adding the .sad css to our button to change the color
    messageP.classList.toggle("sad");

}

/*
    int num = 5;

    decades ago: (dont use var! It has scoping issues - think of it as a global variable, we shouldnt use global variables all the time)
    we used: 
    var num = 5;
    var username="son";

    New - use 'let' instead: //using let when i is changing (only time to use when terminal tells you why your using a const for a non-const)
    let num = 5;
    let username="son";
    const count = 10 //ealways use const, everything is constant unless it changes
    
*/

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

//key down
document.getElementById("txt-emotion").onkeyup = (event) => { // this line evokes the element
    //console.log("WOW");
    //const emotion = document.getElementById("txt-emotion").value;

    //can do this:
    //const emotion = event.curremtTarget.value; //event is the 'keydown' what you did
    //console.log("emotion");

    //or can do this:
    document.getElementById("emotional-message").innerHTML =
    "you are feeling " + event.currentTarget.value;


}

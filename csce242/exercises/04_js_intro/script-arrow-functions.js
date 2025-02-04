/*
alert("hello"); /*popup should appear
console.log("hi me"); //shows in console


//the function (old school way)
function doStuff(){
    console.log("doing stuff");
}
*/

//Version 1 where we learned arrow functions:
//the function: (new school way) - first parenthesis is where you put the parameters then after we have a n arrow, to indicate where the body of that function is.
const doStuff = () => {
    console.log("doing stuff");
}

//do stuff when buttton clicked - think of everything as parents and child objects
document.getElementById("btn-click-me").onclick = doStuff; //now need a function (which we write in the first part)
// () parenthesis means 'now'
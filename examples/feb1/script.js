//alert("hello");
//console.log("hello");

let pos = 0;

const colorSquare = () => {
  //  console.log("yay made it!"); //this can be how we test it!
  document.getElementById("square").classList.add("rainbow"); 
  //document.querySelection("#square");
};

const moveDown = () => {
   // console.log("down");
   pos += 10; //to have it keep going down every btm press
   const root = document.querySelector(":root"); //note: querySelector takes the first element while quertSelectionAll is an array and will access all elements i think
   root.style.setProperty("--square-top", pos + "px");
};

const addCircle = () => {
    const color = document.getElementById('txt-color').value;
  //const root = document.querySelector(":root");
  //console.log("adding a circle");
    const playground = document.getElementById("circle-playground");
  //playground.innerHTML = 'test'; //if this was a +=, it would output as much as you want inthe playground
  //playground.innerHTML += "<section class> circle></seciton>";
  const ball = document.createElement("section");
  ball.classList.add("circle");
  playground.append(ball); //so the ball stays inside the playround
  ball.style.background = color; //this adds different color circles

};

document.getElementById("btm-color").onclick = colorSquare;
document.getElementById("btm-move-down").onclick = moveDown;
document.getElementById("btm-add-circle").onclick = addCircle;

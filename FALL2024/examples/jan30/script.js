const doStuff = () =>{
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Kelly";
   //messageP.className = "special"; (this is wrong because it overides the arrays like "huh it became pink but now its not flexing")
   //messageP.classList.add("special"); (this is correct but you can also use .toggle! :D)
   messageP.classList.toggle("special");
};

const hideCat = () => {
    document.getElementById("cat").classList.add("hidden");
};

document.getElementById("btm-click").onclick = doStuff; //get the button
document.getElementById("cat").onclick = hideCat;


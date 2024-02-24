//look at the w3school to get the css for "the modal"
document.querySelectorAll(".items section").forEach((section)=>{
    section.onclick = (e) => {
        document.getElementById("dialog").style.display = "block";

       // console.log(e.currenttarget); //currenttarget is doing is: give my the element that the event was tied to
       document.querySelector("#dialog-content img").src = e.currentTarget.querySelector("img").src; //this shows the img in it too!
    };
});
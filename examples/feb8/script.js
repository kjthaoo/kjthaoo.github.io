const updateThermometer = () => {
    const goal = 10000;
    const funds = document.getElementById("txt-funds").value;
    const errorSpan = document.getElementById("funds-error");
    errorSpan.innerHTML = "";
    const therm = document.getElementById("thermometer");
    document.querySelector(":root").style.setProperty('--funds', "0%");

    if(isNaN(funds)) { //isNaN = is Not a Number
        errorSpan.innerHTML = "* Not a valid number";
        return; 
    } else if(funds < 0) {
        errorSpan.innerHTML = "* Negative Number";
        return;
    }

    const percent = funds / goal * 100;
    document.querySelector(":root").styles.setProperty('--funds', percent + "%");

};

const evalForm = (e) => {
    e.preventDefault();

   // console.log("here");


};

document.getElementById("btm-cont").onclick = updateThermometer;
document.getElementById("my-form").onsubmit = evalForm;
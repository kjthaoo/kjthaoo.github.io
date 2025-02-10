const c1 = document.getElementById('c1');
const messageContainer = document.getElementById('textbox');

c1.addEventListener('click', () => {
    const helloMessage = document.createElement('p');
    helloMessage.textContent = 'Hello!';
    textbox.appendChild(helloMessage);
});

const colorPicker = document.getElementById('favcolor');
const star = document.getElementById('star');

colorPicker.addEventListener('input', () => {
    star.setAttribute('fill', colorPicker.value);
});

const originalImg = document.getElementById('originalImg');
let image1 = true;

originalImg.addEventListener("click", () => {
    if (image1) {
        originalImg.src = "images/birds1.jpg";
    } else {
        originalImg.src = "images/birds2.jpg";
    }
    image1 = !image1;
});
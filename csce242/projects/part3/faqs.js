//toggling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

//go back to the top function
document.getElementById('back-to-top').addEventListener('click', (e) => {
    e.preventDefault(); 

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//the answer show/hide
const showAnswer = (index) => {
    const allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(answer => answer.classList.remove('active'));
    
    document.getElementById(`answer-${index}`).classList.add('active');
}

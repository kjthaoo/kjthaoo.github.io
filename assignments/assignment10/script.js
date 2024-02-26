document.addEventListener("DOMContentLoaded", () => {
    const advertisements = [
        "The variety with in these images is outstanding",
        "Each image has been editted by our superior staff",
        "A majestic mountain range reflects tranquil scene beauty",
        "These images were taking in Canada",
        "A serene lake surrounded by mountains"
    ];

    const banner = document.getElementById("banner");
    let index = 0;

    const displayAdvertisement = () => {
        banner.innerHTML = `<div>${advertisements[index]}</div>`;
        index = (index + 1) % advertisements.length; // remidner that gotta use +1 so it can go to the next txt, then loops it using the modulo %
    };

    displayAdvertisement();
    setInterval(displayAdvertisement, 2000); //use milliseconds! 2000 = 2 secs
});
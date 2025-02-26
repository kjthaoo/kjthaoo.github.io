document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const closeButton = document.getElementById("close");

    popup.classList.add("hidden");

    const titles = document.querySelectorAll(".title");

    titles.forEach(title => {
        title.addEventListener("click", () => {
            const imageSrc = title.getAttribute("data-image");
            //grabbin from the index
            if (imageSrc) {
                popupTitle.textContent = title.textContent;
                popupImage.src = imageSrc;
                popupImage.alt = title.textContent;

                popup.classList.remove("hidden");
            }
        });
    });

    const titleImageMap = {
        "Happy Birthday": "images/birthday.jpg",
        "Crazy Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Quiet Time": "images/read.jpg",
        "Working Hard": "images/shovel.jpg",
        "Work from Home": "images/work.jpg"
    };


    closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            popup.classList.add("hidden");
        }
    });
});

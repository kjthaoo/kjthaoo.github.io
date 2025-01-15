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

/* the class (from the lecture video and the 'on load' associative array */
class images {
    constructor(pic, attributions) {
        this.pic = pic;
        this.attribution = attributions;
        this.item = this.createItem(pic, attributions);
    }

    createItem(pic, attributions) {
        const container = document.createElement("div");

        const picItem = document.createElement("img");
        picItem.src = "images/" + pic;
        container.appendChild(picItem);
        
        const attributionLink = document.createElement("p");
        attributionLink.innerHTML = '<p><a href="' + attributions + '">Image by vecstock</a> on Freepik<p>';
        //attributionLink.textContent = "Images by vecstock";
        container.appendChild(attributionLink);

        return container;
    }
}

window.onload = () => {
    let imgs = [];
    let imgList = document.getElementById("img-list");

    imgs.push(new images("garden.jpg", "https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"));
    imgs.push(new images("golden.jpg", "https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"));
    imgs.push(new images("mountain-lake.jpg", "https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7"));
    imgs.push(new images("small-house.jpg", "https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"));
    imgs.push(new images("snow.jpg", "https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"));


    for (let i in imgs) {
        imgList.append(imgs[i].item);
    }
};



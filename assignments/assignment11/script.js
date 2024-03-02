class Biome {
    constructor(title, temp, location, vegetation, biodiversity, pic) { //reminder to have 6 attributes
        this.title = title;
        this.temp = temp;
        this.location = location;
        this.vegetation = vegetation;
        this.biodiversity = biodiversity;
        this.pic = pic;
    }
}

window.onload = () => {
    let biomes = [];

    biomes.push(new Biome("Tundra", "between -40F and 64", "South and North of the Artic", "Low growing plants", "Low biodiversity", "tundra.jpg"));
    biomes.push(new Biome("Taiga", "between -40F and 68F", "Canada, Europe, Asia, and the US", "extensive forests of coniferous trees", "High biodiversity", "taiga.jpg"));
    biomes.push(new Biome("Grasslands", "between -4F and 86F", "Various locations with temperate regions such as Asia and Africa.", "Primarily grass with spare trees.", "High diversity", "grassland.jpg"));
    biomes.push(new Biome("Deserts", "between 100F in the day to 25F at night", "North and South of the equator", "Sparse or none at all", "Low biodiversity", "desert.jpg"));
    biomes.push(new Biome("Tropical Rain Forests", "between 68F and 77F", "Between the Tropic of Cancer and Tropic of Capricorn", "Extremely dense", "High biodiversity", "rainforest.jpg"));

    for(let i in biomes) {
    console.log(`Biome: ${biomes[i].title}, ${biomes[i].temp}`);
    }
    //remindaer to not use var, use LET!
    let modal = document.getElementById("biomeModal");
    let modalContent = document.getElementById("modalContent");
    let closeButton = document.getElementsByClassName("close")[0];

    let boxes = document.querySelectorAll(".flex-container > #box");
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            let selectedBiome = biomes[index];
            modalContent.innerHTML = `
                <p><strong>${selectedBiome.title}</strong></p>
                <p><strong>Temperature:</strong> ${selectedBiome.temp}</p>
                <p><strong>Location:</strong> ${selectedBiome.location}</p>
                <p><strong>Vegetation:</strong> ${selectedBiome.vegetation}</p>
                <p><strong>Biodiversity:</strong> ${selectedBiome.biodiversity}</p>
                <img src="images/${selectedBiome.pic}" alt="${selectedBiome.title}">
            `;
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
  };

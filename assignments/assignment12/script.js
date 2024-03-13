const getPlans = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";
    
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showPlans = async () => {
    let plans = await getPlans();
    let plansSection = document.getElementById("plans-section");

    plans.forEach((plan) =>{
        plansSection.append(getPlanItem(plan));
        //console.log(plan);
    });
};

const getPlanItem = (plan) => {
    let section = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerText = plan.name;
    section.append(h3);

    let contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");

    let img = document.createElement("img");
    img.src = "images/" + plan.main_image;
    img.alt = plan.name;
   // section.append(img);

    let ul = document.createElement("ul");
   // section.append(ul);
    ul.append(getLi(plan.size));
    ul.append(getLi(plan.bedrooms));
    ul.append(getLi(plan.bathrooms));
    ul.append(getLi(plan.features));

    contentWrapper.append(img);
    contentWrapper.append(ul);
    
    section.append(contentWrapper);
    //ul.append(getLi(plan.main_image));
    //ul.append(getLi(plan.floor_plans));

    /*let h2 = document.createElement("h2");
    h2.innerText = floorPlan.name;
    section.append(h2);*/

    
    if (plan.floor_plans && plan.floor_plans.length > 0) {
        let floorPlansDiv = document.createElement("div");
        floorPlansDiv.classList.add("floor-plans");

        plan.floor_plans.forEach((floorPlan) => {
            let floorPlanDiv = document.createElement("div");

            let floorPlanName = document.createElement("p");
            floorPlanName.innerText = floorPlan.name;
            floorPlanDiv.append(floorPlanName);

            let floorPlanImg = document.createElement("img");
            floorPlanImg.src = "images/" + floorPlan.image;
            floorPlanImg.alt = floorPlan.name;
            floorPlansDiv.append(floorPlanImg);

            floorPlansDiv.append(floorPlanDiv);
        });
        section.append(floorPlansDiv)
    }

    return section;
};

const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
}

window.onload = () => showPlans();
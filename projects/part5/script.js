const myFunction = () => {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = `${scrolled}%`;
  };
  
  window.onscroll = myFunction;

const getData = async () => {
  const url = "json/data.json";

  try {
      const response = await fetch(url);
      return await response.json();
  } catch (error) {
      console.log(error);
  }
};

const showData = async () => {
  let data = await getData();
  let dataSection = document.getElementById("data-section");

  data.forEach((data) =>{
    dataSection.append(getDataItem(data));
  });
};

const getDataItem = (data) => {
  let section = document.createElement("section");

  let h3 = document.createElement("h3");
  h3.innerText = plan.name;
  section.append(h3);

  let contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");//class list needed or no??

  let img = document.createElement("img");
  img.src = "images/" + data.main_image;
  img.alt = data.name;

  let ul = document.createElement("ul");
  ul.append(getLi(data.link));
  ul.append(getLi(data.description));
  ul.append(getLi(data.technologies));
  ul.append(getLi(data.project_duration));

  contentWrapper.append(img);
  contentWrapper.append(ul);

  section.append(contentWrapper);



}

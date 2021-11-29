// task 3

let img = document.querySelector("#cat-here");
let button = document.querySelector(".button");

async function getImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");

  console.log(response);
  const data = await response.json();

  console.log(data);

  img.src = data[0]["url"];

  clickForCats();
}

getImage();

function clickForCats() {
  img.src = data[0]["url"];
}

button.addEventListener("click", getImage);

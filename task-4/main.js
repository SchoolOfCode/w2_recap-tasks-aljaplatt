// // task 4a

// let importantThings = [];

// // select button and input
// let button = document.getElementById("add-to-list");
// let input = document.getElementById("important-thing");

// // create callback
// // i want the function to take the value of the input and push to importantThings.
// // Then clear
// function getUserInput() {
//   importantThings.push(input.value);
//   input.value = "";
//   console.log(importantThings);
// }

// // add event listener & callback
// button.addEventListener("click", getUserInput);

// task 4b

let importantThings = [];

// select button and input
let button = document.getElementById("add-to-list");
let input = document.getElementById("important-thing");
// // selected ol from html
// let addToList = document.querySelector("ol");

// create callback
// i want the function to take the value of the input and push to importantThings.
// Then clear
function getUserInput() {
  importantThings.push(input.value);
  input.value = "";
  console.log(importantThings);
}
//select input
// convert array items to list items. map??
// store in new variable
// add list items variable  to ol
function addUserInputToList() {
  let li = importantThings.map(function (listItem) {
    listItem += `<li>${listItem}</li>`;
    document.querySelector("ol").innerHTML = li;
  });
}

// call function
addUserInputToList();

// add event listener & callback
button.addEventListener("click", getUserInput);

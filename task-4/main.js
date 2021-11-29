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
let li = document.createElement("li");
let list = document.querySelector("ol");

// create callback
// i want the function to take the value of the input and push to importantThings.
// Then clear
function getUserInput() {
  importantThings.push(input.value);
  input.value = "";
  console.log(importantThings);
  addUserInputToList();
}
//select input
// convert array items to list items. map??
// store in new variable
// add list items variable  to ol
function addUserInputToList() {
  list.appendChild(li).innerHTML = `<li>${input.value}</li>`;
}

// call function

// add event listener & callback
button.addEventListener("click", getUserInput);

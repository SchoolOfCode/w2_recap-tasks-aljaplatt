let importantThings = [];

// select button and input
let button = document.getElementById("add-to-list");
let input = document.getElementById("important-thing");

// create callback
// i want the function to take the value of the input and push to importantThings.
// Then clear
function getUserInput() {
  importantThings.push(input.value);
  input.value = "";
}

// add event listener & callback
button.addEventListener("click", getUserInput);

// console.log(inputValue);
console.log(importantThings);

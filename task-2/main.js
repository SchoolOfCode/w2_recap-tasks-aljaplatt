// task 2a

// let p = document.querySelector("p");

// let seconds = 0;

// function incSeconds() {
//   seconds++;
//   p.innerText = seconds;
// }

// let increaseSeconds = setInterval(incSeconds, 1000);

// task 2b

let p = document.querySelector("p");

let seconds = 0;

function timer() {
  seconds++;
  p.innerText = seconds;
  if (seconds === 12) {
    clearInterval(increaseSeconds);
  }
}

let increaseSeconds = setInterval(timer, 1000);

// function myStopFunction() {

//   clearInterval(increaseSeconds);
// }

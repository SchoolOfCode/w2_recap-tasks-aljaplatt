const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson",
];

// task 1a
function makeLegend(name) {
  return name + " is a now a legend";
}

console.log(makeLegend("Alex"));

//1b

let legendaryCelebs = celebs.map(makeLegend);

// console.log(legendaryCelebs);

//1c

function startsWithVowel(celebs) {
  return (
    celebs.startsWith("A") ||
    celebs.startsWith("E") ||
    celebs.startsWith("I") ||
    celebs.startsWith("O") ||
    celebs.startsWith("U")
  );
}
let vowelCelebs = celebs.filter(startsWithVowel);

console.log(vowelCelebs);

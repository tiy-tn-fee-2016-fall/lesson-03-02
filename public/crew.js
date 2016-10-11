
const crew = [
  'Bender',
  'Fry',
  'Leela',
  'Amy',
  'Professor',
  'Zoidberg',
  'Hermes',
  'Nibbler',
  'Scruffy',
];

const competition = [
  'Delivery Bot 1',
  'Delivery Bot 2',
  'Delivery Bot 3',
  'Delivery Bot 4',
  'Delivery Bot 5',
  'Delivery Bot 6',
  'Delivery Bot 7',
  'Delivery Bot 8',
  'Delivery Bot 9',
];

console.log(crew == competition); // FALSE
console.log(crew === competition); // FALSE

// Let's call role!
console.log(crew[0]);
console.log(crew[1]);
// ... till
console.log(crew[8]);

// How many people are in the crew
console.log(crew.length);
// How do we get the last item in the array no matter the size?
console.log(crew[crew.length - 1]);

let counter = 0;

while (counter < 2) {
  console.log('Kill all humans - Bender');

  counter = counter + 1;
}

for (let x = 1; x < 5; x += 1) {
  console.log('Shut up and take my money!');
}


// Print all names in the crew array
// for (let i = 0; i < crew.length; i = i + 1) {
// for (let i = 0; i < crew.length; i += 1) {
for (let varName = 0; varName < crew.length; varName++) {
  console.log(crew[varName]);
}

// Add all the names together in a long string
// Make a starting value first
let allNames = crew[0];

// Add the rest of the names
for (let i = 1; i < crew.length; i++) {
  allNames = allNames + ' likes ' + crew[i];
}

// Get the string after everyone is added together
console.log(allNames);

// You don't have to get EVERY item in an array
for (let i = 0; i < competition.length; i += 2) {
  console.log(competition[i]);
}

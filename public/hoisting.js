'use strict';

// var declarations hoist to the top of their "scope"
console.log(x); // undefined
console.log(y); // undefined

// let declarations DO NOT HOIST
// console.log(a); // undefined

let a = 'This is different';

// const declarations DO NOT HOIST
// console.log(d);
const d = 25;

if (true) {
  var x = 2;
  let foo = 'bar';
  let hey = 'Jude';
}

// var scopes beyond if/else statements
console.log(x); // 2
// let scopes within if/else statements
// console.log(foo);
// const scopes within if/else statements
// console.log(hey);


// Function arguments do not exist outside of their function
// console.log(v);
// var is scoped within functions
// console.log(inside);

function lunch(v) {
  var inside = 1;
  // All variables are available in DEEPER scopes
  console.log(d);

  function letsGoAlready() {
    console.log('Bender is great');
  }

  letsGoAlready();
}

// Function arguments do not exist outside of their function
// console.log(v);
// var is scoped within functions
// console.log(inside);

lunch();

// Functions are scoped within functions
// letsGoAlready();

if (false) {
  var y = 3;
}

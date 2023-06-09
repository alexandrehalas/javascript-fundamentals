"use strict";

/**
 * Functions
 */
/*
//declaring the function
function logger() {
  console.log("My name is Alexandre");
}

//calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(fruit) {
  console.log(`Received: ${fruit}`);
  console.log("Processing juice");
  return `Juice of ${fruit}`;
}

const juice = fruitProcessor("orange");
console.log(juice);
*/

/*
 * Function Declarations vs. Expressions
 */
/*
// function declaration

console.log(calcAge(1986)); // <- can call this function first be declared

function calcAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

console.log(calcAge(1990));

// function expression

//function without name was called an anonymous function
//so this anonymous function is an expression, because a expression produces a value

//console.log(calcAgeConst(1990)); //<- this not work because cannot call a function expression before declare it

const calcAgeConst = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

console.log(calcAgeConst(1990));

//big difference between function declaration and function expression is we can call function declarations before they are defined in the code.
*/

/**
 * Arrow Function
 */
/*
// function expression
const calcAgeConst = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

// arrow function
const calcAgeArrow = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calcAgeArrow(1990));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1990, "Alexandre"));
*/
/**
 * Functions calling other functions
 */
/*
function cutFruitPieces(quantityOfFruits) {
  return quantityOfFruits * 4;
}

function fruitProcessor(fruit, quantity) {
  console.log(`Received ${quantity} ${fruit}s`);
  const fruitPieces = cutFruitPieces(quantity);
  console.log(`Cutted ${fruit}s into ${fruitPieces} pieces`);
  console.log("Processing juice");
  return `The ${fruit} juice is ready`;
}

console.log(fruitProcessor("apple", "3"));
*/
/**
 * Introduction to Arrays
 */
/*
const friend1 = "Betinha";
const friend2 = "Gabriel";

// creating arrays
// literal syntax
const friends = ["Betinha", "Gabriel"];
console.log(friends);

const years = new Array(1990, 1986, 2010);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = "Bibi";
console.log(friends);

const firstName = "Alexandre";
const alexandre = [firstName, "Halas", 1990, "Developer", friends];
console.log(alexandre);
*/

const friends = ["Betinha", "Gabriel", "Bibi"];

// Add elements
const newLength = friends.push("Fonfon");

console.log(newLength);
console.log(friends);

friends.unshift("Jojo");
console.log(friends);

//remove elements

friends.pop();
const removedFriend = friends.pop();
console.log(removedFriend);
console.log(friends);

const shiftedFriend = friends.shift();
console.log(shiftedFriend);
console.log(friends);

console.log(friends.indexOf("Betinha"));
console.log(friends.indexOf("Giulia"));

console.log(friends.includes("Betinha"));
console.log(friends.includes("Giulia"));

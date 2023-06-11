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

/**
 * Basic Array Operations (Methods)
 */
/*
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
*/

/**
 * Introduction to Objects
 */
/*
// Array
const firstName = "Alexandre";
const friends = ["Betinha", "Gabriel", "Bibi"];
const alexandreArray = [firstName, "Halas", 1990, "Developer", friends];
console.log(alexandreArray);

// Object
const alexandre = {
  firstName: firstName,
  lastName: "Halas",
  birthYear: 1990,
  job: "Developer",
  friends,
};
*/
/**
 * Dot vs. Bracket Notation
 */
/*
console.log(alexandre);

// dot notation
// in dot notation we have to use the real final property name
console.log(alexandre.lastName);
//that is not allowed in dor notation
//const nameKey = "Name";
//console.log(alexandre.'last' + nameKey);

// brackets notation
// in bracket notation we can put any expression we'd like
console.log(alexandre["lastName"]);

const nameKey = "Name";
console.log(alexandre["first" + nameKey]);
console.log(alexandre["last" + nameKey]);
*/
/**
 * Object methods
 */
/*
const firstName = "Alexandre";
const friends = ["Betinha", "Gabriel", "Bibi"];
const alexandreArray = [firstName, "Halas", 1990, "Developer", friends];
console.log(alexandreArray);

// Object
const alexandre = {
  firstName: firstName,
  lastName: "Halas",
  birthYear: 1990,
  job: "Developer",
  friends,
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return new Date().getFullYear() - birthYear;
  // },
  // calcAge: function () {
  //   return new Date().getFullYear() - this.birthYear;
  // },
  calcAge: function () {
    //creating new property age inside alexandre's object, so now we didn't need calculate the age all the time we want get its value
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} drivers license`;
  },
};

// console.log(alexandre.calcAge(1990));
// console.log(alexandre["calcAge"](1990));

console.log("calculate alexandre's age: " + alexandre.calcAge());

console.log("retrieving alexandre's age: " + alexandre.age);
console.log("retrieving alexandre's age: " + alexandre.age);
console.log("retrieving alexandre's age: " + alexandre.age);

console.log(alexandre.getSummary());
*/

/**
 * Iteration: The for loop
 */
/*
console.log("Lifting weigths repetition 1 🏋️");
console.log("Lifting weigths repetition 2 🏋️");
console.log("Lifting weigths repetition 3 🏋️");
console.log("Lifting weigths repetition 4 🏋️");
console.log("Lifting weigths repetition 5 🏋️");

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weigths repetition ${i} 🏋️`);
}
*/

/**
 * Looping Arrays, Breaking and Continuing
 */

// Array
const firstName = "Alexandre";
const friends = ["Betinha", "Gabriel", "Bibi"];
const alexandreArray = [firstName, "Halas", 1990, "Developer", friends];
console.log(alexandreArray);

const types = [];

for (let i = 0; i < alexandreArray.length; i++) {
  console.log(alexandreArray[i], typeof alexandreArray[i]);

  // types[i] = typeof alexandreArray[i];
  types.push(typeof alexandreArray[i]);
}
console.log(types);

console.log("---- ONLY STRINGS ----");

for (let i = 0; i < alexandreArray.length; i++) {
  if (typeof alexandreArray[i] !== "string") continue;
  console.log(alexandreArray[i], typeof alexandreArray[i]);
}

console.log("---- BREAK WITH NUMBER ----");

for (let i = 0; i < alexandreArray.length; i++) {
  if (typeof alexandreArray[i] === "number") break;
  console.log(alexandreArray[i], typeof alexandreArray[i]);
}

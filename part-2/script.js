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

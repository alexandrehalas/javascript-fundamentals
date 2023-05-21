/**
 * VALUES AND VARIABLES
 */

/*
console.log("VALUES AND VARIABLES");
console.log("");

var js = "amazing";

let firstName = "Alexandre";
const LAST_NAME = "Halas";

let greeting = "Hello";
let farewell = "Goodbye";

console.log(greeting + " " + firstName + " " + LAST_NAME);

console.log("Javascript is " + js);

firstName = "Elizabete";

console.log(farewell + " " + firstName + " " + LAST_NAME);
*/

/**
 * DATA TYPES
 */

/*
console.log("");
console.log("DATA TYPES");
console.log("");

let javascriptIsFun = true;
console.log(javascriptIsFun);

//Special operator typeof can use to show the type of a value
console.log("true is: " + typeof true);
console.log("javascriptIsFun is:" + typeof javascriptIsFun);
console.log("43 is:" + typeof 43);
console.log("Halas is: " + typeof "Halas");

//dynamic typing
console.log("");
console.log("Dynamic typing");
javascriptIsFun = "YES!";
console.log("javascriptIsFun is:" + typeof javascriptIsFun);

//undefined
console.log("");
console.log("Undefined");
let year;
console.log("year value is: " + year);
console.log("year type is: " + typeof year);
year = 1990;
console.log("year value is: " + year);
console.log("year type is: " + typeof year);
*/

/**
 * const, var, let
 */
/*
let age = 30;
age = 31;

const birthYear = 1990;
birthYear = 1991;

const dog;
*/

/**
 * Basic Operators
 */
/*
const now = 2023;
const ageAlexandre = now - 1990;
const ageBelinha = now - 2011;

console.log("age Alexandre: " + ageAlexandre);
console.log("age Belinha: " + ageBelinha);

console.log(
  "age Alexandre * 2: " + ageAlexandre * 2,
  ", age Alexandre / 10: " + ageAlexandre / 10,
  ", 2 pounds 3 (2*2*2): " + 2 ** 3
);

const isFullAge = ageAlexandre >= 33;
console.log("isFullAge: " + isFullAge);
*/

/**
 * Operator Precedence
 */
/*const now = 2023;
const ageAlexandre = now - 1990;
const ageBelinha = now - 2011;

const averageAge = (ageAlexandre - ageBelinha) / 2;
// average = (33 - 12) / 2
// average = (21) / 2
// average = 10,5
console.log("Average age is: " + averageAge);
*/

/**
 * Strings and Template literals
 */
/*
const firstName = "Alexandre";
const job = "programmer";
const birthYear = 1990;
const year = 2050;

const alexandre =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(alexandre);

const alexandreStringTemplate = `I'm ${firstName}, a ${
  year - birthYear
} years old ${job}!`;

console.log(alexandreStringTemplate);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple\n\
lines"
);

console.log(`String with
multiple
lines`);
*/

/**
 * Taking decisions: if / else Statements
 */
const age = 16;
if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is to young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

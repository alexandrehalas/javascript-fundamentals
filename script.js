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
/*
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
/*

/**
 * Typing Conversion and Coercion
 */

/*
// CONVERSION

const inputYear = "1990";
console.log(inputYear + 18);

const numberInputYear = Number(inputYear);
console.log(numberInputYear + 18);

//Displays at console NaN -> Not a Number
console.log(Number("Alexandre"));

console.log(String(32), 32);

// COERCION
// javascript convert 23 into string
console.log("I am " + 23 + " years old");
//javascript convert all strings into numbers
console.log("32" - "10" - 2);
//javascript convert 2 into string
console.log("32" + "10" + 2);
//javascript convert strings into numbers
console.log("32" * 2);
console.log("32" / 2);

let n = "1" + 1;
n -= 1;
console.log(n); // result is 10

console.log(2 + 3 + 4 + "5"); // result is 95
*/

/**
 * Truthy and Falsy Values
 */
/*
console.log("Falsy Values");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log("Truthy Values");
console.log(Boolean("Alexandre"));
console.log(Boolean(32));
console.log(Boolean({}));

const money = 0;

if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job!");
}

let height;

if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/**
 * Equality operators: == vs. ===
 */
const age = 18;
console.log(`loose ${age == 18}`);
console.log(`loose ${age == "18"}`);
console.log(`strict ${age === 18}`);
//strict operator not performe type coercion
console.log(`strict ${age === "18"}`);

const favouriteNumber = Number(prompt("What´s your favorite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favouriteNumber === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favouriteNumber !== 23) {
  console.log("Why not 23?");
}

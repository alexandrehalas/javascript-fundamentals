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

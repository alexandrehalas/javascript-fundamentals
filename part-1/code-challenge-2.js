/*
JavaScript Fundamentals – Part 1
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement :)
*/

console.log("");
console.log("JavaScript Fundamentals – Part 1");
console.log("Coding Challenge #2");

// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnsWeight = 92;
// const johnsHeight = 1.95;

const marksWeight = 95;
const marksHeight = 1.88;
const johnsWeight = 85;
const johnsHeight = 1.76;

const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight / johnsHeight ** 2;

const markHigherBMI = marksBMI > johnsBMI;

let message;
if (markHigherBMI) {
  message = `Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`;
} else {
  message = `John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`;
}

console.log(message);

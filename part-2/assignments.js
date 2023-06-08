console.log("");
console.log("");
console.log("ASSIGNMENTS");

/*
LECTURE: Functions
    1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
    2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/
console.log("");
console.log("LECTURE: Functions");

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const finlandDescribe = describeCountry("Finland", "6 million", "Helsinki");
const brazilDescribe = describeCountry("Brazil", "214 million", "Brasilia");
const euaDescribe = describeCountry("Portugal", "10 million", "Lisbon");

console.log(finlandDescribe);
console.log(brazilDescribe);
console.log(euaDescribe);

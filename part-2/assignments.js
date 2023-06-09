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

/*
LECTURE: Function Declarations vs. Expressions
  1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
  2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
  3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
  4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
console.log("");
console.log("LECTURE: Function Declarations vs. Expressions");

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

const finlandPercentageOfWorld1 = percentageOfWorld1(6000000);
const brazilPercentageOfWorld1 = percentageOfWorld1(214000000);
const chinaPercentageOfWorld1 = percentageOfWorld1(1441000000);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

const finlandPercentageOfWorld2 = percentageOfWorld2(6000000);
const brazilPercentageOfWorld2 = percentageOfWorld2(214000000);
const chinaPercentageOfWorld2 = percentageOfWorld2(1441000000);

/*
LECTURE: Arrow Functions
  1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = (population) => (population / 7900000000) * 100;

const finlandPercentageOfWorld3 = percentageOfWorld3(6000000);
const brazilPercentageOfWorld3 = percentageOfWorld3(214000000);
const chinaPercentageOfWorld3 = percentageOfWorld3(1441000000);

console.log(
  `Finland %: ${finlandPercentageOfWorld1} ${finlandPercentageOfWorld2} ${finlandPercentageOfWorld3}`
);
console.log(
  `Brazil %: ${brazilPercentageOfWorld1} ${brazilPercentageOfWorld2} ${brazilPercentageOfWorld3}`
);
console.log(
  `China %: ${chinaPercentageOfWorld1} ${chinaPercentageOfWorld2} ${chinaPercentageOfWorld3}`
);

/*
LECTURE: Functions Calling Other Functions
  1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
  2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
  3. Call 'describePopulation' with data for 3 countries of your choice
*/

console.log("");
console.log("LECTURE: Functions Calling Other Functions");

function describePopulation(country, population) {
  const countryPercentageOfWorld = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${countryPercentageOfWorld} of the world.`;
}

console.log("China", 1441000000);

/*
LECTURE: Introduction to Arrays
  1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
  2. Log to the console whether the array has 4 elements or not (true or false)
  3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

console.log("");
console.log("LECTURE: Introduction to Arrays");

finlandPopulation = 6000000;
brazilPopulation = 214000000;
chinaPopulation = 1441000000;
euaPopulation = 3319000000;

const populations = [
  finlandPopulation,
  brazilPopulation,
  chinaPopulation,
  euaPopulation,
];

console.log(populations);
console.log(`The array has 4 elements? ${populations.length === 4}`);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

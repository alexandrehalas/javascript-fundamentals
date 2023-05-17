// JavaScript Fundamentals – Part 1

/*
LECTURE: Values and Variables
    1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
    2. Log their values to the console
*/

console.log("");
console.log("");
console.log("ASSIGNMENTS");

console.log("");
console.log("LECTURE: Values and Variables");

const country = "Brazil";
const continent = "South America";
let population = 214300000;

console.log(
  "      Country: " +
    country +
    ", Continent: " +
    continent +
    ", Population: " +
    population
);

/*
LECTURE: Data Types
    1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
    2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

console.log("");
console.log("LECTURE: Data Types");

const isIsland = false;
const language = "portuguese";

console.log(
  "      isIsland: " +
    isIsland +
    ", Population: " +
    population +
    ", Country: " +
    country +
    ", Language: " +
    language
);

/*
LECTURE: let, const and var
    1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
    2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happens
*/

console.log("");
console.log("LECTURE: let, const and var");

//country = "EUA"; //Uncaught TypeError: Assignment to constant variable.

/*
LECTURE: Basic Operators
    1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
    2. Increase the population of your country by 1 and log the result to the console
    3. Finland has a population of 6 million. Does your country have more people than
Finland?
    4. The average population of a country is 33 million people. Does your country
have less people than the average country?
    5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/

console.log("");
console.log("LECTURE: Basic Operators");

const populationSplitInHalf = population / 2;
console.log("Population in each half: " + populationSplitInHalf);

population += 1;
console.log("population: " + population);

const finlandPopulation = 6000000;
console.log(
  "My country has more people than Finland? ",
  population > finlandPopulation
);

console.log(
  "My country has less people than 33 million people? ",
  33000000 > population
);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;
console.log(description);

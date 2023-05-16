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

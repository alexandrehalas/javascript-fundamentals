"use strict";

/**
 * Functions
 */
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

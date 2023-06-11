# Javascript Fundamentals - Part 1

## What is Javascript?

Javascript is a high-level, object-oriented, multi-paradigm programming language.

high-level because we don't have to worry about complex stuff like memory management.

object-oriented because it's mostly based on the concept of objects for storing most kinds of data.

multi-paradigm language meaning it's so flexible and versatile that we can use all kinds of different programming styles, such as imperative and declarative programming.
<br><br>

## What is a value?

A value is the smallest unit of information in Javascript
Ex: "Halas", 33, ...
<br><br>

## What is a variable?

A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable. There are some rules while declaring a JavaScript variable (also known as identifiers). Name must start with a letter (a to z or A to Z), underscore( \_ ), or dollar( $ ) sign.

Ex: var name; let name; const name;
<br><br>

### Ilegal variable names:<br><br>

```
let 33years = 33;
const alexandre&elizabete = "AE"
```

Throws error at console:

Uncaught SyntaxError: Invalid or unexpected token

```
let new = "new"
```

Throws error at console:

Uncaught SyntaxError: Unexpected token 'new'

```
let function = 38
```

Throws error at console:

Uncaught SyntaxError: Unexpected token 'function'
<br><br>

## Data types <br><br>

JavaScript has 8 Data types

| Primitive | Object |
| --------- | ------ |
| String    |
| Number    |
| Bigint    |
| Boolean   |
| Undefined |
| Null      |
| Symbol    |
|           | Object |

### <br>Three most important Data types<br><br>

Number: Floating point numbers, used for decimals and integers

```
Ex.: let age = 59;
//variable age has 59.0 value
```

String: Sequence of characters, used for text

```
Ex.: let firstName = "Alexandre"
```

Boolean: Logical type that can only be 'true' or 'false', used for taking decisions

```
Ex.: let displayName = true;
```

### <br>Other primitive Data types<br><br>

Undefined: Means the variable has been declared, but its value has not been assigned

```
Ex.: let dog;
```

Null: means an empty value or a blank value

Symbol (ES2015): Value that is unique and cannot be changed

BigInt(ES2020): Larger integers than the Number type can hold

### <br>The Object Data type can contain:<br><br>

1. An object
2. An array
3. A date

## <br>Javascript has dynamic typing

We do <b>not</b> have to manually define the data type of the value stored in a variable. Instead, data types are determined <b>automatically</b>.

The value has a type, not the variable

## <br>const, var, let<br><br>

We use 'let' keyword to declare variables that can change later

```
Ex.: let age = 30;
     age = 31; // Reassigning a value to variable or mutate the value
```

<br>We use 'const' keyword do declare variables that not supposed to change at any point in the future

```
Ex.: const birthYear = 1990;
     birthYear = 1991; // ummutable variable, cannot be mutate
```

Throws error at console:

Uncaught TypeError: Assignment to constant variable.

<br>We cannot declare empty const variables

```
Ex.: const age;
```

Throws error at console:

Uncaught SyntaxError: Missing initializer in const declaration

### <br>We should use 'let' or 'const' to declare new variable?

As a best practice for writing clean code it's recommended to use 'const' by default and 'let' only when you really sure that the variable needs to change at some point in future.

<br>

There is a thid way in Javascript of declaring variables, which is the 'var' keyword, but this one should be completely avoided.

'var' is the old way to declare variables

## <br>Basic Operators<br><br>

An operator is a special symbol used to perform operations on operands (values and variables)

There are different types of JavaScript operators:

- ### Arithmetic Operators
  - Used to perform arithmetic on numbers<br><br>
  ```
  let a = 3;
  let x = (100 + 50) * a;
  ```
- ### Assignment Operators

  - Assignment operators assign values to JavaScript variables<br><br>

  ```
  let x = 10;
  x += 5;
  ```

  | Operator | Example   | Same As      |
  | -------- | --------- | ------------ |
  | =        | x = y     | x = y        |
  | +=       | x += y    | x = x + y    |
  | -=       | x -= y    | x = x - y    |
  | \*=      | x \*= y   | x = x \* y   |
  | /=       | x /= y    | x = x / y    |
  | %=       | x %= y    | x = x % y    |
  | \*\*=    | x \*\*= y | x = x \*\* y |

- ### Comparison Operators

  | Operator | Description                       |
  | -------- | --------------------------------- |
  | ==       | equal to                          |
  | ===      | equal value and equal type        |
  | !=       | not equal                         |
  | !==      | not equal value or not equal type |
  | >        | greater than                      |
  | <        | less than                         |
  | >=       | greater than or equal to          |
  | <=       | less than or equal to             |
  | ?        | ternary operator                  |

## <br>Strings and Template literals<br><br>

Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

### Syntax

```
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`
```

## <br>Taking decisions: if / else Statements <br><br>

The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

```
const value = 1;
let result;
if (value > 0) {
  result = "positive";
} else {
  result = "NOT positive";
}
return result;
```

## <br>Typing Conversion and Coercion<br><br>

Type conversion is when we manually convert from one type to another.

```
Ex.: const inputYear = "1990";
     console.log(Number(inputYear), inputYear);
```

Type coercion is when Javascript automatically converts types behind the scenes for us.

```
Ex.:  let n = "1" + 1;
      n -= 1;
      console.log(n);
```

## <br>Truthy and Falsy Values<br><br>

Falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean.

And in Javascript, there are only five falsy values:

- 0
- ''
- undefined
- null
- NaN

```
Ex.: console.log(Boolean(0));
     console.log(Boolean(""));
     console.log(Boolean(undefined));
     console.log(Boolean(null));
     console.log(Boolean(NaN));
```

Everything else are called Truthy values, so values that will be converted to true.

```
Ex.: console.log(Boolean("Alexandre"));
     console.log(Boolean(32));
     console.log(Boolean({}));
```

### <br>Javascript type coercion to booleans in two scenarious:

- when using logical operators;
- in a logical context, like in a condition of an if else statement.

```
Ex.:
      const money = 0;
      if (money) { // when 0 converts Boolean(0) => false
        console.log("Don't spend it all.");
      } else {
        console.log("You should get a job!");
      }

      let height; // height is undefined at this point
      if (height) { // when converts Boolean(undefined) => false
        console.log("YAY! height is defined");
      } else {
        console.log("Height is UNDEFINED");
      }
```

## <br>Equality operators: == vs. ===<br><br>

The equality (==) operator checks whether its two operands are equal, returning a Boolean result.
Unlike the strict equality (===) operator, it attempts to convert and compare operands that are of different types.

```
Ex.:
      console.log(1 == 1);
      // Expected output: true

      console.log('hello' == 'hello');
      // Expected output: true

      console.log('1' ==  1);
      // Expected output: true

      console.log(0 == false);
      // Expected output: true
```

Loose equality is one such context: null == A and undefined == A evaluate to true if, and only if, A is an object that emulates undefined. In all other cases an object is never loosely equal to undefined or null.

Loose equality operator is full of really weird rules and behaviors, this means if we use this one, this can introduce many hard to find bugs into our code. So as a general rule for clean code, avoid this operator as much you can.

In most cases, using loose equality is discouraged.

```
const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
```

The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

```
Ex.:
      console.log(1 === 1);
      // Expected output: true

      console.log('hello' === 'hello');
      // Expected output: true

      console.log('1' ===  1);
      // Expected output: false

      console.log(0 === false);
      // Expected output: false
```

## <br>Boolean logic<br><br>

### A AND B

| AND   | TRUE  | FALSE |
| ----- | ----- | ----- |
| TRUE  | TRUE  | FALSE |
| FALSE | FALSE | FALSE |

### <br>A OR B

| OR    | TRUE | FALSE |
| ----- | ---- | ----- |
| TRUE  | TRUE | TRUE  |
| FALSE | TRUE | FALSE |

### <br>NOT A, NOT B

Inverts TRUE / FALSE value

## <br>The switch statement<br><br>

The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

```
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

## <br>Statements and Expressions<br><br>

At a high level, an expression is a valid unit of code that resolves to a value. There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate.

The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to 7.

```
Ex.:  3 + 4
      1990
      true && false && !false
```

Statements is like a big piece of code that is executed and which not produce a value on itself

```
Ex.:  if (23 > 10) {
        const str = "23 is bigger";
      }
```

### Resume

Expressions produces values

Statements are like full sentences that translate our actions.

## <br>The conditional (Ternary) Operator<br><br>

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

```
Ex.:
      let isMember = true;
      return (isMember ? '$2.00' : '$10.00');
      // Expected output: "$2.00"

      let isMember = false;
      return (isMember ? '$2.00' : '$10.00');
      // Expected output: "$10.00"

      let isMember = null;
      return (isMember ? '$2.00' : '$10.00');
      // Expected output: "$10.00"
```

# Javascript Fundamentals - Part 2

## Strict mode

JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

to activate strict mode:

```
'use strict';
```

With strict mode, developers can write more secure code, make it easier for developers to avoid accidental errors.

It helps to developers not to introduce bugs into the code.

## Functions

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

Functions allow us to write more maintainable code, because with functions, we can create reusable chunks of code instead of having to manually write the same code all the time.

And when we know that we understand a very important principle for writing a clean code that is used in programming all the time, and this principle is called don't repeat yourself or 'dry'

### <br>Function declarations<br><br>

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, { /_ … _/ }.

For example, the following code defines a simple function named square:

```
function square(number) {
  return number * number;
}
```

## <br>Function Declarations vs. Expressions

```
// Function Declaration

console.log(calcAge(1986)); // <- can call this function first be declared

function calcAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

console.log(calcAge(1990));
```

```
// Function Expression

//function without name was called an anonymous function
//so this anonymous function is an expression, because a expression produces a value

const calcAgeConst = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

console.log(calcAgeConst(1990));
```

The big difference between function declaration and function expression is we can call function declarations before they are defined in the code.

## <br>Arrow Functions

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

```
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]
```

## <br>Introduction to Arrays

The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

The two most important datastructures in Javascript are Arrays and Objects.

In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

- JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
- JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
- JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

## <br>Basic Arrays Operations

### <br>Push<br><br>

The push() method adds the specified elements to the end of an array and returns the new length of the array.

```
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

### <br>Unshift<br><br>

The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.

```
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```

### <br>Pop<br><br>

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

### <br>Shift<br><br>

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

```
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

```

### <br>Indexof<br><br>

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
```

### <br>Includes<br><br>

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
```

## <br>Introduction to Objects

The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

```
const alexandre = {
  firstName: firstName,
  lastName: "Halas",
  birthYear: 1990,
  job: "Developer",
  friends,
};
console.log(alexandre);
```

## <br>Dot vs. Bracket Notation

### <br>Dot notation<br><br>

In dot notation we have to use the real final property name

```
console.log(alexandre.lastName);
```

That is not allowed in dor notation

```
const nameKey = "Name";
console.log(alexandre.'last' + nameKey);
```

### <br>Brackets notation<br><br>

in bracket notation we can put any expression we'd like

```
console.log(alexandre["lastName"]);

const nameKey = "Name";
console.log(alexandre["first" + nameKey]);
console.log(alexandre["last" + nameKey]);
```

## <br>Loops and iteration

Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.

You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop:

```
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

The statements for loops provided in JavaScript are:

- for statement
- do...while statement
- while statement
- labeled statement
- break statement
- continue statement
- for...in statement
- for...of statement

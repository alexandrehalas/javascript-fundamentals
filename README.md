# Javascript Fundamentals

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

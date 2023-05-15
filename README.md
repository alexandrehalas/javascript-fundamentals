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

let 33years = 33;
const alexandre&elizabete = "AE"

Throws error at console:
caught SyntaxError: Invalid or unexpected token (

let new = "new"
Throws error at console:
caught SyntaxError: Unexpected token 'new'

let function = 38

Throws error at console:
caught SyntaxError: Unexpected token 'function'
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

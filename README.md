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

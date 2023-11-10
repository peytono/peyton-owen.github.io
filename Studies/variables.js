/**
 *  VARIABLES: 
 * 0. To hold things in memory during the life-cycle of a program we can use variables. Variables are named identifies that can point to values of a particular type, like a Number, String, Boolean, Array, Object or another data-type. Variables are called so because once created, we can CHANGE the value (and type of a value) to which they point.
 * 1. Declaration and assignment: To create a variable in JavaScript we must first DECLARE it using one of three declaritive keywords. Assignment is the first time a variable is given or 'assigned' a value.
 * 2. Var, let, const: var, let and const are the three declarative keywords. The three keywords have different uses. They differ in rules when it comes to initialization, redeclaring, reassigning, and scope. 
 * 3. Hoisting: The process by which your program can move the declaration of functions, variables, classes, or imports to the beginning or their scope, before executing code.
 */

// 1. Declaration and Assignment //

// Declaration 
/*
 At the declaration phase either var, let, or const should be used to declare the variable. 
 Following the key word a space should be used, followed by a name that has correlation. 
 At this stage the variable's value is undefined.
 */
var age; // declares variable var 

// Assignment
/*
 At the assignment phase a value is given (or assigned) to the variable.
 The variable name should be first, followed by a space, an = assignment operator, 
 another space, the value to be assigned to the variable, and finally a semicolon.
*/
age = 35; // age is now assigned the number 35 as its value


// 2. Var, let and const //
/*
 There are three keywords that can be used to declare a variable.
 Until ES6 the only keyword was var, having function scope and ability to reassign, 
 it's also the only keyword that allows re-declaration. 
 The let/const keywords both have block scope, 
 you can reassign let variables, but const will always keep the same value.
*/

// var 
var age = 36; // age is now re-declared and re-assigned to 36

if (age > 18){
    var message = "You are over 18";
}

console.log(message); // message is still available since var is function scoped - this would get an error if message was declared with let or const

// let
let numbers = [1, 2, 3, 4]; // numbers is now declared and assigned to an array filled with numbers

numbers = [5, 6, 7, 8]; // numbers is reassigned to a new array with new numbers

// const
const add = (x, y) => x + y; // const was used to declare the function add

// 3. Hoisting //
/*
 The process by which the interpreter loads variable and function declarations to memory
before executing code. Function declarations (including the function body) are hoisted 
to the top of their scope, followed by variables declared with the var keyword (not including value).
*/

var multiply = function(x, y){ // this is a function expression, the declaration of multiply would be hoisted just under any function declarations (w/o the function body)
    return x * y;
}

function subtract(x, y){ // this is a function declaration, the subtract function would be hoisted to the top of this entire program, including the function body
    return x - y;
}

const skyColor = 'blue'; // this will not be hoisted

var name = 'Peyton Owen'; // declaration of name will be hoisted, but value will not be
/**
 *  FUNCTIONS:
 *  0. Functions are a fundamental building block in JavaScript. A function can take in inputs, execute code in the function body, and return an output.
 *  1. A function has two phases, declaration and invocation.
 *  2. Paramaters vs. Arguments
 *  3. Syntax for a named function
 *  4. Assigning a function to a variable
 *  5. Specififying inputs and outputs, they can also be used optionally
 *  6. Scope: Functions can see and modify variables in parent or global scopes, but they cannot access inner scopes.
 *  7. Closures: Functions form closures around the data they house. If an object returned from the Function and is referenced, that closure stays ALIVE, and data can continue to exist in these closures.
 */

// 1. A function has two phases, declaration and invocation //
/*
 Declaration Phase:
    The declaration phase is where we define and write our function. 
    Anything that the function inputs, does, and outputs will be decided in this phase.
*/
function add(x, y){ // this is the syntax of a function declaration - the function keyword was used, followed by the name of the function, and the parameters to be accepted
    return x + y; // this is the function body, once invoked, the function add will return the value of x + y
}

/* 
 Invocation Phase:
    This is where the function is called and we can pass in arguments as inputs.
    The function exists, but does not actually execute until this phase.
*/
add(8, 7); // here we are invoking the add function and passing in arguments 8 and 7
// this invocation will return 15

// 2. Parameters vs. Arguments //
/*
 During the declaration phase, you can write an optional list of parameters.
 In the function body, you can then write out expression and statements using these parameters. 
 Parameters don't actually have values, but are placeholders for the arguments 
 that will later be passed in on the invocation stage. 
 The arguments are values you would like to pass into the function and do actual operations on.
*/
function subtract(x, y){ // here is a function subtract that has parameters x and y
    return x - y; // the output is the difference of the parameters x and y
}

subtract(9, 1); // 9 and 1 are passed in as an arguments - this will return 8

// 3. Syntax for a named function // 
/* 
 You can write functions many ways, but named functions have a specific syntax.
 Starting with the function keyword, followed by a space, the desired function name, 
 parenthesis (with any desired parameters inside parenthesis, separated by commas),
an opening curly bracket, a line break, the code body, another line break, and a closing curly bracket.
*/
function multiply(x, y){
    return x * y;
}

// 4. Assigning a function to a variable //
/*
 You can also assign functions to variables. 
 This can be done as a function expression or an arrow function.
*/

var divide = function(x, y){ // this is a funciton expression - this initializes variable divide to a function
    return x / y; // it return x divided by y
}

var remainder = (x, y) => x % y; // this is an arrow function - it initializes variable remainder to a function that return the remainder of x and y

// 5. Specififying inputs and outputs, inputs can be used optionally //
/*
 Function inputs, or parameters are optional, they can also have default values in case none are passed in.
 Outputs can either be a return statement (which can also be left empty and return undefined) 
 or a console.log which will print something to the console, 
 it does not force the function to exit or give it a return value like the return statement will.
*/
function helloWorld(){ // this function has no parameters
    console.log('Hello World!'); // this function will output the encased string
}

function addWithDefault(x, y = 0){ // this sets y with a default value of 0, you can still pass a value during invocation, but if you don't
    return x + y; // this will return the value of x and y, if no value for y is passed in during invocation y's value will be zero
}

// 6. Scope //
/*
 Functions can see and modify variables in parent or global scopes, but they cannot access inner scopes.
*/
let string = 'Hello';

function createString(string){
    let functionString = 'Hi';
    console.log(string); // we have access to the global scope
    function inner(){
        let innerFunction = 'In here!';
        console.log(string); // we have access to the global scope
        console.log(functionString); // we have access to the parent scope
        console.log(innerFunction); // we have access to parent scope
        return;
    };
    console.log(innerFunction); // we do not have access to inner scope
    return;
}

console.log(string); // this will log 'Hello'
console.log(functionString); // this will receive a reference error, we do not have access to it
console.log(innerFunction); // we do not have access to innerFunction here

// 7. Closures //
/*
 Functions form closures around the data they house. 
 If an object returned from the Function and is referenced, 
 that closure stays ALIVE, and data can continue to exist in these closures.
*/
function letsCount(){ // we create function letsCount
    let count = 0; // we initialize variable count to zero in parent function
    return function(){ // we return an anonymous function
      count++; // the inner function adds one to count
      return count; // the inner function returns count
    }
  }
  
  const counting = letsCount(); // initializes variable counting to the lets count function
  
  console.log(counting()); // logs 1
  console.log(counting()); // logs 2
  console.log(counting()); // logs 3

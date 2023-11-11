/**
 *  OPERATORS:
 *  0. Operators allow us to complete JavaScript expressions. Expressions make up functionality in our code. Operators allow us to do things like create conditional chains or manipulate data.
 *  1. Assignment operators
 *  2. Arithmetic operators
 *  3. Comparison operators
 *  4. Logical operators
 *  5. Unary operators
 *  6. Ternary operator
 */

// 1. Assignment operators //
/* 
 Assignment operators assign a value to the left of the operand, 
 based on the value to the right of the operand.
*/
var x = 1; // the simple assignment operator is assigning x to the value of 1

x += 2 // x = 3 - the addition assignment operator is re-assigning x to its current value plus the value to the right of the operand

x -= 2 // x = 1 - the subtraction assignment operator is re-assigning x to its current value minus 2

x *= 9 // x = 9 - the multiplication assignment operator is re-assigning x to its current value times the value on the right of the operand

x /= 3 // x = 3 - the division assignment operator is re-assigning x to its current value divided by the value on the right of the operand

x %= 2 // x = 1 - the remainder assignment operator is re-assigning x to the remainder of x divided by 2

x **= 4 // x = 1 - the exponentiation assignment operator is re-assigning x to the the value of x exponentiated by the value to the right of the operand

// 2. Arithmetic operators //
/* 
 Arithmetic operators perform operations on values and returns a value.
*/

var y = 8 % 5; // y = 3 - the remainder operator returns the remainder of dividing the to operands

y++; // y = 4 - the increment operator adds one to the current value

y--; // y = 3 - the decrement operator subtracts one from the current value

var z = y ** 3; // z = 27 - the exponentiation operator calculates the base to the exponent power, here y being the base and 3 being the exponent poewr

// 3. Coparison operators //
/*
 Comparison operators compares its operands and returns its logical value based on truthiness.
*/

console.log(3 == '3'); // logs true - the equal operator returns true if operands are equal, this operator will return true if the values are the same, but not of the same data type

console.log(4 != '4'); // logs false - the not equal operator returns true if operands are not equal, like the equal operator will still compare disregarding data type

console.log(3 === '3'); // logs false - the strict equal operator only returns true if values are the same and of the same data type

console.log(4 !== '4') // logs true - the strict not equal operator is the logical inverse of stict equal

console.log('longerstring'.length > 'string'.length); // logs true - returns true if the left operand is greater than the right operand

console.log(49 >= 49); // logs true - returns true if the left operand is greater than or equal to the right operand

console.log(5 < 'new string'.length); // logs true - returns true if the value on the left is less then the value to the right of the operand

console.log(7 <= 3); // logs false - returns true if the value on the left is less than or equal to the value on the right

// 4. Logical operators //
/*
 Logical operators are typically used on boolean values 
 (or expressions that return boolean values), 
 in which case they return a boolean value. 
 Logical operators do return one of the values given, 
 so if used on non-Booleans, may return a non-Boolean.
*/
console.log(7 == 7 && 8 > 3); // logs true - the logical AND operator returns true if only both expression evalute to true

console.log(6 > 5 || 7 < 3); // logs true - the logical OR operator returns true if at least one value evalutes true

console.log(!false); // logs true - the logical NOT operator will invert a boolean value

// 5. Unary operator //
/* 
 A unary operation is an operation with only one operand
*/

console.log(typeof 'Hello world!'); // logs string - the typeof operator returns a string of the type of data to the right of it

// 6. Ternary operator //
/*
 The ternary operator is also know as the conditional operator.
  It takes in three operands. The first is a condition to check for truthiness,
   the second the value to return if true, the third the value to return if false.
*/

let fruits = ['apple', 'orange', 'kiwi', 'mango', 'pineapple']; // initializes array fruits to string values representing fruits

fruits.includes('apple') ? 'got apples!' : 'need apples'; // returns 'got apples!' if apples is in array and 'need apples' if not
// this returns 'got apples'
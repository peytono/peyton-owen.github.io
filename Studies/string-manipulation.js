/**
 *  STRING MANIPULATION:
 *  0. String manipulation allows us to make edits(or manipulate) strings and return new values. You can do this with operators or string methods.
 *  1. With Operators
 *  2. With String Methods
 */

// 1. String manipulation with Operators //
/*
 The addition assigment operator can be used on a string to add to it.
*/
var message = "Hey everyone"; // initializes variable message to a string
message += "!"; // adds an exclamation point to the end of message


// 2. String manipulation with String Methods //
/*
 There are many things you can do with String Methods to update your strings 
 or assign updated strings to new variables.
*/

// String.toUpperCase()
console.log(message.toUpperCase()); // returns "HEY EVERYONE!", but does not reassign message to this output, and this return is saved no where

var excitedMessage = message.toUpperCase(); // excitedMessage now holds the updated string

message = message.toUpperCase(); // this now re-assigns message to "HEY EVERYONE!"

// String.concat()
var longerMessage = message.concat(' Have a fabulous day!'); // String.concat() was used to add a string to the end of message and this value was assigned to excitedMessage
// longerMessage = "HEY EVERYONE! Have a fabulous day!"

// String.slice()
var slicedMessage = message.slice(1); // String.slice() was used to to return the string only at the 1st index and beyond
// slicedMessage = "EY EVERYONE!"

var slicingTime = message.slice(4, message.length - 1); // String.slice() returns a string including the start index, but not including the stop
// slicingTime = "EVERYONE"

// String.split()
var split = longerMessage.split(' '); // String.split() returns an array of substrings from the string separated by given character
// split = ["HEY", "EVERYONE!", "Have", "a", "fabulous", "day!"];


// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    // return input string's length property
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // create new variable to hold output string and assign it to value of string.toLowerCase() method
    var lowerCaseStr = string.toLowerCase();
    // return output string
    return lowerCaseStr;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // create new variable to hold output string and assign it to value of string.toUpperCase() method
    var upperCaseStr = string.toUpperCase();
    //return ouput string
    return upperCaseStr;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // create new output variable and assign to string using .toLowerCase() string method and replacing spaces with dashes using .replace() string method
    var dashCase = string.toLowerCase().replaceAll(' ', '-');
    // return output variable
    return dashCase;
    // YOUR CODE ABOVE HERE //
}

//console.log(toDashCase('Should Work With Many Words'));


/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // convert string to lowercase and put in a new var
    var lowerCaseStr = string.toLowerCase();
    // conver char to lowercase and put in a new var
    var lowerCaseChar = char.toLowerCase();
    // compare string at index 0 to char
    if (lowerCaseStr[0] === lowerCaseChar){
        // if strickly equal return true
        return true;
        // else return false
    } else return false;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // strickly compare string at last index in lowercase to char in lowercase
    if (string[string.length - 1].toLowerCase() === char.toLowerCase()){
        // if the same return true
        return true;
        // otherwise return false
    } else return false;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //concatenate stringOne and stringTwo and put into new variable
    var concatStr = stringOne.concat(stringTwo);
    //return new variable
    return concatStr;
    // YOUR CODE ABOVE HERE //
}
//console.log(concat('stringOne', 'stringTwo'));

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // use join array method on args to turn into joined string
    var joinedArg = args.join('');
    // return joined array
    return joinedArg;
    // YOUR CODE ABOVE HERE //
}

//console.log(join('hello', 'there', 'i', 'can', 'keep', 'going'));

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // compare length to see if stringOne is greater than stringTwo
    if (stringOne.length > stringTwo.length) {
        //if stringOne is greater return stringOne
        return stringOne; 
        //else return stringTwo
    } else return stringTwo;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'? 
 * 
 * 'a' < 'b' => true
 

*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create if statement to compare if stringOne is greater than stringTwo
    if (stringOne < stringTwo) {
        // if true return 1
        return 1;
    // else if stringOne is less than stringTwo
    } else if (stringOne > stringTwo) {
        // return -1
        return -1;
     // else return 0
    } else return 0;
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // if stringOne is lower in alphabetical order than stringTwo
    if (stringOne > stringTwo) {
        // return 1
        return 1;
        // else if stringOne is higher in alphabetical order than stringTwo
    } else if (stringOne < stringTwo) {
        // return -1
        return -1;
    // else return 0
    } else return 0;
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}

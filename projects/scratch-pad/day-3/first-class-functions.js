// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 * 
 * I: String or Number
 * O: A Function that tests whether a given value is greater than the base
 * C: Should check input for data type - and return a function to test whether that value is greater
 * E: N/A
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // create if statement to check whether input is number or string
    if (typeof base === 'number'){
        // console.log(typeof base);
        // create anonymous func for number return
        // return a Function that tests whether a Number value is greater than the base
        return function(value){
            // should check if value is larger than base
            /* if(value > base){ 
                // console.log(value + ' , ' + base);
                return true; 
            } else { 
                // console.log(base > value); 
                // console.log(value + ' , ' + base); 
                return false; } */
                return value > base;
        };
    } else if (typeof base === 'string'){
        //console.log(typeof base);
        // create anonymous func for string return
        return function(value){
            // should check if value is larger than base
            /* if(value > base){
                return true;
            } else { return false; } */
            return value > base;
        };
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 * 
 * I: a String or Number
 * O: a Function thats tests whether a given value is less than the base
 * C: returns a function
 * E: N/A
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // test if base is a number
    if (typeof base === 'number'){
        // return a function that takes param value
        return function (value){
            //should test if value is less than base
            return value < base;
        };
    // test if base is a string
    } else if (typeof base === 'string'){
        // return a function that takes param value
        return function(value){
            //should test if value is less than base
            return value < base;
        };
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * I: single character string
 * O: function to test whether string starts with startsWith
 * C: returns function that resolves to truth or false
 * E: case insenstive
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return function taking string param
    return function startsWithFilter(string){
        // return whether startsWith is equal to string at 0 index regardless of case
        return string[0].toLowerCase() === startsWith.toLowerCase();
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * I: single character string
 * O: function to test whether string ends with the endsWith character
 * C: returns a function
 * E: case insensitive
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return function taking string param
    return function endsWithFilter(string){
        // return whether string at last index is same as endsWith regardless of case
        return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 * 
 * let uppercase = modifyStrings(['a', 'b', 'c'], function(string) { return string.toUpperCase() }); // ['A', 'B', 'C']
 * 
 * I: an array of strings and a function that should take string as a param
 * O: modified array of strings
 * C: loop, new collection
 * E: N/A
 */
function modifyStrings(strings, modify) { //modify is a FUNCTION
    // YOUR CODE BELOW HERE //
    // create output array
    var modifiedStrings = [];
    // create temporary holder for modified string
    var modifiedString = '';
    // create for loop to iterate through strings
    for (var i = 0; i < strings.length; i++){
        modifiedString = modify(strings[i]);
        modifiedStrings.push(modifiedString);
    }
        // modify string and push to output array
    // return output array
    return modifiedStrings;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 * I: array of strings and a function to test string, returns true if ALL strings pass
 */
function allStringsPass(strings, test) { // test is a FUNCTION - that will return true of false
    // YOUR CODE BELOW HERE //
    // create for loop to iterate through strings
    for (var i = 0; i < strings.length; i++){
        // on each iteration test string
        if(!test(strings[i])){
            return false;
        }
    }
    return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}

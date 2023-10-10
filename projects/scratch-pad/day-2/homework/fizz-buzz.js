// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 * 
 * 
 *  I: None
 *  O: Logs 1-100
 *  C: N/A
 *  E: Multiples of three AND five instead print "FizzBuzz", multiples of three instead print "Fizz", multiples of five instead print "Buzz"
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // iterate through 1-100
    for (var i = 1; i <= 100; i++) {
        // create conditional statement to check for edge cases
        // first for multiples of 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            // if so log "FizzBuzz"
            console.log('FizzBuzz');
        // else if for multiples of 3
        } else if (i % 3 === 0) {
            // if so log "Fizz"
            console.log('Fizz');
        // else if for multiples of 5
        } else if (i % 5 === 0){
            // if so log "Buzz"
            console.log('Buzz');
        // else log current iteration
        } else {console.log(i);}
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
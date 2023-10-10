// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // iterate through array 
    for (var i = 0; i <= array.length; i++){
      // log values
      console.log(array[i]);
    }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // iterate over array backwards
  for (var i = array.length - 1; i >= 0; i--){
    // log values
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create output array
  var keyArray = [];
  // iterate over object
  for (var key in object) {
    // push object key into output array
    keyArray.push(key);
  }
  // return output array
  return keyArray;
  // YOUR CODE ABOVE HERE //
}

//console.log(getObjectKeys({name: 'Peyton', age: 24, home: 'New Orleans'}));


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // iterate over object
  for (var key in object){
    // log keys
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

//console.log(printObjectKeys({name: 'Peyton', age: 24, home: 'New Orleans'}));


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create output array
  var valueArray = [];
  // iterate over object
  for (var key in object){
    // push object values into output array
    valueArray.push(object[key]);
  }
  // return output array
  //console.log(valueArray);
  return valueArray;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // iterate over object
    for (var key in object){
      // log values
      console.log(object[key]);
    }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // create count at 0
  var count = 0;
  // iterate over object
  for (var key in object){
    // add 1 to count each time
    count += 1;
  }
  // return count
  return count;
  // YOUR CODE ABOVE HERE //
}

//console.log(getObjectLength({name: 'Peyton', age: 24, home: 'New Orleans'}));


/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create array to hold object values
  var valuesArr = [];
  // iterate through object
  for (var key in object){
    // unshift values to array
    valuesArr.unshift(object[key]);
  }
  // iterate through array
  for (var i = 0; i < valuesArr.length; i++){
    // log values
    console.log(valuesArr[i]);
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

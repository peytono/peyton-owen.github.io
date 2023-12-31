// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { property } = require("lodash");

// const { values } = require("lodash");

// Functional library => a library of functions

var _ = {}; // _ => underscore object


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


_.identity = function(value) {
    return value;
};

// using dot notation to add a key of identity to the _ object and I'm adding a function as the value

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    // create if statement chain to return the variable type of as a string
    if(typeof value === "string") {
        return "string";
    } else if(typeof value === "undefined") {
        return "undefined";
    } else if(typeof value === "number") {
        return "number";
    } else if(typeof value === "boolean") {
        return "boolean";
    } else if(value === null) {
        return "null";
    } else if(typeof value === "function") {
        return "function";
    } else if(Array.isArray(value)) {
        return "array";
    } else { return "object"}
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    // if array given is not an array return an empty array
    if(!Array.isArray(array)) {
        return [];
    } 
    // if number is not given or not a number return only the first element in array
    if(typeof number !== "number") {
        return array[0];
    // otherwise return the first <number> of items in array
    } else { 
        return array.splice(0, number);
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    if (!Array.isArray(array)) {
        return [];
    }
    if (typeof number !== "number") {
        return array[array.length - 1];
    } else if(number < 0) {
        return [];
    } else if(number > array.length) {
        return array;
    }else { // [1, 2, 3, 4], 3 => [2, 3, 4] need to figure out how to only display the last given elements
        return array.splice(array.length - number);
    };
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // iterate through array to find value
    for(let i = 0; i < array.length; i++) {
        // if found return index number
        if(array[i] === value) {
            return i;
        } 
    }
    // else return -1
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // iterate through array to check for value
    return array.includes(value) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection // array or an object
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)}); // logging e each iteration
*      -> should log "a" "b" "c" to the console
*/


_.each = function(collection, func){
    // if collection is an array
    if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++){
            func(collection[i], i, collection); // invoking the function on each element in the array
        }
    } else { // else it's an object
        for(let key in collection){
            func(collection[key], key, collection); // invoking function on each value in the array
        }
    }
    
}

// _.each => array.forEach()


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above => has params array and value, returns the index of value in array or -1 if no such value in array
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    // create new array that does not hold dupes
    let uniqueArr = [];
    // loop through array
    for(let i = 0; i < array.length; i++){
        // call indexOf w/ args uniqueArr and value on current iteration of array
            // if -1 push to uniqueArr array
        if(_.indexOf(uniqueArr, array[i]) === -1){
            uniqueArr.push(array[i]);
        }

    }
    // returns new array of all elements with no duplicates
    return uniqueArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function(array, func){
    // create array from elements that pass true
    let trueArr = [];
    // loop through 
    for(let i = 0; i < array.length; i++){
        // if call func on element is true pass to trueArr
        if(func(array[i], i, array)){
            trueArr.push(array[i]);
        }
    }
    // returns array of elements that passed true
    return trueArr;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


_.reject = (array, func) => {
    // create array for values that return false
    let falseArr = [];
    // use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
        // call func w/ arguments array[i], i, array testing if false
        if(!func(array[i], i, array)){
            // push value to falseArr
            falseArr.push(array[i]);
        }

    }
    // return falseArr
    return falseArr;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = (array, func) => {
    // create true array and false array
    let trueArr = [], falseArr = [];
    // create a for loop to call func on each element in array
    for(let i = 0; i < array.length; i++){
        // if func call returns truthy
        if(func(array[i], i, array)){
            // push element to truthy array
            trueArr.push(array[i]);
        } else {
            // else func return falsy push to false array
            falseArr.push(array[i]);
        }

    }
    // create partitionArray containing both arrays
    let partitionArray = [trueArr, falseArr];
    // return both arrays
    return partitionArray;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = (collection, func) => {
    // create return value array
    let returnValues = [];
    // determine if collection is array
    if(Array.isArray(collection)){
        // if array test func on every element in array, passing element, index, and collection
        for(let i = 0; i < collection.length; i++){
            // push value into return array
            returnValues.push(func(collection[i], i, collection));
        }
    } else {
        // else object test func on each prop passing in value, key, and collection
        for(let key in collection){
            // push value into return array
            returnValues.push(func(collection[key], key, collection));
        }
    }
    // return array
    return returnValues;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = (array, property) => {
   // invoke _.map() to create a new array of only the values at the input prop
   let output = _.map(array, function(item){
    return item[property];
   });
   // return result of invoking _.map()
   return output;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
    _.every(['a', 1, 'b']); => true
    _.every([null, 1, 2]); => false
*/


_.every = function(collection, func){
    // determine if collection is an array
    if(Array.isArray(collection)){
        //determine if func was not provided
        if(!func){
            for(let i = 0; i < collection.length; i++){
                // determine if the current item is TRUTHY
                if(!collection[i]) {
                    return false;
                }
            }
        //else func was provided
        } else {
            // iterate through elements in collection
            for(let i = 0; i < collection.length; i++){
                // if return for call func on any element is false return false
                if(!func(collection[i])) {
                    return false;
                }
                
            }
        }
    // else its an object
    } else {
        //determine if func was not provided
        if(!func){
            for(let key in collection){
                if(!collection[key]){
                    return false;
                } 
            }
        // func was provided
        } else {
            for(let key in collection){
                if(!func(collection[key], key, collection)){
                    return false;
                }
            }
        }
    }
    return true;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = (collection, func) => {
    // determine if collection is array
    if(Array.isArray(collection)){
        // determine if func is undefined
        if(!func){
            // create loop to iterate through array
            for(let i = 0; i < collection.length; i++){
                // test every value for truthy
                if(collection[i]){
                    // return true if a single value is true
                    return true;
                }
            }
        // else it is
        } else {
            // create for loop to iterate through array
            for(let i = 0; i < collection.length; i++){
                // call func on every element with params current element, idex, collection
                if(func(collection[i], i, collection)){
                    // if true on a single element return true
                    return true;
                }
            }
        }
    // else is object
    } else {
        // determine if func is undefined
        if(!func){
            // create for in loop to iterate through object
            for(let key in collection){
                // test each value for truthy
                if(collection[key]){
                    // return true if a single value is truthy
                    return true;
                }
            }
        // else it is
        } else {
            // create for in loop to iterate through object
            for(let key in collection){
                // call func on every value of object w/ params current value, current key, collection
                if(func(collection[key], key, collection)){
                    // if true on a sigle element return true
                    return true;
                }
            }
        }
    }
    // returns false if nothing is truthy
    return false;
}   

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    let result;

  // determine if the seed value doesn't exist
  if (seed === undefined){
    result = array[0]; // first item in array is assigned to result
    for(let i = 1; i < array.length; i++){
      result = func(result, array[i], i);
    }
  // else it does
  } else {
    result = seed; // result = 0
    for(let i = 0; i < array.length; i++){
      result = func(result, array[i], i); // result is being reassigned the RESULT of invoking the callback function
    }
  }
  return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(target, ...objects){
    Object.assign(target, ...objects);
    return target;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

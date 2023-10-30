'use strict';

// YOU KNOW WHAT TO DO //

// Documentation

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};
module.exports.each = each;


/**
 * identity: Function takes in a value and returns the value unchanged
 * 
 * @param { Any value } value: Function takes in any value.
 * 
 * @returns { Any value }:  Function returns input unchanged.
 * 
 */

function identity(value) {
    return value;
};

module.exports.identity = identity;


/**
 * filter: Function takes in an array and a function. 
 * Function tests every element in array to func function. 
 * Elements that passed true will return in an array.
 * 
 * @param { Array } array: Function takes in an array.
 * @param { Function } func: Function takes in a function to test each value in the array.
 * 
 * @returns { Array }: Function returns a new array of elements that passed true.
 * 
 */

function filter(array, func){
    let trueArr = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            trueArr.push(array[i]);
        }
    }
    return trueArr;
};

module.exports.filter = filter;

/**
 * typeOf: Function takes in any value and returns a string of the value's data type.
 * 
 * @param { Any value } value: Function takes in any value.
 * 
 * @returns { String }: Function returns a string of value data type.
 * 
 */

function typeOf(value){
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

module.exports.typeOf = typeOf;

/**
 * first: Function takes in an array and a number. 
 * It returns the first <number> of elements <array>.  
 * If no array is provided, it returns an empty array. 
 * If no number is given, it returns the first element in <array>.
 * 
 * @param { Array } array: Function takes in an array.
 * @param { Number } number: Function takes in a number.
 * 
 * @returns { Array or Any value }: Function is intended to return an array 
 * containing the first <number> items of <array>. 
 * If no array is provided, it returns an empty array. 
 * If no number is given, it returns the first element in <array>.
 * 
 */

function first(array, number){
    if(!Array.isArray(array)) {
        return [];
    } 
    if(typeof number !== "number") {
        return array[0];
    } else { 
        return array.splice(0, number);
    }
};

module.exports.first = first;

/**
 * last: Function last takes in an array and a number. 
 * It returns the last <number> of elements from array. 
 * If no array is given, retruns an empty array. 
 * If no number is given, the last element in array is returned.
 * 
 * @param { Array } array: Function takes in an array.
 * @param { Number } number: Function takes in a number.
 * 
 * @returns { Array or Any value }: Function is intended to return an array 
 * containing the last <number> of elements from array. 
 * If no array was given, returns an empty array. 
 * If no number was given returns the last item in <array>.
 * 
 */

function last(array, number){
    if (!Array.isArray(array)) {
        return [];
    }
    if (typeof number !== "number") {
        return array[array.length - 1];
    } else if(number < 0) {
        return [];
    } else if(number > array.length) {
        return array;
    }else { 
        return array.splice(array.length - number);
    }
};

module.exports.last = last;

/**
 * idexOf: Function takes in an array and a value. 
 * It searches <array> for <value>, 
 * and if found returns the index of the first occurance of <value>. 
 * If not found, returns -1.
 * 
 * @param { Array } array: Function takes in an array.
 * @param { Any value } value: Function takes in any value.
 * 
 * @returns { Number }: Function returns a number 
 * that indicates the <value>'s index in <array>, 
 * if <value> not found, returns -1.
 * 
 */

function indexOf(array, value){
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        } 
    }
    return -1;
};

module.exports.indexOf = indexOf;

/**
 * contains: Function takes in an array and a value. 
 * It checks <array> to see if it contains <value>, 
 * if so it returns true, otherwise returns false.
 * 
 * @param { Array } array: Function takes in an array.
 * @param { Any value } value: Function takes in any value.
 * 
 * @returns { Boolean }: Function returns boolean
 *  true if <value> is in <array>, else it returns false. 
 * 
 */

function contains(array, value){
    return array.includes(value) ? true : false;
};

module.exports.contains = contains;

/**
 * unique: Function takes in an array. 
 * It creates a new array with values from <array>, 
 * excluding any duplicates, and returns the new array.
 * 
 * @param { Array } array: Function takes in an array.
 * 
 * @returns { Array }: Function returns a new array modified from <array>.
 * 
 */

function unique(array){
    let uniqueArr = [];
    for(let i = 0; i < array.length; i++){
        if(_.indexOf(uniqueArr, array[i]) === -1){
            uniqueArr.push(array[i]);
        }

    }
    return uniqueArr;
};

module.exports.unique = unique;

/**
 * reject: Function takes in an array and a function. 
 * It creates a new array and tests every element in <array> to <function>, 
 * if no function is provided it tests elements for truthy. 
 * All elements that result to false get pushed into new array and returned.
 * 
 * @param { Array } array: Function takes in an array.
 * @param { Function } func: Function takes in a function.
 * 
 * @returns { Array }: Function returns a new array of elements that resulted false.
 * 
 */

function reject(array, func){
    let falseArr = [];
    for(let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            falseArr.push(array[i]);
        }

    }
    return falseArr;
};

module.exports.reject = reject;

/**
 * partition: Function takes in an array and a function. 
 * It creates two new empty arrays, to hold true and false values. 
 * It goes through <array> and calls <function> on every element, 
 * pushes vales that returned true to the true array, and others to the false array. 
 * The function returns a new array containing both true and false arrays.
 * 
 * @param { Array } array: Function takes in an array.
 * @param { Function } func: Function takes in a function.
 * 
 * @returns { Array }: Function returns an new array containing two arrays. 
 * All values in <array> that returned true in one, and all that returned false in another.
 * 
 */

function partition(array, func){
    let trueArr = [], falseArr = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            trueArr.push(array[i]);
        } else {
            falseArr.push(array[i]);
        }

    }
    let partitionArray = [trueArr, falseArr];
    return partitionArray;
};

module.exports.partition = partition;

/**
 * map: Function takes in a collection and a function. 
 * Function creates a new array for output and determines if <collection> is an array or object. 
 * It calls <function> on every element or value in <collection>, 
 * and pushes its return into the output array. Then the funciton returns the output array.
 * 
 * @param { Array or Object } collection: Function takes in an array or object.
 * @param { Function } func: Function takes in a function.
 * 
 * @returns { Array }: Function returns a new array of returns from <function> call on <array> elements.
 * 
 */

function map(collection, func){
    let returnValues = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            returnValues.push(func(collection[i], i, collection));
        }
    } else {
        for(let key in collection){
            returnValues.push(func(collection[key], key, collection));
        }
    }
    return returnValues;
};

module.exports.map = map;

/**
 * pluck: Function takes in an array of objects and a string of a target property name. 
 * Function goes through <array>'s objects one at a time looking for a property matching <string>. 
 * It takes the value of that property and puts into an array it returns.
 * 
 * @param { Array } array: Function takes in an array of objects.
 * @param { String } property: Function takes in a string of a target property name.
 * 
 * @returns: { Array }: Function returns an array of values from target property.
 * 
 */

function pluck(array, property){
    let output = _.map(array, function(item){
        return item[property];
       });
       return output;
};

/**
 * every: Function takes in a collection and a function. 
 * Function first determines if <collection> is array or object, 
 * it then checks to see if <function> was provided. 
 * If no function was provided it checks every element or value truthiness, 
 * if all truthy returns true. If <function> was provided, 
 * it calls <function> on every element or value
 * and returns true if all <funciton> calls returned true. 
 * If any element or value is falsy, or a single <function> call is false, function returns false.
 * 
 * @param { Array or Object } collection: Function takes in a collection, either an array or object.
 * @param { Function } func: Function takes in a function.
 * 
 * @returns { Boolean }: Returns true if <function> call on every element or value in <collection> returned true, 
 * or if no <function> provided, every element or value is truthy. Returns false if any <function> call returns false, 
 * or if no <function> is provided, if any elements or values are falsy. 
 * 
 */

function every(collection, func){
    if(Array.isArray(collection)){
        if(!func){
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]) {
                    return false;
                }
            }
        } else {
            for(let i = 0; i < collection.length; i++){
                if(!func(collection[i])) {
                    return false;
                }
                
            }
        }
    } else {
        if(!func){
            for(let key in collection){
                if(!collection[key]){
                    return false;
                } 
            }
        } else {
            for(let key in collection){
                if(!func(collection[key], key, collection)){
                    return false;
                }
            }
        }
    }
    return true;
};

module.exports.every = every;

/**
 * some: Function takes in a collection and a function. 
 * Function checks if collection is array or object, as well if a function was provided. 
 * Either way it goes through every element or value in <collection> 
 * and either calls <function> on it or checks it for truthy. 
 * If a single item returns true, the function returns true. 
 * If every single things returns false, the function returns false.
 * 
 * @param { Array or Object } collection: Function takes in a collection, either an array or object.
 * @param { Function } func: Function takes in a function.
 * 
 * @returns { Boolean }: Function returns a boolean, 
 * if at least one element or value returned true or is truthy, function returns truthy. 
 * If every element returns false or is falsy, function returns falsy.
 * 
 */

function some(collection, func){
    if(Array.isArray(collection)){
        if(!func){
            for(let i = 0; i < collection.length; i++){
                if(collection[i]){
                    return true;
                }
            }
        } else {
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection)){
                    return true;
                }
            }
        }
    } else {
        if(!func){
            for(let key in collection){
                if(collection[key]){
                    return true;
                }
            }
        } else {
            for(let key in collection){
                if(func(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }
    return false;
};

module.exports.some = some;

/**
 * reduce: Function takes in an array, a function, and a seed. 
 * First the function checks to see if a seed was given, 
 * it either sets the value of result to the given seed,
 * or if none given, the first element in array.
 * It then goes through the array, or the rest of the array, 
 * and reassigns the result to itself plus the calling of <function> on every element. 
 * Then returns the accumulative result.
 * 
 * @param { Array } array: Function takes in an array.
 * @param { Function } function: Function takes in a function.
 * @param { Number or String } seed: Function takes in a seed, typically a number.
 * 
 * @returns: Function returns the accumlative value of result, 
 * after adding calls to <function> on every element in <array> to the seed, 
 * or the first element in array.
 */

function reduce(array, func, seed){
    let result;
    if (seed === undefined){
      result = array[0]; 
      for(let i = 1; i < array.length; i++){
        result = func(result, array[i], i);
      }
    } else {
      result = seed;
      for(let i = 0; i < array.length; i++){
        result = func(result, array[i], i); 
      }
    }
    return result;
};

module.exports.reduce = reduce;

/**
 * extend: Function takes in at least two objects. 
 * Target <object> takes in any properties from other <...objects>. 
 * Function returns modified target <object>.
 * 
 * @param { Object } target: Function takes in an object.
 * @param { Object(s)} objects: Function takes in at least one more object.
 * 
 * @returns { Object }: Function returns target <object>, 
 * after other object properties are copied in.
 * 
 */

function extend(target, ...objects){
    Object.assign(target, ...objects);
    return target;
};

module.exports.extend = extend;
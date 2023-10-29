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
 * @param { Any value }: Function takes in any value.
 * 
 * @returns { Any value }:  Function returns input unchanged.
 * 
 */

function identity(value) {
    return value;
};

module.exports.identity = identity;


/**
 * filter: Function takes in an array and a function. Function tests every element in array to func function. Elements that passed true will return in an array.
 * 
 * @param { Array }: Function takes in an array.
 * @param { Function }: Function takes in a function to test each value in the array.
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
 * @param { Any value }: Function takes in any value.
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
 * first: Function takes in an array and a number. It returns the first <number> of elements <array>.  If no array is provided, it returns an empty array. If no number is given, it returns the first element in <array>.
 * 
 * @param { Array }: Function takes in an array.
 * @param { Number }: Function takes in a number.
 * 
 * @returns { Array or Any value }: Function is intended to return an array containing the first <number> items of <array>. If no array is provided, it returns an empty array. If no number is given, it returns the first element in <array>.
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
 * last: Function last takes in an array and a number. It returns the last <number> of elements from array. If no array is given, retruns an empty array. If no number is given, the last element in array is returned.
 * 
 * @param { Array }: Function takes in an array.
 * @param { Number }: Function takes in a number.
 * 
 * @returns { Array or Any value }: Function is intended to return an array containing the last <number> of elements from array. If no array was given, returns an empty array. If no number was given returns the last item in <array>.
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
 * idexOf: Function takes in an array and a value. It searches <array> for <value>, and if found returns the index of the first occurance of <value>. If not found, returns -1.
 * 
 * @param { Array }: Function takes in an array.
 * @param { Any value }: Function takes in any value.
 * 
 * @returns { Number }: Function returns a number that indicates the <value>'s index in <array>, if <value> not found, returns -1.
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
 * contains: Function takes in an array and a value. It checks <array> to see if it contains <value>, if so it returns true, otherwise returns false.
 * 
 * @param { Array }: Function takes in an array.
 * @param { Any value }: Function takes in any value.
 * 
 * @returns { Boolean }: Function returns boolean true if <value> is in <array>, else it returns false. 
 * 
 */

function contains(array, value){
    return array.includes(value) ? true : false;
};

module.exports.contains = contains;

/**
 * unique: Function takes in an array. It creates a new array with values from <array>, excluding any duplicates, and returns the new array.
 * 
 * @param { Array }: Function takes in an array.
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
 * reject: Function takes in an array and a function. It creates a new array and tests every element in <array> to <function>, if no function is provided it tests elements for truthy. All elements that result to false get pushed into new array and returned.
 * 
 * @param { Array }: Function takes in an array.
 * @param { Function }: Function takes in a function.
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
 * partition: Function takes in an array and a function. It creates two new empty arrays, to hold true and false values. It goes through <array> and calls <function> on every element, pushes vales that returned true to the true array, and others to the false array. The function returns a new array containing both true and false arrays.
 * 
 * @param { Array }: Function takes in an array.
 * @param { Function }: Function takes in a function.
 * 
 * @returns { Array }: Function returns an new array containing two arrays. All values in <array> that returned true in one, and all that returned false in another.
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
 * map:
 */

/**
 * pluck:
 */

/**
 * every:
 */

/**
 * some:
 */

/**
 * reduce:
 */

/**
 * extend:
 */
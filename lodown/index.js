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
 * @param { Any value }: Function takes in any value
 * 
 * @returns { String }: Function returns a string of value data type
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
 * @returns { Array or Any value }: Function is intended to return the first <number> items of array. If no array is provided, it returns an empty array. If no number is given, it returns the first element in <array>.
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
 * last:
 */

/**
 * idexOf:
 */

/**
 * contains:
 */

/**
 * unique:
 */

/**
 * reject:
 */

/**
 * partition:
 */

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
'use strict';

// YOU KNOW WHAT TO DO //

// Documentation
//each documentation
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
}
module.exports.each = each;

/**
 * identity: Function takes in a value and returns the value unchanged
 * 
 * @param { Any value }: Function takes in any value.
 * @returns { Any value }:  Function returns input unchanged.
 * 
 */

function identity(value) {
    return value;
};

module.exports.identity = identity;

/**
 * filter: (1-3 sentnces describing what the function does)
 * 
 * @param { Array }: Function takes in an array.
 * @param { Function }: Function takes in a functino to test each value in the array
 * 
 * @returns { Array }: Function returns a new array...
 */

function filter(){


}

module.exports.filter = filter;
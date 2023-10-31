// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar'); // underbar library

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./peyton-owen.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */


// _.filter()
var maleCount = function(array) {
    let males = _.filter(array, customer => customer.gender === 'male');
    
    return males.length;
};

var femaleCount = function(array) {
    let numberFemales = _.reduce(array, function(accumulator, customer){
        // determine if customer is female
        if(customer.gender === 'female'){
            // if true increment accumulator
            accumulator += 1;
            return accumulator;
        } else {
            return accumulator;
        }
    }, 0);

    return numberFemales;
};

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

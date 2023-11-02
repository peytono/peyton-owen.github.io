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


// find oldest customer's name
var oldestCustomer = (array) =>{
    // use reduce to access every customers age and find the oldest
    let oldest = _.reduce(array, (currentOldest, customer) => {
        // determine if customer is older than current oldest customer
        if(currentOldest.age < customer.age){
            // if so reassign current oldest to current customer
            currentOldest = customer;
            // return the current oldest object
            return currentOldest;
        } else {
            // return the current oldest object
            return currentOldest;
        }
    });
    // return string of oldest customer's name
    return oldest.name;
};

var youngestCustomer = (array) => {
    // use reduce to access every customer object
    let youngest = _.reduce(array, (currentYoungest, customer) => {
        // determine if current customer is younger than currentYoungest
        if(currentYoungest.age > customer.age){
            // if so reassign currentYoungest to current customer
            currentYoungest = customer;
            // return currentYoungest
            return currentYoungest;
            // else do not change current youngest
        } else {
            return currentYoungest;
        }
    });
    // return the youngest customers name
    return youngest.name;
};

// find the average balance of all customers
var averageBalance = (array) => {
    // use map to create an array of account balance numbers
    let balances = _.map(array, (i) => {
        return Number(i.balance.replace(/[$,]/g, ''));
    });
    // use reduce to add total of balances
    let totalBalances = _.reduce(balances, (accumulator, current) =>{
        accumulator += current;
        return accumulator;
    }, 0);
    // divide total balances by length of balcances
    let averageB = totalBalances / balances.length;
    // return average balance
    return averageB;
};

// find how many customers names begin with a given letter
var firstLetterCount = (array, letter) => {
    // use reduce to go through array and accumulate amount of target first letter names
    let amountFirstLetter = _.reduce(array, (accumulator, current) => {
        // if current first letter matches letter add 1 to accumulator
        if(current.name[0].toLowerCase() === letter.toLowerCase()){
            return accumulator + 1;
        } else {
            return accumulator;
        }
    }, 0);
    return amountFirstLetter;
};

// find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = (array, customer, letter) => {
    // select the object in array that belongs to customer using reduce and select the friends property
    let customerForSearch = _.reduce(array, (nameToMatch, current) => {
        if(current.name === customer){
            nameToMatch = current;
            return nameToMatch;
        } else {
            return nameToMatch;
        }
    });
    let customerFriends = customerForSearch.friends;
    // use reduce to go through customerFriendsForSearchs and accumulate first letter friends
    let amountFriendFirstLetter = _.reduce(customerFriends, (accumulator, current) => {
        //console.log(customerFriends);
        if(current.name[0].toLowerCase() === letter.toLowerCase()){
            //console.log(accumulator);
            return accumulator + 1;
        } else {
            //console.log(accumulator);
            return accumulator;
        }
    }, 0);

    return amountFriendFirstLetter;
};

// find the customers' names that have a given customers's name in their friends list
var friendsCount = (array, name) => {
   // filter through friends list, looking for object that have name in friends array
    let friendsArr = _.filter(array, (customer) => {
        for(let i = 0; i < customer.friends.length; i++){
            if(customer.friends[i].name === name){
                return true;
            };
        }
        return false;
    });
    let friendList = _.map(friendsArr, customer => customer.name);
    return friendList;
};

// Find the three most common tags among all customers' associated tags
var topThreeTags = (array) => {
    // use reduce to create an object counting the use of tags
    let tagCount = _.reduce(array, (acc, current) => {
        for(let i = 0; i < current.tags.length; i++){
            if(acc.hasOwnProperty(current.tags[i])){
                acc[current.tags[i]] += 1;
                
            } else {
                acc[current.tags[i]] = 1;
                
            }
        }
        return acc;
    }, {});
    console.log(tagCount);
};


/* 
Create a summary of genders, the output should be:
{
    male: 3,
    female: 4,
    non-binary: 1
}
*/
var genderCount = (array) => {
    let genderBreakdown = _.reduce(array, (acc, current) => {
        if(acc.hasOwnProperty(current.gender)){
            acc[current.gender] += 1;
            return acc;
        } else {
            acc[current.gender] = 1;
            return acc;
        }
    }, {});
    return genderBreakdown;
};


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

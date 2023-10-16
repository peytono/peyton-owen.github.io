/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'cat';
animal['name'] = 'Prince';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'meow';
noises.push('trill');
noises.unshift('growl');
noises[noises.length] = 'purr';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push('chirping');

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * Bracket or dot notation
 *  - dot notation can only be used when using literal key name
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * Bracket notation allowing you to access elements on arrays 
 *  - it's accessed by index value, which does not have to be hard coded
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);

console.log(animals);

var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);

console.log(animals);

var dog = {
  species: 'dog',
  name: 'Buddha',
  noises: ['bark', 'whine']
};

var dog2 = {
  species: 'dog',
  name: 'Jax', 
  noises: ['howl', 'growl']
}

animals.push(dog, dog2);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assigning friends to an array because it's a collection of names w/o any corresponding keys, all values are just examples of friends
var friends = [];

function getRandom(animals){
  return Math.floor(Math.random() * animals.length);
}

console.log('index: ', getRandom(animals));

friends.push(animals[getRandom(animals)].name);
console.log('friends: ', friends);

animals[0]['friends'] = friends;

console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
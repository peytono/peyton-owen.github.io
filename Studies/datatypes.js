/**
 *  DATA TYPES:
 *  0. Every value, or anything you can assign to a variable, in JavaScript has a data type. The data type will either be considered complex or primitive.
 *  1. Number
 *  2. String
 *  3. Boolean
 *  4. Array
 *  5. Object
 *  6. Function
 *  7. undefined
 *  8. null
 *  9. NaN
 *  10. Infinity and -Infinity
 *  11. JavaScript complex data types are Arrays, Objects, and Function, and they are copied by reference. The others are considered primitive/simple data types and are copied by value.
 *  12. Primitive data types are copied by value, if you assign a variable to a simple variable it will take a copy of that value to reassign it. It will not reference that simple variable again. If you assign a variable to a complex data type, they are now referencing the same objects. Any mutations to the complex data type will change both variables.
 */

// 1. Number //
/*
 Number values represent floating-point numbers
*/
let yearOfBirth = 1999; // the data type of yearOfBirth is a number
 yearOfBirth -= 1; // you can perform arithmetic operations on numbers - it's now equal to 1998

// 2. String // 
/*
 String are useful for holding data that can be represented in text form.
*/
let string = 'apples'; // the data type of variable string is a string
let newString = string.concat('/oranges'); // you can use methods on strings to return new strings - newString is now assigned to 'apples/oranges'

// 3. Boolean //
/*
 Booleans represent a truth value of true or false.
*/
let isAwake = false; // the data type of isAwake is boolean - similar to an on or off switch

if(time < 8 || time > 23){ 
    isAwake = false; // if before 8a or after 11pm isAwake is set to false
} else {
    isAwake = true; // otherwise isAwake is set to true
}

// 4. Array //
/*
 Arrays allow storing a collection of multiple items under a single variable name. 
 They are non assosciative arrays. They are zero indexed, 
 every value has an index starting at zero by their placement.
*/
let fruits = ['apple', 'orange', 'kiwi', 'mango', 'pineapple']; // the data type of fruits is an array - a complex data type

fruits.pop(); // this removes the last element of fruits and returns it - there are many things you can do with arrays

// 5. Object //
/* 
 Objects are used to store various keyed collections 
 and more complex entities. Objects are associative 
 and inside are key/value pairs. The values should correspond 
 to a relating key.
*/
let person = { // initializes a person object with relating key/value pairs
    firstName: 'Peyton',
    lastName: 'Owen',
    age: 24,
    isStudent: true
};

person.completedCourses = ['Prep']; // adds a property completedCourses with a value of an array containing string 'Prep'

// 6. Function //
/*
 A function can be considered a subprogram that can be called by code.
  A function contains a function body with a statement, or sequence of statements. 
  Values can optionally be passed to a function as parameters, and the function will return a value.
  Functions are considered first-class objects. They can optionally pass in other functions and return other functions.
*/

function logMessage(){ // declares function logMessage
    console.log('Have a fantastic day!'); // when called will log string to console
}

// 7. undefined //
// undefined represents the absence of a value

var ladyBug; // ladyBug currently has a value of undefined

// 8. null //
// The null value represents the intintional absence of any object value.
function guavaCheck(array){ 
    if(array.includes('guava')){ // checks if array includes string guava
      return 'includes guava'; // returns a string if array includes guava
    } else {
      return null;  // returns null if guava is not in array
    } 
  }

console.log(guavaCheck(fruits)); // will return null

// 9. NaN //
/*
 NaN is a global property representing Not-A-Number.
 When trying to perfom a mathematical operation on a non number, 
 you will often get a return of NaN.
*/
console.log(Math.abs('string value')); // this would return NaN

// 10. Infinity and -Infinity //
/*
 Infinity global property is a numeric value representing inifity. 
 Preceding it with - makes it represent negative infinity.
*/

console.log(1 / 0); // this will return the value Infinity
console.log(-1 / 0); // this will return the value -Infinity

// 11. Difference between primitive/simple and complex data types //
/*
 Object, Arrays, and Functions are considered complex data types, the others are all primitive/simple.
 The primitive data types can only hold on to one value, of a single data type.
 Complex data types can contain all other types of data inside of them.
 Primitive/simple data types are copy by value, while complex data types are copy by reference.
*/

var newerString = 'task9'; // this string cannot hold a seperate data type for 9
var array = [
    'task', // string
    9, // number
    true, // boolean
    null, // null
    undefined, // undefined
    {  // object with no name
        vehicle: 'car', 
        make: 'toyota', 
        year: 2002, 
        canDrive: true, 
    },
    function(x, y){ // anonymous function
        return x + y;
    }
];


// 12. Primitive/Simple data types are copy by value, while complex data types are copy be reference. //

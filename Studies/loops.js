/**
 *  LOOPS:
 * 
 *  0. Loops allow us to easily repeat code. They're important in keeping code DRY(Don't Repeat Yourself) and not have to copy and paste things forever.  
 * 
 *  1. Three major JavaScript Loops are while, for, and for-in loops. 
 *      While Loops test a specified condition for a truthy value, and will execute the statement inside as long as it's true. The condition check happens before the loop statement is executed, if false the program exits the loop and will no longer execute code. The while loop requires incrementation or decrementation so that it doesn't run infinitely and crash your program.
 *      For Loops, like the while loop test a specified condition for a truthy value in order to execute code. Instead of just the condition in parenthesis the for loop is setup with initialization of a variable, a condition, and an afterthought(incrementation or decrementation to ensure the code stops), all seperated by a semicolon. Afterwhich a code block can be executed, if condition is true.
 *      For...in Loops allow us to iterate over an object. Where you would have a condition in other loops, in a for in loop you declare a variable followed by, the word 'in' and the objects name or using a keyword for an object. Again, afterwards is where you will execute your code.
 * 
 *  2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0.
 * 
 *  3. Loop over an Array, forwards and backwards
 * 
 *  4. Loop over an Object
 * 
 * 
 *  */

// 1. While, For, and For-In Loops //

// While
var i = 0; // initializes variable i to 0
while (i < 25) { // while loop will execute as long i is less than 25
    console.log(i); // everytime code is executed, will print i to the console
    i++; // same as i = i + 1, will add one to the variable i
}

// For
var numbers = []; // initializes a variable numbers to an empty array
for (var x = 5; x <= 125; x += 5) { // for loop needs the formatting for (start; condition; afterthought) { statement}. We're initializing variable x to 5, telling it to continue until and including 125, and to increment by 5 every time.
    numbers.push(x); // everytime the loop is executed the current value of x will be added to the end of the numbers array
}
console.log(numbers); // [5, 10, 15, 20, 25...125]

// For-in
var person = { 
    firstName: 'Peyton', 
    lastName: 'Owen',
    age: 24,
    isStudent: true
}; // initializes object person to some key/value pairs of different data types
for (var key in person) {
    console.log('key name: ' + key); // will log 'key name: ' followed by the current iterations key
    console.log('key value: ' + person[key]); // will log 'key value: ' followed by the current keys value
}


// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0. //

// Loop forward couting up to some limit
var tooManyNumbers = [] // initializes a variable numbers to an empty array
for (var a = 0; a < 200; a++){ // the for loop will start at zero, will go until a is less than 200, and will increment by 1 everytime
    tooManyNumbers.unshift(a); // will add the current value of a to the beginning of the tooManyNumbers array on every iteration
}

// Loop backward counting down to 0
var threeHundredToZero = [];
for (var y = 300; y >= 0; y--){
    threeHundredToZero.push(y);
}


// 3. Loop over an Array, forwards and backwards //

// Loop forwards over an array
for (var index = 0; index < numbers.length; index++){ // iterates through numbers array starting at the 0 index[5, 10, 15...125]
    numbers[index] += 5; // adds 5 to every number in array one at a time
}
console.log(numbers); // logs numbers array to console [10, 15, 20, 25...130]

// Loop backards over an array
for (index = numbers.length - 1; index >= 0; index--){ // iterates through numbers array starting at the last index
    numbers[index] -= 5; // subtracts 5 from every number in a array one at a time
}
console.log(numbers); // logs numbers array to console [5, 10, 15...125]


// 4. Loop over an object //
var personCopy = {}; // initializes personCopy to an empty object
for (var key in person) { // starts for in loop to iterate over person object
    personCopy[key] = person[key]; // adds the current key in iteration to key in personCopy w/ value being the current iterations value
}
console.log(personCopy); // logs personCopy which is now the same as person
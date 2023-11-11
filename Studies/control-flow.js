/**
 *  CONTROL FLOW:
 *  0. Control flow is the order in which your statements are executed in your program. The natural flow is to run a line of code in order from the first line to the last time, but often we will use structures that change that. Conditional statements allow for lines of code that are only executed if a statement evalutes to true(or a case).
 *  1. If
 *  2. Else-if
 *  3. Else
 *  4. Switch
 */

// 1. If //
/*
 An if statement is the most simple conditional statement. 
 It runs the encased code only if the condition evaluates to true, 
 otherwise it just skips it.
*/

if(6 > 10){ // this will evalute to false, 6 will never be larger than 10
    console.log('big six!'); // this console.log will never execute
}

// 2. Else-if //
/*
 After an if statement, else if statements can be chained, 
 they will only be checked for truthiness if the previous statements evaluated false.
 If the else if statement is reached and is true, it will run and exit.
 The very first statement that evaluates true in an else if chain will run, 
 the program will then exit the else if chain. 
 If none are true, and there is no else statement, nothing will execute.
*/

let message = 'Hello!'; // initialized message variable to 'Hello!'

function smallMessage(){
    if(message.length < 2){ //    | if message is less than 2 characters 
        return 'tiny message'; // v this statement is returned and exits program
    } else if(message.length < 3){ //  | else if message is less than 3 characters
        return 'small message'; //     v this statement is returned and exits program
    } else if(message.length < 5){   //           | if message is less than 5 characters 
        return 'not quite average word length';// v this statement is returned and exits program
    }
    return; // none of these statements were true so none of the statements were returned and this function will return undefined
}

// 3. Else //
/*
 An else statement can be chained after an if statement or an else if chain, 
 this will run only if every statement before it evaluated false.
*/

function smallMessage1(){
    if(message.length < 2){ //    | if message is less than 2 characters 
        return 'tiny message'; // v this statement is returned and exits program
    } else if(message.length < 3){ //  | else if message is less than 3 characters
        return 'small message'; //     v this statement is returned and exits program
    } else if(message.length < 5){   //           | if message is less than 5 characters 
        return 'not quite average word length';// v this statement is returned and exits program
    } else {
        return 'ok sized message'; // this statement is the only one that runs because every other message evaluated false
    }
}

console.log(smallMessage1());

// 4. Switch //

function colorReturnString(color){
    switch (color) { // starts the switch statement and will test color to these cases and will log the default case if no other cases match
        case 'red': // tests if color is equal to red
            console.log('roses'); 
            break; // a break line must be added at the end of every case and if it reaches a break it will exit the switch statement
        case 'orange': // tests if color is equal to orange
            console.log('orange...the fruit'); 
            break;
        case 'yellow': // tests if color is equal to yellow
            console.log('yarrow');
            break;
        case 'green': // tests if color is equal to green
            console.log('grass');
            break;
        case 'blue':
            console.log('blueberries'); // tests if color is equal to blueberries
            break;
        case 'purple': // tests if color is equal to purple
            console.log('plums');
            break;
        default: // if no above case was true, will log the below statement
            console.log('ooo you chose outside the rainbow');
    }
}

colorReturnString('teal'); // logs 'ooo you chose outside the rainbow' 
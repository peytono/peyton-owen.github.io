
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
triangles(3);
 
  #
  ##
  ###

*/
function triangles(x) { // x represents the number of 'rows' in the triangle
  // create string pound
  let pound = '#';
  // create for loop to iterate until x, starting at one and increasing by one
  for(let i = 1; i <= x; i++){
    // log amount x number of # each iteration
    console.log(pound.repeat(i));
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// should accept two params, count and end
function fizzBuzz(count, end) {
  // should create a for loop starting at count that iterates through end
  for(count; count <= end; count++) {
    // if count is divisble by 3 and 5 log fizzbuzz
    if(count % 3 === 0 && count % 5 === 0) {
      console.log('fizzbuzz');
    // else if count is divisible by 3 log fizz
    } else if(count % 3 === 0) {
      console.log('fizz');
    // else if count is divisible by 5 log buzz
    } else if(count % 5 === 0) {
      console.log('buzz');
    // else log count
    } else {
      console.log(count);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) { // x represents the rows and columns of the chessboard
  

}
/* drawChessboard(2); LOGS
 #
#
*/
// " #\n# \n"

/* drawChessboard(3); LOGS
  #
 # #
  #
*/
// " # \n# #\n # \n"

/* drawChessboard(4); LOGS
 # #
# # 
 # #
# #
*/
// " # #\n# # \n # #\n# # \n"

/* drawChessboard(5); LOGS
 # # 
# # #
 # #
# # #
 # #
*/
// " # # \n# # #\n # # \n# # #\n # #\n"

/* drawChessboard(6); LOGS
 # # #
# # #
 # # #
# # #
 # # #
# # #
*/
// " # # #\n# # # \n # # #\n# # # \n # # #\n# # # \n"

/* drawChessboard(7); LOGS
 # # # 
# # # #
 # # #
# # # #
 # # #
# # # #
 # # #
*/
// " # # # \n# # # #\n # # # \n# # # #\n # # # \n# # # #\n # # # \n"

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

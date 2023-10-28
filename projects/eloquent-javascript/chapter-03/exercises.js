////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  return Math.min(x, y);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(x) {
  if(x < 0){
    x = Math.abs(x);
  } 
  if(x == 0){
    return true;
  } else if(x == 1){
    return false; 
  } else {
    return isEven(x - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  let charCount = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i].toLowerCase() === char.toLowerCase()){
      charCount++;
    }
  }
  return charCount;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let bCount = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i].toLowerCase() === "b"){
      bCount += 1;
    }
  }
  return bCount;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};

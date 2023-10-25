//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var objectKeys = Object.keys(object);
    return objectKeys.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    stringValues = [];
    for(var key in object){
        if(typeof object[key] === 'string'){
            stringValues.push(object[key]);
        }
    }
    return stringValues.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array";
    } else { return "object" };
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var firstChar = string.slice(0, 1);
    firstChar = firstChar.toUpperCase();
    var leftoverString = string.slice(1);
    return firstChar + leftoverString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var stringsArr = string.split(' ');
    var newStringsArr = [];
    for(var i = 0; i < stringsArr.length; i++) {
        var firstChar = stringsArr[i].slice(0, 1);
        firstChar = firstChar.toUpperCase();
        var leftoverString = stringsArr[i].slice(1);
        newStringsArr.push(firstChar + leftoverString);
    }
    return newStringsArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var firstChar = object.name.slice(0, 1);
    firstChar = firstChar.toUpperCase();
    var leftoverString = object.name.slice(1);
    var message = "Welcome " + firstChar + leftoverString + "!";
    return message;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var capitalizedWords = [];
    for(var key in object) {
        var firstChar = object[key].slice(0, 1).toUpperCase();
        var leftoverString = object[key].slice(1);
        capitalizedWords.push(firstChar + leftoverString);
    }
    return capitalizedWords[0] + " is a " + capitalizedWords[1];
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.hasOwnProperty('noises') && object.noises.length > 0){
        return object.noises.join(' ');
    } else { return "there are no noises"; }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)) {
        return true;
    } else { return false; }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(!object.hasOwnProperty('friends')) {
        return false;
    } else if(object.friends.includes(name)) {
        return true;
    } else { return false; }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//takes in a name and a list of people, and returns a list of names that the name is not friends with
function nonFriends(name, array) {
    // create array of friends
    let friends = [];
    // iterate through objects in data 
    for(let i = 0; i < array.length; i++){
        // for every object that's not the input name 
        // does jimmy exist in friends array
        if(name !== array[i].name && !array[i].friends.includes(name)){
            // if so push into array of friends
            friends.push(array[i].name);
        }

    }
    // return array of friends
    return friends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i = 0; i < array.length; i++) {
        if (object.hasOwnProperty(array[i])) {
            delete object[array[i]];
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // create new array that will not hold duplications
    let noDups = [];
    // loop through array
    for(let i = 0; i < array.length; i++){
       // if current element does not exist in noDups
       if(!noDups.includes(array[i])){
           // add to noDups
            noDups.push(array[i]);
       }
    }
    // return noDups array
    return noDups;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
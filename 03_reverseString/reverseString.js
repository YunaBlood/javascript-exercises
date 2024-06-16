//Initalize parameters to reverse and return input reversed
const reverseString = function(string) {
//Create a variable that can store original string
//Create variable that store the result reversed
let reversed = "";
// Make a for loop to reverse the string
// for(let i = string.length - 1; i >= 0; i--){
//     reversed += string[i];
// }

//METHOD 2
//Use split join and reverse function method
reversed = string.split('').reverse().join('');

return reversed;

};


// Do not edit below this line
module.exports = reverseString;
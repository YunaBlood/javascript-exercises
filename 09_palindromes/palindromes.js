const palindromes = function (str) {
  //variable that store all string and number on the bracket
  const regex = /[^a-z0-9]/g;
  //Create a clean string which will transform it on lowerCase and replace the string that are in the regex by whitespace
  const cleanStr = str.toLowerCase().replace(regex, "");
  //Store the cleanString and split it reverse it and join for comparison with the clean string
  const reverseStr = cleanStr.split("").reverse().join("");
  //Compare the cleanStr with the reverseStr
  const isPalindrome = cleanStr === reverseStr;
  //Return true or false
  return isPalindrome;
  // if (str === str) {
  //   return true;
  // } else {
  //   return false;
  // } //Work but not for all test the one with return true and unevenly space number need to remove the char before comparison
};

// Do not edit below this line
module.exports = palindromes;

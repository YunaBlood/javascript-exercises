const palindromes = function (str) {
  const regex = /[^a-z0-9]/g;
  const cleanStr = str.toLowerCase().replace(regex, "");
  const reverseStr = cleanStr.split("").reverse().join("");
  const isPalindrome = cleanStr === reverseStr;
  return isPalindrome;
  // if (str === str) {
  //   return true;
  // } else {
  //   return false;
  // } //Work but not for all test the one with return true and unevenly space number need to remove the char before comparison
};

// Do not edit below this line
module.exports = palindromes;

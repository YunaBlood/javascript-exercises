const add = function (number, secondNumber) {
  return number + secondNumber;
  // addNumber = number + secondNumber;
  // return addNumber;
};

const subtract = function (number, secondNumber) {
  return number - secondNumber;
  // subNumber = number - secondNumber;
  // return subNumber;
};

const sum = function (number) {
  return number.reduce((total, current) => total + current, 0);
  // result = 0;
  // for (let i = 0; i < number.length; i++) {
  //   result += number[i];
  // }
  // return result;
};

const multiply = function (number) {
  return number.reduce((total, multi) => total * multi, 1);
  // result = 1;
  // for (let i = 0; i < number.length; i++) {
  //   result *= number[i];
  // }
  // return result;
};

const power = function (number, secondNumber) {
  return Math.pow(number, secondNumber);
  // result = 1;
  // for (let i = 0; i < secondNumber; i++) {
  //   result *= number;
  // }
  // return result;
};

const factorial = function (number) {
  result = 1;
  if (number === 0) {
    return 1;
  }
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

const fibonacci = function (countNumber) {
  let count;
  count = countNumber;

  if (count < 0) return "OOPS";
  if (count == 0) return 0;

  let firstNumber = 1;
  let secondNumber = 0;

  for (let i = 2; i <= count; i++) {
    let sum = firstNumber + secondNumber;
    secondNumber = firstNumber;
    firstNumber = sum;
  }
  return firstNumber;
};
// Do not edit below this line
module.exports = fibonacci;

const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(...args) {
  let arr = [];
  for (item of arguments) {arr.push(item)}
	return arr.flat().reduce((prev, arg) => prev += arg, 0);
};

const multiply = function(...args) {
  let arr = [];
  for (item of arguments) {arr.push(item)}
	return arr.flat().reduce((prev, arg) => prev *= arg);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	result = 1;
  for (i = 2; i < num + 1; i++) {
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
  factorial
};

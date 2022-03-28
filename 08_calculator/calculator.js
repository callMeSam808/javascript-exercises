const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numList) {
	let listSum = 0;
  for (let num of numList) {
    listSum += num;
  }
  return listSum;
};

const multiply = function(numList) {
  let listProduct = numList[0];
  for (let i = 1; i < numList.length; i++) {
    listProduct *= numList[i];
    }
  return listProduct;
};

const power = function(base, power) {
	let result = base;
  for (let i = 1; i < power; i++) {
    result *= base;
  }
  return result;
};


const factorial = function(num) {
	if (num < 2) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
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

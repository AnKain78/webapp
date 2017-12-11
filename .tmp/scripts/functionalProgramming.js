"use strict";

function createNumbers(count) {
  var arr = [];
  for (var i = 1; i <= count; i++) {
    arr.push(i);
  }
  return arr;
}

var numbers = createNumbers(1000);

//var squareNumbers = numbers.map(function(num) {return num * num});
var squareNumbers = numbers.map(function (num) {
  return num * num;
});
var productNumbersSquareNumbers = numbers.map(function (num, index) {
  return num * squareNumbers[index];
});

console.log(numbers);
console.log(squareNumbers);
console.log(productNumbersSquareNumbers);
//# sourceMappingURL=functionalProgramming.js.map

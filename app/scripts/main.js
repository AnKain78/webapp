let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//var squareNumbers = numbers.map(function(num) {return num * num});
let squareNumbers = numbers.map((num) => num * num);
let productNumbersSquareNumbers = numbers.map((num, index) => {
    return num * squareNumbers[index];
})

console.log(numbers);
console.log(squareNumbers);
console.log(productNumbersSquareNumbers);

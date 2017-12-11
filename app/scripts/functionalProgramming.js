function createNumbers(count) {
    let arr = []
    for (var i = 1; i <= count; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  let numbers = createNumbers(1000);
  
  
  //var squareNumbers = numbers.map(function(num) {return num * num});
  let squareNumbers = numbers.map((num) => num * num);
  let productNumbersSquareNumbers = numbers.map((num, index) => {
    return num * squareNumbers[index];
  })
  
  console.log(numbers);
  console.log(squareNumbers);
  console.log(productNumbersSquareNumbers);
  
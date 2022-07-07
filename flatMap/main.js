// defining an array
let numbers = [1, 2, 3, 4, 5];

// each element of the array is squared and later flattened
const resultingArray = numbers.flatMap((x) => [x ** 2]);

console.log(resultingArray);
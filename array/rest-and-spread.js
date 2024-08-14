const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8];
const myArray = ["John", "robel", "Mary"];

// Spread operator
const finalNums = [...num1, ...num2, ...myArray]; // into single array

// Rest operator
function restOperator(...numbers) {
  return numbers;
}

// Concat
const concatted = num1.concat(num2, myArray);
console.log("concat:", concatted);
console.log("Final:", finalNums);

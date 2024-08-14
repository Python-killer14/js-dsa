const squarNSum = (arr) => {
  const squareTotal = arr.reduce((acc, num) => acc + Math.pow(num, 2));
  return squareTotal;
};

console.log(squarNSum([1, 2, 2]));

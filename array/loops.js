const myArray = [1, 2, 3, 4, 5, 6];

function myWhileLoop() {
  console.log("While loop ---");
  let i = 0;
  while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
  }
}

function forLoop() {
  console.log("For loop ---");

  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
}

function mapper() {
  console.log("Mapper -----");
  myArray.map((item, indx, array) => {
    console.log(item, indx, array);
  });
}

function myFilter() {
  console.log("My filter -----");
  const filt = myArray.filter((item) => {
    return item > 2;
  });

  // console.log(filt);
  return filt;
}

function reduceFunc() {
  return myArray.reduce((acc, item) => acc + item);
}

function mySome() {
  return myArray.some((ele) => ele < 4);
}

function myEvery() {
  return myArray.every((ele) => ele < 10);
}

function myFind() {
  return myArray.find((ele) => ele < 4);
}

let d = myArray.every((ele) => ele <= 6);

console.log("ds:", d);

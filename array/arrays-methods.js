const array = [1, 2, 8, 3, 5, 4, 6, 7];
const myArray = ["robel", "john", "mary"];
const arrray3 = ["John", "Mary"];
let mixedArray = [
  1,
  2,
  3,
  ["Joy", "Happy"],
  [["Love", 23, [44, 55, 5454]], "Golden ", "Apples"],
  true,
];
const users = ["Gilda", "Mary", "Paul", "Jay"];

// Remove and Add from array
// array.pop(); // Removes the Last
// array.shift(); // Removes the First
// array.unshift("rob2"); //Adds to the First
// array.push("banana"); // Adds to the Last

// myArray.concat(arry, array3); //Concat  merges more arrays into single

// Slice and splice

// console.log("arr:", array);
// const newSlice = array.slice(-3, -1); // from -3 to -1 (exclud -1)

// let newSplice = array.splice(2, 5, "I deleted them"); // Removes elements and can add new inplace of the removed
// console.log(newSplice); //[3,4,5,6,7] returns only removed items array after modifiying the original
// console.log("Array: ", array); //[1,2, 'I deleted them']

// Fill method
// let filledArr = array.fill("Replaced", 4, 6); // Replaces every elements starting from the 2nd params
// console.log("filed:", filledArr);

// Index finding
// const indx = array.findIndex((item) => item === 6);
// const indx = array.indexOf(3);

//Retursn  a new array with all sub-array elements concatenated
// const myFlat = mixedArray.flat(3);
// console.log("flat:", myFlat);

// Reverse
// const reversed = users.reverse();
// console.log("Reversed users: ", users); //[ 'Jay', 'Paul', 'Mary', 'Gilda' ]
// console.log("Reversed nums: ", array.reverse()); // [7, 6, 4, 5,3, 8, 2,  1]

// Sorting array desc and ascending order
// let sorted = array.sort();
// let sorted = array.sort((a, b) => a - b);
// let descSorted = array.sort((a, b) => b - a);
// console.log("Sorted asc:", sorted);
// console.log("Sorted desc:", descSorted);

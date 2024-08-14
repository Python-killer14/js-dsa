const nums = [1, 2, 3, 4, 5, 6];

const secondLargestNumber = (arr) => {
  // First set to remove repeated nums
  let uniqueNums = Array.from(new Set(nums));

  // Then sort order in descending order
  let sortedAsc = uniqueNums.sort((a, b) => b - a);
  if (sortedAsc.length < 2) {
    return -1;
  }

  // Then access the 2nd greatest number using array slice[]
  return uniqueNums[1];
};

// console.log(secondLargestNumber(nums));

function secondLargsetOptimized(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// let slg = secondLargsetOptimized([10, 5, 10]);
// console.log(slg);

function rotate(nums, k) {
  let numsSize = nums.length;

  if (numsSize < 2) return nums;

  //  Ensure the k is less than the numsSize
  k = k % numsSize;

  const rotated = nums.splice(numsSize - k, k); //O(n)
  nums.unshift(...rotated);
  return nums;
}

// console.log(rotate(nums, 3));

// [1,2,3,4,5,6];
function rotateOptimized(arr, k) {
  let arrSize = arr.length;

  k = k % arrSize;
  myReverse(arr, 0, arr.length - 1);
  myReverse(arr, 0, k - 1);
  myReverse(nums, k, nums.length - 1);

  return arr;
}

console.log(rotateOptimized([1, 2, 3, 4, 5], 3));

// [1,2,3,4,5,6];
function myReverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left]; //Keep a temp value of the nums[left] element itself before overwriting it
    arr[left] = arr[right];
    arr[right] = temp; // This process swaps the two numbers

    // Increment the arr
    left++; // Is getting closer to the right elements by incrementing
    right--; // Is getting close to the left elements by decrement by one value
  }
}

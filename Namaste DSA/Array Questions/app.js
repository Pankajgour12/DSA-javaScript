
//! Remove Dupticate in Sorted array 

/* // Import prompt-sync so we can take input from user in VS Code terminal
const prompt = require("prompt-sync")();

// Step 1: Take array input
const size = Number(prompt("Enter the size of the array: "));
const nums = new Array(size);

for (let i = 0; i < size; i++) {
  nums[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log("\nOriginal Array:", nums);

// Step 2: Function to remove duplicates (LeetCode logic)
function removeDuplicates(nums) {
  // If array is empty, return 0
  if(nums.length === 0) return 0;

  // Pointer 'x' will track the last position of unique elements
  let x = 0;

  // Loop starts from 1 because first element is always unique
  for (let i = 1; i < nums.length; i++) {
    // Since array is sorted, a new unique element is always greater than the last one
    if (nums[i] > nums[x]) {
      x++;               // Move pointer forward
      nums[x] = nums[i]; // Place new unique element
    }

   
  }

  // Return count of unique elements
  return x + 1;
}

// Step 3: Call function
const k = removeDuplicates(nums);

// Step 4: Print result
console.log("\nTotal unique elements:", k);
console.log("Array after removing duplicates:", nums.slice(0, k));

 */



//! Remove Element 

const prompt = require("prompt-sync")();

// Step 1: Take array input
const size = Number(prompt("Enter the size of the array: "));
const arr = new Array(size);

for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log("\nOriginal Array:", arr);
const val = Number(prompt("Enter the value to remove: "));

function removeElement(arr, val) {
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[k] = arr[i];
      k++;
    }
  }

  return arr.slice(0, k); // <- CLEAN RESULT
}

let result = removeElement(arr, val);
console.log("After Removal:", result);









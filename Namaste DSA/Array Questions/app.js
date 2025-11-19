
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

/* const prompt = require("prompt-sync")();

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

*/


//! Reverse String
/* 
const prompt = require("prompt-sync")();

// Step 1: Take string input
const str = prompt("Enter a string: ");
const charArray = str.split(''); // Convert string to array of characters
console.log("\nOriginal String:", str);
 */
/*  function reverseString(s) {
  let x = s.length - 1;

  for (let i = 0; i < s.length / 2; i++) {
    // Swap characters
    let temp = s[i];
    s[i] = s[x];
    s[x] = temp;
    x--;
  }
 
}*/
/* 
function reverseString(s) {
  let x = s.length-1;
  for(let i = 0; i<s.length/2; i++ ){
     let temp = s[i];
     s[i]  = s[x]
     s[x]   =  temp
     x--

  }

  return s ;
}


reverseString(charArray);

console.log("Reversed String:", charArray.join('')); */





//! Merge Shorted Array  

const prompt = require("prompt-sync")();
 
/* // Step 1: Take array input
const size1 = Number(prompt("Enter the size of the first array: "));
const nums1 = new Array(size1);

for (let i = 0; i < size1; i++) {
  nums1[i] = Number(prompt(`Enter element ${i + 1} of first array: `));
}
const size2 = Number(prompt("Enter the size of the second array: "));
const nums2 = new Array(size2);
for (let i = 0; i < size2; i++) {
  nums2[i] = Number(prompt(`Enter element ${i + 1} of second array: `));
}
console.log("\nFirst Array:", nums1);
console.log("Second Array:", nums2);
function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    } 
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    return nums1;
}


const mergedArray = merge(nums1.concat(new Array(size2).fill(0)), size1, nums2, size2);
console.log("Merged Array:", mergedArray);

   
 */



//! Moves Zeros in right site 
/* 
// Step 1: Take array input
const size = Number(prompt("Enter the size of the array: "));
const nums = new Array(size);

for (let i = 0; i < size; i++) {
  nums[i] = Number(prompt(`Enter element ${i + 1}: `));
}

console.log("\nOriginal Array:", nums);

function moveZeroes(nums) {
    let k = 0; // Pointer for the next non-zero element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    } 
    for (let i = k; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

moveZeroes(nums);
console.log("Array after moving zeros:", nums); 
 */



//! Max Consecutive Ones


// Step 1: Take array input
const size = Number(prompt("Enter the size of the array: "));
const nums = new Array(size);

for (let i = 0; i < size; i++) {
  nums[i] = Number(prompt(`Enter element ${i + 1}: `));
} 
console.log("\nOriginal Array:", nums);

function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] === 1) {
            currentCount++;
        } else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }
    maxCount = Math.max(maxCount, currentCount);
    return maxCount;
}

const result = findMaxConsecutiveOnes(nums);
console.log("Maximum consecutive ones:", result);
  


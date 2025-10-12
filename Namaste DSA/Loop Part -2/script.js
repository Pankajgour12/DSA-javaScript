//!  Searching an Element in an array 

/* function ArraySearching(){

let input = prompt("Enter array elements (comma separated):");
let arr = input.split(",").map(Number);


let x = Number(prompt("Enter element to search:"));


function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

let result = searchElement(arr, x);

if (result !== -1) {
  console.log(`Element ${x} found at index ${result}`);
  alert(`Element ${x} found at index ${result}`);
} else {
  console.log(`Element ${x} not found`);
  alert(`Element ${x} not found`);
}



} */


//! Write a function that returns the number of negative numbers in an array 
// Step 1: Take array input from user
let input = prompt("Enter array elements (space separated):");

// Step 2: Convert string to number array
let arr = input.split(" ").map(Number);

// Step 3: Function to find negative numbers
function findNegativeNumbers(arr) {
  let count = 0;         // to count negative numbers
  let negatives = [];    // to store all negative numbers

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;                 // increase count
      negatives.push(arr[i]);  // store that negative number in array
    }
  }

  // Return both count and the array of negatives
  return { count, negatives };
}

// Step 4: Function call
let result = findNegativeNumbers(arr);

console.log("Original array:", arr);
console.log("Negative numbers:", result.negatives);
console.log("Total negative numbers:", result.count);

alert(
  `You entered: ${arr.join(" ")}\n` +
  `Negative numbers: ${result.negatives.join(", ")}\n` +
  `Total negatives: ${result.count}`
);








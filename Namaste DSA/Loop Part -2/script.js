//!  Searching an Element in an array 


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



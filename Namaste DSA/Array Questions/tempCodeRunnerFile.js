
// Step 1: Take array input
const size = Number(prompt("Enter the size of the array: "));
const nums = new Array(size);

for (let i = 0; i < size; i++) {
  nums[i] = Number(prompt(`Enter element ${i + 1}: `));
} 
console.log("\nOriginal Array:", nums);
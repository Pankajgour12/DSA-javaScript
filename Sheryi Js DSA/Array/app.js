let prompt = require("prompt-sync")();

let size = Number(prompt("Enter size of array "));

let arr = new Array(size);
let sum = 0;

for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt(`Enter element at index ${i} : `));
  sum += arr[i];
}
console.log(`Sum of all elements in array is ${sum}`);

// Q. Sum of all elements in an array

/* let prompt = require("prompt-sync")();

let size = Number(prompt("Enter size of array "));

let arr = new Array(size);
let sum = 0;

for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt(`Enter element at index ${i} : `));
  sum += arr[i];
}
console.log(`Sum of all elements in array is ${sum}`); */



// Q. Find maximum element in an array

/* let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array "));

let arr = new Array(size);


for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt(`Enter element at index ${i} : `));
  }
let max = arr[0];
for (let i = 1; i < size; i++) {
  if (arr[i] > max) { 
    max = arr[i];
  }
}
console.log(`Maximum element in array is ${max}`);
 */


// Q. Find minimum element in an array

let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array "));
let arr = new Array(size);

for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt(`Enter element at index ${i} : `));
}
let min = arr[0];
for (let i = 1; i < size; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }   
}
console.log(`Minimum element in array is ${min}`);
  






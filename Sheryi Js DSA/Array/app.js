let prompt = require("prompt-sync")();
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
/* 
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
   */


//! Q. Find the largest  number in an array
/* 
let size = Number(prompt("Enter size of array "));
let arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt(`Enter element at index ${i} : `));
}

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];     
  }
}
console.log(`Largest element in array is ${max}`);  
 */

//! find the smallest number in an array
/*  
let size = Number(prompt("Enter size of array "));
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt(`Enter element at index ${i} : `));
}

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
} 
console.log(`Smallest element in array is ${min}`);
 */

//! Reverse an array with extra space

let size = Number(prompt("Enter size of array "));
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt(`Enter element at index ${i} : `));
}

/* let revArr = new Array(arr.length);
let j= 0;
for (let i = arr.length - 1; i >= 0; i--) {
  revArr[j] = arr[i];
  j++;
}

console.log("Reversed Array is :"+revArr);
  */


/* let i = 0;
let j = arr.length - 1;

while (i < j) { 

  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];
  i++;
  j--;
}


console.log("Reversed Array is :" + arr); */

/* 
let temp = arr[0];

for (let i = 0; i < arr.length-1; i++) {
  arr[i] = arr[i+1];
  arr[i+1] = temp;
  temp = arr[i+1];

}

console.log("Reversed Array is :" + arr); */


//! move all 0's to the end of array

/* let i = 0;
let j = 0;

while (j < arr.length) {
  if (arr[j] !== 0) {
    // swap
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
    i++;
  } 
  j++;
}
console.log("Array after moving 0's to the end :"+arr);

 */

//! Rotate an array by k times
/* let k = Number(prompt("Enter number of times to rotate the array "));
k = k % arr.length; 
for (let r = 0; r < k; r++) {
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    temp = arr[i + 1];
  }     
}
console.log("Array after rotating by k times :"+arr);
 */




//! Linear Search in Array 


 let key = Number(prompt("Enter element to search in array ")); 
  
 function linearSearch(arr , key){
 let foundAt = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      foundAt = i;
      break;
    }
  }
  if (foundAt !== -1) {
    console.log(`Element ${key} found at index ${foundAt}`);
  } else {
    console.log(`Element ${key} not found in array`);
  }

}     

linearSearch(arr,key);
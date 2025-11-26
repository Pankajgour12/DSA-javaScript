//! Sum of first n natural numbers using recursion

const prompt = require('prompt-sync')();

const size = Number(prompt('Enter a Array Size :-  '));
const arr = new Array(size);
for(let i=0; i<size; i++){
    arr[i] = Number(prompt(`Enter ${i} Element :- `));
    
}
for(let i=0; i<size; i++){
    console.log(arr[i]);
}

//! Sum of all elements in an array using recursion
 function sumArray(arr, size){
    if(size <=0) return 0;
    return arr[size-1] + sumArray(arr, size-1)
}
console.log("Sum of all elements in an array is :- ", sumArray(arr, size));






 /* function sum(n){
    if(n==0) return 0;
    return n + sum(n-1)
} 

console.log("Sum of first n natural numbers is :- ", sum(a));
*/



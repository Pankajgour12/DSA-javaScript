
const prompt = require('prompt-sync')();

const size = Number(prompt("Enter the size of the array: "));

const arr = new Array(size);
for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}
console.log("The elements of the array are:");
for (let i = 0; i < size; i++) {
    console.log(arr[i]);
}

//! Remove Duplicates From Sorted Array
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let uniqueIndex = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[uniqueIndex] = arr[i];
            uniqueIndex++;
        }
    }
    return uniqueIndex;
}
const sortedArr = arr.slice().sort((a, b) => a - b);
const newLength = removeDuplicates(sortedArr);
console.log(`Array after removing duplicates: ${sortedArr.slice(0, newLength)}`);







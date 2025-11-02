 let prompt = require("prompt-sync")();


//! Find the Largest number in an array

let input = prompt("Enter array elements (space separated):");

let arr = input.split(" ").map(Number);
function findLargestNumber(arr) {
    let largest = arr[0]; // Assume first element is the largest    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if current element is greater
        }   
    }
    return largest;
}   
let largestNumber = findLargestNumber(arr);
console.log("Original array:", arr);
console.log("Largest number:", largestNumber);
// alert(`You entered: ${arr.join(" ")}\nLargest number: ${largestNumber}`);






 let prompt = require("prompt-sync")();


//! Find the Largest number in an array

// let input = prompt("Enter array elements (space separated):");

/* let arr = input.split(" ").map(Number);
/* function findLargestNumber(arr) {
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

 */



let size = Number(prompt("Enter size of array "));
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Enter element at index ${i} : `));
}
console.log(arr);

if(size < 2){
    console.log("Array should have at least two elements to find second largest.");
    process.exit(1);
}


let firstLargest = -Infinity;
let secondLargest = -Infinity;


for( let i= 0; i< arr.length; i++){
if(arr[i] > firstLargest){
    secondLargest = firstLargest;
    firstLargest = arr[i];  
} else if(arr[i] > secondLargest && arr[i] != firstLargest){
    secondLargest = arr[i]; 
}
}
console.log(`Second largest element in array is ${secondLargest}`);






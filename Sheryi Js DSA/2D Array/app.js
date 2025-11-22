let prompt = require('prompt-sync')()
let innerArraySize = Number(prompt("Enter the array size : "))


let arr = new Array(innerArraySize)

for(let i= 0; i<arr.length; i++){
    let size = Number(prompt(`Enter the size of inner array ${i+1} : `))
    arr[i] = new Array(size)
    for(let j=0; j<arr[i].length; j++){
        arr[i][j] = Number(prompt("Enter the value for inner array " + (i+1) + " at index " + j + ": "))
    }       
}
console.log("The 2D Array is: ")
console.log(arr)
console.log("The elements of 2D Array are: ")
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        console.log("Element at arr[" + i + "][" + j + "] = " + arr[i][j])
    }
}       



//! Diagonal Sums

function diagonalSums(arr){
   
     let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    // Check if the array is a square matrix
    if (arr.length === 0 || arr.some(row => row.length !== arr.length)) {
        console.log("Cannot calculate diagonal sums for a non-square matrix.");
        return;
    }

    for(let i = 0; i < arr.length; i++){
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][arr.length - 1 - i];
    }

    console.log("Primary Diagonal Sum: " + primaryDiagonalSum);
    console.log("Secondary Diagonal Sum: " + secondaryDiagonalSum);
    




    
    


}


console.log(diagonalSums(arr));


     
 

    











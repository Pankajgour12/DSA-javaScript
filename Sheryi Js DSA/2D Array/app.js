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

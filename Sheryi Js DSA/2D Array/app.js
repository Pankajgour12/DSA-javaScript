let prompt = require('prompt-sync')()
let innerArraySize = Number(prompt("Enter the array size"))


let arr = new Array(innerArraySize)


for(let i= 0; i<arr.length; i++){
    arr[i] = new Array()
}
console.log(arr);
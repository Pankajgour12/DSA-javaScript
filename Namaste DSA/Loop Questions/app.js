//! number of count of digits in a number

const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number: "))

function countOfDigit(){
    let count = 0 ;
    if(num==0) return 1;

    //? Converting Negtive Numbers to Positive  // Math.abs()
    num=Math.abs(num)

while(num>0){
    num = Math.floor(num/10)
    count++
}
return count;
}

console.log("Count of digits: ",countOfDigit());



  




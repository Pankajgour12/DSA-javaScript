//Q. Print the sum of all even & odd numbers in a reange seperately
/* 
let n = Number(prompt("Enter a number: "));
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }  
 }

console.log(`The sum of all even numbers from 0 to ${n} is: ${evenSum}`);
console.log(`The sum of all odd numbers from 0 to ${n} is: ${oddSum}`); */




//Q. Print all the factors of a number
/* 
let n = Number(prompt("Enter a number: "));

for(let i = 1; i <= n/2; i++) {
    if(n % i === 0) {
        console.log(i);
    } } */


 /*        // Q.check if the number is prime or not.
let n = Number(prompt("Enter a number: "));
let isPrime = true;
for(let i = 2; i <= n/2; i++) {
    if(n % i === 0) {
        isPrime = false;
        break;
    }   }
if(isPrime) {
    console.log(`${n} is a prime number`);
} else {
    console.log(`${n} is not a prime number`);
} */


//Q. method second 

/* let n = Number(prompt("Enter a number: "));
let isPrime = isPrimeNumber(n);
if(isPrime) {
    console.log(`${n} is a prime number`);
} else {
    console.log(`${n} is not a prime number`);
}

function isPrimeNumber(num) {
    if(num <= 1) return false; // 0 and 1 are not prime numbers
    if(num === 2) return true; // 2 is the only even prime number
    if(num % 2 === 0) return false; // other even numbers are not prime

    for(let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) { // check only odd numbers up to the square root of num
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}  
 */




//! Sum of digits of a number
/* 
let = n = Number(prompt("Enter a number: "));
let sum = 0;

while(n > 0) {
    let digit = n % 10; 
    sum += digit;
    n = Math.floor(n / 10); 
}
console.log(`The sum of the digits is: ${sum}`);    
 */

//! Reverse a number

/*  let n = Number(prompt("Enter a number: "));
let reversedNumber = 0;
while(n > 0) {
    let digit = n % 10;
    reversedNumber = reversedNumber * 10 + digit;
    n = Math.floor(n / 10);
}
console.log(`The reversed number is: ${reversedNumber}`);
 */
//! Automorphic Number

let n = Number(prompt("Enter a Number "));
let copy =n;
let sq = n*n;
let count =0;
while(n>0){
count++;
n= Math.floor(n/10);

}

if(sq%Math.pow(10, count )==copy) console.log("Automorphic Number");
else console.log("No Automorphic Number");





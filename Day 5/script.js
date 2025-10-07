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


        // Q.check if the number is prime or not.
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
}




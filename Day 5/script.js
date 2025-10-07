//Q. Print the sum of all even & odd numbers in a reange seperately

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
console.log(`The sum of all odd numbers from 0 to ${n} is: ${oddSum}`);
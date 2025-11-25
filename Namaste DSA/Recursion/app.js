//! Sum of first n natural numbers using recursion

const prompt = require('prompt-sync')();

const a = Number(prompt('Enter A nubmer :-  '));

 function sum(n){
    if(n==0) return 0;
    return n + sum(n-1)
}

console.log("Sum of first n natural numbers is :- ", sum(a));
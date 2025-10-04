// accept a year and check if it a leap year or not 

// first method
/* let year = Number(prompt("Enter a year: "));
let isLeapYear = false;

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0) isLeapYear = true;
        else isLeapYear = false;
    }else {isLeapYear = true;}
}else isLeapYear = false;

console.log(isLeapYear ? year + " is a leap year" : year + " is not a leap year");

 */
// second method

let year = Number(prompt("Enter a year: "));
let isLeapYear = false;

isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear ? year + " is a leap year" : year + " is not a leap year");



// discounted price


let amount = Number(prompt("Enter the original price: "));
let dis = 0;

if(amount >= 0 && amount <= 5000) dis = 0;
else if(amount > 5000 && amount <= 7000) dis = 5;
else if(amount > 7000 && amount <= 9000) dis = 10;
else if(amount > 9000 ) dis = 20;

else console.log("Invalid amount");
 
console.log("Discounted price is: " + (amount - (amount * dis / 100)));

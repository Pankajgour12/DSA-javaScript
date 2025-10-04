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
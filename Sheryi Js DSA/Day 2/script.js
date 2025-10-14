/* // Math Functions
// what is Math function ? 
// The Math object is a built-in object in JavaScript that provides various mathematical functions and constants.
// It is not a function or a constructor, but rather a static object that contains properties and methods for performing mathematical operations.

// Example of Math functions    

// math.ceil() - Rounds a number UP to the nearest integer 
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.ceil(-4.2)); // Output: -4 
console.log(Math.ceil(4.7)); // Output: 5


// math.floor() - Rounds a number DOWN to the nearest integer
console.log(Math.floor(4.2)); // Output: 4
console.log(Math.floor(-4.2)); // Output: -5
console.log(Math.floor(4.7)); // Output: 4



// math.round() - Rounds a number to the nearest integer
console.log(Math.round(4.2)); // Output: 4
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(-4.5)); // Output: -4
console.log(Math.round(-4.7)); // Output: -5




// math.trunc() - Returns the integer part of a number by removing any fractional digits
console.log(Math.trunc(4.2)); // Output: 4
console.log(Math.trunc(-4.2)); // Output: -4
console.log(Math.trunc(4.7)); // Output: 4
console.log(Math.trunc(-4.7)); // Output: -4




// math.abs() - Returns the absolute value of a number
console.log(Math.abs(4.2)); // Output: 4.2
console.log(Math.abs(-4.2)); // Output: 4.2
console.log(Math.abs(0)); // Output: 0  
console.log(Math.abs(-0)); // Output: 0




// math.pow() - Returns the base to the exponent power, that is, base^exponent

console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.pow(4, 0.5)); // Output: 2
console.log(Math.pow(5, -2)); // Output: 0.04   
console.log(Math.pow(-2, 3)); // Output: -8
console.log(Math.pow(-2, 2)); // Output: 4








// math.sqrt() - Returns the square root of a number
console.log(Math.sqrt(4)); // Output: 2
console.log(Math.sqrt(9)); // Output: 3
console.log(Math.sqrt(0)); // Output: 0
console.log(Math.sqrt(-4)); // Output: NaN (Not a Number)
console.log(Math.sqrt(2)); // Output: 1.4142135623730951 (approximate value)
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(25)); // Output: 5
console.log(Math.sqrt(1)); // Output: 1
console.log(Math.sqrt(100)); // Output: 10





// math.cbrt() - Returns the cube root of a number
console.log(Math.cbrt(8)); // Output: 2
console.log(Math.cbrt(27)); // Output: 3
console.log(Math.cbrt(0)); // Output: 0
console.log(Math.cbrt(-8)); // Output: -2
console.log(Math.cbrt(1));  // Output: 1
console.log(Math.cbrt(64)); // Output: 4
console.log(Math.cbrt(125)); // Output: 5
console.log(Math.cbrt(-27)); // Output: -3










// math.max() - Returns the largest of zero or more numbers
console.log(Math.max(1, 2, 3)); // Output: 3
console.log(Math.max(-1, -2, -3)); // Output: -1
console.log(Math.max(1, -2, 3)); // Output: 3
console.log(Math.max()); // Output: -Infinity
console.log(Math.max(5, 10, 15, 20)); // Output: 20
console.log(Math.max(-5, -10, -15, -20)); // Output: -5










// math.min() - Returns the smallest of zero or more numbers
console.log(Math.min(1, 2, 3)); // Output: 1
console.log(Math.min(-1, -2, -3)); // Output: -3
console.log(Math.min(1, -2, 3)); // Output: -2
console.log(Math.min()); // Output: Infinity
console.log(Math.min(5, 10, 15, 20)); // Output: 5











// math.random() - Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: A random number between 0 and 1
console.log(Math.random() * 10); // Output: A random number between 0 and 10
console.log(Math.random() * 100); // Output: A random number between 0 and 100
console.log(Math.floor(Math.random() * 10)); // Output: A random integer between 0 and 9
console.log(Math.floor(Math.random() * 100)); // Output: A random integer between 0 and 99
console.log(Math.floor(Math.random() * 1000)  ); // Output: A random integer between 0 and 999


// math.log() - Returns the natural logarithm (base e) of a number
console.log(Math.log(1)); // Output: 0
console.log(Math.log(Math.E)); // Output: 1
console.log(Math.log(10)); // Output: 2.302585092994046
console.log(Math.log(0)); // Output: -Infinity
console.log(Math.log(-1)); // Output: NaN (Not a Number)    
console.log(Math.log(2)); // Output: 0.6931471805599453
console.log(Math.log(100)); // Output: 4.605170185988092






 */




// Calculate compound interest

/* 

let p = Number(prompt("Enter the principal amount: "));
let r = Number(prompt("Enter the annual interest rate (in %): "));
let t = Number(prompt("Enter the time (in years): "));
let n = Number(prompt("Enter the number of times interest is compounded per year: "));

let A = p * Math.pow((1 + r / (n * 100)), n * t);

console.log("The compound interest is: " + A.toFixed(2)); // Rounds the result to 2 decimal places */









/* 
// Generate a OTP in 4 digits
let otp = Math.floor(1000 + Math.random() * 9000);
console.log("Your OTP is: " + otp);




// Generate a OTP in 6 digits
let otp6 = Math.floor(100000 + Math.random() * 900000);
console.log("Your 6-digit OTP is: " + otp6);




// Generate a random number between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100: " + randomNum);


 */







// area of triangle in herons formula
/* let a = Number(prompt("Enter the length of side a: "));
let b = Number(prompt("Enter the length of side b: "));
let c = Number(prompt("Enter the length of side c: "));

if(a + b <=c || a + c <= b || b + c <= a){
    console.log("Invalid triangle sides");
}else{
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("The area of the triangle is: " + area.toFixed(2));
}

 */


// circumference of circle

/* let radius = Number(prompt("Enter the radius of the circle: "));
let circumference = 2 * Math.PI * radius;
console.log("The circumference of the circle is: " + circumference.toFixed(2)); */











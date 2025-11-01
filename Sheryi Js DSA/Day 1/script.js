// Que.1
 // Sum of two integers



let a =5;
let b = 3;
console.log(a+b); // 8



















// Que.2
/* 
Relation  between integers and strings

Rule 1: If one of the operands is a string, the other is converted to a string.

string + string = string (concatenation)
let a = "hello";
let b = "world";
console.log(a+b); // helloworld

 Rule 2: If one of the operands is a number or a boolean, the other is converted to a number.   

string + number = string (concatenation)
let a = "hello";
let b = 5;
console.log(a+b); // hello5





int + int = int (arithmetic Operation)
let a = 5;
let b = 3;
console.log(a+b); // 8



*/













// Que.3

/* 
  
// Sum and message

  let a = 5;
let b = 3;
console.log("The sum of " + a + " and " + b + " is " + (a+b)); // The sum of 5 and 3 is 8
 
 */






// Que.4
/* 
 type coercion in JS
 1. Implicit Coercion : JS automatically converts the data type of one value to another data type.
 2. Explicit Coercion: We can explicitly convert the data type of one value to another data type.

 Implicit Coercion example
let a = 5;
let b = "3";
console.log(a+b); // 53
console.log(a-b); // 2
console.log(a*b); // 15

 Explicit Coercion example
let a = 5;
let b = "3";
console.log(a+parseInt(b)); // 8
console.log(a-parseInt(b)); // 2
console.log(a*parseInt(b)); // 15


 */








// Que.5
/* 
//Accept and print user input

let age = Number(prompt("Enter your age"));
console.log(`Your age is ${age}`);

 */




// Que.6

/* // swap two variables



 // Method 1: Using a temporary variable
  // let a = 5;
  // let b = 3;
  // let temp = a;
  // a = b;
    // b = temp;
    // console.log(a,b);





    // Method 2: Using arithmetic operators
    // let a = 5;
    // let b = 3;
    // a = a + b;
    // b = a - b;
    // a = a - b;
    // console.log(a,b);





    // Method 3: Using destructuring assignment
    // let a = 5;
    // let b = 3;
    // [a,b] = [b,a];
    // console.log(a,b);





    
    // Method 4: Using XOR operator
    // let a = 5;
    // let b = 3;
    // a = a ^ b;
    // b = a ^ b;
    // a = a ^ b;
    // console.log(a,b);
    // Method 5: Using ES6 array destructuring
    // let a = 5;
    // let b = 3;
    // [a,b] = [b,a];
    // console.log(a,b);
   


    
 */




// Que.7 

// Operators in JS
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. relational Operators
// 4. Logical Operators


// 1. Arithmetic Operators: +, -, *, /, %, ++, --
// let a = 5;
// let b = 3;
// console.log(a+b); // 8
// console.log(a-b); // 2
// console.log(a*b); // 15
// console.log(a/b); // 1.6666666666666667
// console.log(a%b); // 2
// console.log(a++); // 5
// console.log(a); // 6
// console.log(b--); // 3
// console.log(b); // 2
// 2. Assignment Operators: =, +=, -=, *=, /=, %=, **=
// let a = 5;   
// let b = 3;
// a += b;
// console.log(a); // 8
// a -= b;
// console.log(a); // 5
// a *= b;
// console.log(a); // 15
// a /= b;
// console.log(a); // 5
// a %= b;
// console.log(a); // 2
// a **= b;
// console.log(a); // 25
// 3. Relational Operators: >, <, >=, <=, ==, !=
// let a = 5;
// let b = 3;
// console.log(a>b); // true

// console.log(a<b); // false
// console.log(a>=b); // true
// console.log(a<=b); // false
// console.log(a==b); // false
// console.log(a!=b); // true
// 4. Logical Operators: &&, ||, !
// let a = 5;
// let b = 3;
// console.log(a>b && a<b); // true
// console.log(a>b || a<b); // true
// console.log(!(a>b)); // false
// let a = 5;
// let b = 3;
// console.log(a>b && a<b); // false
// console.log(a>b || a<b); // true
// console.log(!(a>b)); // true





// Create a function  which accept the age and tells whether a person is eligible to vote or not.

/* function checkVotingEligibility(age) {
  if(age <0){
    console.log("Invalid Input");

  } else if(age >= 18){
    console.log("Eligible to vote");
  }
  else{
    console.log("Not eligible to vote");
  }  

}

checkVotingEligibility(20); // "Eligible to vote"
checkVotingEligibility(16); // "Not eligible to vote" */



// Create a function to check if a number is even or odd.

/* 
function checkEvenOdd(number) {
    if(number % 2 === 0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
}

checkEvenOdd(4); // "Even Number"
checkEvenOdd(7); // "Odd Number"

 */

//Loops 
/* 
for (let i = 0; i <= 5; i++) {
    console.log('Hello World');
}

// Print numbers from 1 to 10
for(let i=1; i<=10; i++){
    console.log(i);
}

// Print numbers from 10 to 1
for(let i=10; i>=1; i--){
    console.log(i);
} */

//-- Loop
// for loop

//Q. Accept an integer and Print hello world n times 

/* let n = Number(prompt("Enter a number: "));
if(isNaN(n) || n <= 0){
    console.log("Invalid Input");
}else{
  let i;
for( i=1; i<=n; i++){
    console.log("Hello World");
}


} */


//Q. Print natural number up to n.

/*  let n = Number(prompt("Enter a number: "));
 if(isNaN(n) || n <= 0){  
    console.log("Invalid Input");
 }else{
    let i;
    for(i=1; i<=n; i++){
        console.log(i);
      }
    } */

//Q. reverse for loop. n to 1.



/*  let n = Number(prompt("Enter a number: "));
if(isNaN(n) || n <= 0){
    console.log("Invalid Input");
}else{
   
    for(;n>=1; n--){
        console.log(n);
    }
}  */

    //Q. Take a number and print its multiplication table.

/*  let n = Number(prompt("Enter a number: "));
  if(isNaN(n) || n <= 0){
    console.log("Invalid Input");
  }else{
    let i;
    for(i=1; i<=10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
  }
 */

  //Q. Sum of n Terms 

/*  let n = Number(prompt("Enter a number: "));
 if(isNaN(n) || n <= 0){
    console.log("Invalid Input");
 }else{
  let sum = 0;
  for(let i=1; i<=n; i++){
    sum += i; // sum = sum + i
  }
  console.log("Sum of first " + n + " natural numbers is: " + sum);
} */



  //Q. Factorial of a number.

  let n = Number(prompt("Enter a number: "));
  if(isNaN(n) || n < 0){
    console.log("Invalid Input");
  }else{
    let factorial = 1;
    for(let i=1; i<=n; i++){
      factorial *= i; // factorial = factorial * i
    }
    console.log("Factorial of " + n + " is: " + factorial);
  }







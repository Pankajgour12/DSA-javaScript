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
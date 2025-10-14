// ? Do while


//! Guess the Number 

let com = Math.floor(Math.random() * 100) + 1;
let userInput;

do {
  userInput = Number(prompt('Guess the number between 1 and 100:'));

  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
      console.log('❌ Please enter a valid number between 1 and 100!');
    alert('❌ Please enter a valid number between 1 and 100!');
    continue;
  }

  if (userInput > com) alert('📈 Too high, try again!');
  else if (userInput < com){
      console.log('📉 Too low, try again!');
      alert('📉 Too low, try again!')

}
  else {
      console.log('🎉 Congrats! You guessed it right — ' + com)
      alert('🎉 Congrats! You guessed it right — ' + com)
  }
} while (userInput !== com);


const prompt = require('prompt-sync')();

let x = Number(prompt("Enter number  "));

/* for(let i = 0; i<n ; i++ ){
    let row = " "
    for(let j=0 ; j<=i ; j++){
        // process.stdout.write("* ")
        row = row +"* "
    }
    console.log(row);
} */


    //! Reverse the number
/* 
let xCopy = n;
x = Math.abs(n);
let rev = 0;
 while( x > 0){
    let digit = Math.floor(n%10);
     rev = ( 10*rev)+ digit ;
      n = Math.floor(n/10)
 }
     */
   


   function Reverse(x) {

    let xCopy = x ;
    let rev = 0 ;
    x = Math.abs(x)
    while(x>0){
        let digit = Math.floor(x%10)
        rev =(10*rev)+digit;
        x = Math.floor(x/10)
    }
  
    return (xCopy<0) ? -rev : rev ;

    
}
console.log(Reverse(x));
//! Nested loop Programming
const prompt = require("prompt-sync")()

/* 


* * * * *
* * * * *
* * * * *
* * * * *
* * * * *


5
*/
/* let n = prompt('enter a value for print start ')

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write('* ')
  }
  console.log();
} */

/* 

            *
            * *
            * * *
            * * * *
            * * * * *

*/



/* 

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/
let n = prompt('enter a value for print start ')
/* for(let i =1; i<=n ;  i++){
for(let j=1; j<=i; j++){
        process.stdout.write(j+" ")   
    }
    console.log();
} */




    for(let i=1; i<=n; i++){


for(let j=1; j<=n-i+1; j++){
    process.stdout.write("* ")
}
console.log();
    }
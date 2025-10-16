/* const prompt = require("prompt-sync")()
const n = prompt("Enter a number ")
 */
/* for(let i=1;i<=n;i++){
    temp = 65;
    for(let j=1;j<=i;j++){
            process.stdout.write(String.fromCharCode(temp)+" ");
            temp++
        }
        console.log();
        }  */

//!  Q.

/* 
            *
          * *
        * * *
      * * * *
    * * * * *
  * * * * * *

*/

/* 
        for(let i=1;i<=n;i++){

        for(let j=1;j<=n-i ; j++ ){
            process.stdout.write("  ")
        }
        for(let j=1; j<=i;j++){
            process.stdout.write('* ')
        }
        console.log();

        } */

const prompt = require("prompt-sync")();
const n = Number(prompt("Enter a number "));


/* 
              *       *
                *   *
                  *
                *   *
              *       *
*/


/* for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j === n + 1) {
      process.stdout.write("* ");
    } else process.stdout.write("  ");
  }

  console.log();
} */







/* 

       *               *
         *           *
           *       *
             *   *
               *
*/



  /* for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= (n*2)-1; j++) {
    if (i == j || i + j === n * 2) {
      process.stdout.write("* ");
    } else process.stdout.write("  ");
  }

  console.log();
}
 */
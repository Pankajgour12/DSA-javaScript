
// ? Recursion & call Stack

/* function fun(num) {

  console.log(num);
  num = num-1;
 
  fun(num);



}
let a = 5;
fun(a) */



//* Recursion & Call Stack 

const prompt = require('prompt-sync')();

const nums = Number(prompt('Enter A nubmer :-  '));

function fun (nums){
    if(nums == 0 ) return ;
    console.log(nums);
    nums-=1 
    fun(nums)

}
fun(nums);
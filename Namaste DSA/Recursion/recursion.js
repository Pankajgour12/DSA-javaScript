
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

/* function fun (nums){
    if(nums == 0 ) return ;
    console.log(nums);
    nums-=1 
    fun(nums)

}
fun(nums); */


// ? print n.. to 1 using recursion 
/* function print(nums) {
   if(nums<1) return ;
   console.log(nums);
   print(--nums)


} */


// ? print  1 to n using recursion 

function print(x){
    
    /*    for(let i= 1 ; i<=nums; i++){
      console.log(i);
      print()
    } */
  if( x > nums) return;
  console.log(x);
  print( ++x)

}

print(1)



// ! Common Mistake 
//* 1. Missing Base Case -- Stack Overflow
//* 2. Not simplyfying the input -  never reaches base case 
//* 3. Too deep recursion - larger inputs .
//* 4. Keeping in mind the Time Complexity . 
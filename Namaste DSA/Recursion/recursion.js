

function fun(num) {
  // code here
  console.log(num);
  num = num-1;
  fun(num);


}
let a = 5;
fun(a)
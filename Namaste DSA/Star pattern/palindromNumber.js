
const prompt = require ('prompt-sync')();

let num = Number(prompt("Enter the number : "));


function palindromNumber(num) {
let xCopy = num;
if(num<0) return false;

let rev = 0;
 
while(num>0){
let digit = Math.floor(num%10);
rev = (rev*10)+ digit;
num = Math.floor(num/10)

}
if(xCopy === rev){
    return true;
}else{
    return false;




}


}









console.log(palindromNumber(num))
// let n = (prompt("Enter a number: "));

let n = 10; // You can change this value to test with different numbers
let a = 0, b = 1, c;
if(isNaN(n) || n <= 0){
    console.log("Invalid Input");
}else{
    console.log(a);
    console.log(b);
    for(let i=3; i<=n; i++){
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }       
}   
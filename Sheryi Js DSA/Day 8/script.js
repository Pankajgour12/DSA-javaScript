const prompt = require("prompt-sync")()

const n = prompt("Enter a number ")
for(let i=1;i<=n;i++){
temp = 65;
for(let j=1;j<=i;j++){
    process.stdout.write(String.fromCharCode(temp)+" ");
    temp++
}
console.log();
}    
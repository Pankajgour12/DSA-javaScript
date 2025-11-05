for(let i = 0; i < 5; i++){
    console.log("Outer loop iteration:", i);
    for(let j = 0; j < 5; j++){
       process.stdout.write(j.toString() + " ");
    }
     console.log();  // for new line after inner loop
} 



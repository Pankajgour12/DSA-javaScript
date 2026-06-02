let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= (n * 2) - 1; j++) {
    if (i == j || i + j === n * 2) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log(); // new line after each row
}




// paramid pattern
  let n = 5;

// upper
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= (2 * i - 1); k++) {
    process.stdout.write("*");
  }
  console.log();
}

// lower
for (let i = n - 1; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= (2 * i - 1); k++) {
    process.stdout.write("*");
  }
  console.log();
}
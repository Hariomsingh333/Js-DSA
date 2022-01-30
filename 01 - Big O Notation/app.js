console.log("Hello World");

// write a program with two different way

// first method
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// let t1 = performance.now();
// console.log(addUpTo(1000000000));
// let t2 = performance.now();

// console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);

// second method

// function addUpTo(n) {
//   return (n * (n + 1)) / 2;
// }
// let t1 = performance.now();
// console.log(addUpTo(1000000000));
// let t2 = performance.now();

// console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);

// function printAllParis(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }

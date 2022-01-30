// first recursion function
function countDown(num) {
  if (num <= 0) {
    console.log("all done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
// we can also write this thing in loop

// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("All Done");
// }

// second recursive function

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(3));
// how that function work
sumRange(3);
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1
//-------------
// return 2 + 1
// return 3 + 3

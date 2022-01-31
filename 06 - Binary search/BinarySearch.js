console.log("Hello world");

function BinarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== target && start <= end) {
    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === target) {
    return mid;
  }
  return -1;
}
console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 18));

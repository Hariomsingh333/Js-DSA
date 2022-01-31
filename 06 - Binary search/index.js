function binarySearch(arr, target) {
  start = 0;
  end = arr.length - 1;
  mid = Math.floor((start + end) / 2);
  while (arr[mid] != target && start <= end) {
    if (target > arr[mid]) start = mid + 1;
    else end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === target) return mid;
  return -1;
}

arr = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(arr, 4));

function bubbleSort(arr) {
  // we are loop over every item in the array
  for (let i = arr.length; i > 0; i--) {
    // we repeat that process for every item
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
arr = [37, 45, 29, 8];

console.log(bubbleSort(arr));

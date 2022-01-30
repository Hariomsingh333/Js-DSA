// linear Search algo

function linearSearch(array, target) {
  for (let index = 0; index <= array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}
arr = [1, 2, 3, 4, 5, 6];
console.log(linearSearch(arr, -5));

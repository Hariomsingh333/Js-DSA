# Date : 30 / 1 / 2022

# Linear Search Algo

A linear search is the simplest method of searching a data set. Starting at the beginning of the data set, each item of data is examined until a match is made. Once the item is found, the search ends. If there is no match, the algorithm must deal with this

<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png">

- Search the target element one buy one
- if target is not found return -1

```js
//linear search
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
```

# Date: 16 / 8 2021

# Day: 1

# Big O Notation

this section is all about time mean which way to take less time .

## Time Complexity

### first method

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();

console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);
// 3.3328 seconds
```

## second method

```js
// second method

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();

console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);
// 0.0006 seconds
```

- first method takes 3.3 seconds and second method takes 0.006 second, soo we use second method

## Counting Operations

- take a look on this example

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

- in this example we have 3 operation (\*, +, /)
  <br>
  <br>
  compare the other example

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

- but this time we are in loop, if n = 5 we total + 5 thing if we n = 100 total + 100 times , and so on.
  <br>
  **it's just not one operation any it's _n_ operations**

### why we count operations

**because computer don't count what the number computeronly count how much operation with in**

_if 1000000000 + 2 = computer dose not count whats the number, computer always count how much operations in there_

- so why always focus on operation.
  <br>
  <br>

# Introducing to Big O

Big o Notation is way to formalize fuzzy counting.

## Big O Definition

we say that and algorithm is O(f(n)) if the number of simple operations the computer has to do eventually less than a constant times f(n), as n increases

- f(n) could be linear (f(n)=n)
- f(n) could be quadratic (f(n)=n2)
- f(n) could be constant (f(n)=1)
- f(n) could be something entirely different
  _f mean function_

**let's see with our example**

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

- _in this example we have only 3 operation and it's constant. it's alway 3 operations_
- _we can say that O(1) = BIG O OF 1_
- **mean as n grow but not effect on the run time**

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

- in this case does not matter it's 1n , 5n, 50n, we just say O(n)
- _O(n)_
  one more example

```js
function printAllParis(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

- loop is O(n)
- we have two loop in nested on of each
- _O(n) \* O(n) = O(n^2) = O n square_

<br>

## Simplifying the The Big O

### Constant Don't Matter

**O(2n)❌ = O(n)✅** <br>
**O(500)❌ = O(1)✅**<br>
**O(13 n^2)❌ = O(n^2)✅**<br>
**O(130 + n)❌ = O(n)✅**<br>
**O(n^2 + 3n + 8)❌ = O(n^2)✅**<br>

<br>

## Big O Short Hands

1. Arithmetic operators are constant
2. Variable assignment is constant
3. accessing elements in an array (by index) or object (by key) is constant
4. in a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Space Complexity

### Rule of thumb

- Most Primitives(Boolean, Number, Undefined, null) are constant space.
- String require O(n) space (where _n_ is the String length)
- reference types are generally O(n), where n is the length (for arrays ) or the numbers of keys (for Objects).

<br>

## Examples

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

so we need what the space complexity of the example.<br>

so total = 0, it's mean i _O(1)_

<br>
<br>

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

- newArr = []
- it's mean _O(n)_.

<br>
<br>

# Logarithms

## What's a log

log<sub>2</sub>(8) = 3 ➔ 2^3 = 8<br>
_8 /2 = 4 it not 1 then again /2 = 4 not 1 then again / 2 = 1_

<br>
<br>

_to deep dive here the slide for this section_

[slides](https://cs.slides.com/colt_steele/big-o-notation)

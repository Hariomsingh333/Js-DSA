# Date: 31 / 1 / 2022

# Bubble sort

## what is sorting?

sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

### Example

- sorting numbers from smallest to largest
- sorting name alphabetically
- sorting movies based on release year
- sorting movies based on revenue

# Why do we need to learn this?

- Sorting is an incredibly common task , so it's good to know how its works
- there are many different ways to sort things, and different techniques have their own advantages and disadvantages

# Bubble sort

Bubble sort is not all that efficient. it's not that commonly used.
<br>

**A sorting algorithm where the largest values bubble up to the top!**

```js
//      s                       e
arr = [29, 10, 14, 30, 37, 14, 18];
```

this is the first item (29) and this is the last item(18)

<br>

**the way the bubble sort works is that as we loop through each item, we compare it to the next item, the one in front of it, And we check is this one larger that what we're comparing it to? and if it is we swap**
<br>

so swapping is really important to bubble sort,

- you basically swap if some thing is larger
- and then you compare it to the next one is a large swap again
- compare to the next one
- and so on ...

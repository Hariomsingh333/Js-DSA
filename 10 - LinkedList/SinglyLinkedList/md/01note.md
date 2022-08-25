# SingleLinkedList

## What is a LinkedList

LinkedList is Data structure there we can store data and point to other data(node), In LinkedList we store data and we also store the position so we can connect the data(node) with pointer

> LinkedList is just collection of data which point to another node, In SingleLinkedList we can point the data only right way but in DoubleLinkedList we can navigate both side left and right,

### First we create a node class

First we create a **node** class so we can store piece of data called value or whatever,

then we reference to next node which we called **next**

```js
// create node class
class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```

this is all of our node class, we just create node class and take value and initialize the value and in start peroid the next in null because the is way other data were next point to

## create SinglyLinkedList class

so then we create another class called _SinglyLinkedList_ so there i can utilize the node class

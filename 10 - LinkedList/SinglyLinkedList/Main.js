// create a node class

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create the SinglyLinkedList class
class SinglyLinkedList {
  // our class don't take any argument
  constructor() {
    // also a linked list have a head , tail , length
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create the node
    let newNode = new Node(val);
    // if the head is false then head become the newnode and tail become the head
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      // or the head is true the we create the new tail and add a pointer
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // return the whole list
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
console.log(list);

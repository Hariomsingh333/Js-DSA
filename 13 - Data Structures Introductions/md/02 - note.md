# ES2015 CLASS SYNTAX

## What is a class ?

a blueprint for creating objects with pre-defined properties and method.

### class syntax

the method to create new object must be called constructor

- properties always inside in constructor
- method define in out side the constructor

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  logFullName() {
    return this.firstName + " " + this.lastName;
  }
}
```

### Creating object from classes

**we use the _new_ keyword**

```js
let s1 = new Student("sumit", "singh");
console.log(s1.logFullName());

let s2 = new Student("colt", "steel");
console.log(s2.logFullName());
```

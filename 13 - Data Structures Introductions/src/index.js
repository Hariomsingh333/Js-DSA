class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  logFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let s1 = new Student("sumit", "singh");
console.log(s1.logFullName());

let s2 = new Student("colt", "steel");
console.log(s2.logFullName());

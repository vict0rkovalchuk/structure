"use strict";

class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }
}

const mango = new User("Mango", 2, 20);
const poly = new User("Poly", 3, 17);

console.log(mango.getInfo());
console.log(poly.getInfo());

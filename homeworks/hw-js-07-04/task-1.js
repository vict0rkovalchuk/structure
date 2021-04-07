"use strict";

class Calculator {
  constructor(a, b, value) {
    this.a = a;
    this.b = b;
    this.value = value;
  }
  indicateNumbers() {
    this.a = +prompt("Number:");
    this.b = +prompt("Number:");
    return this.a, this.b;
  }

  sum() {
    this.value = this.a + this.b;
    console.log(this.value);
  }

  sub() {
    this.value = this.a - this.b;
    console.log(this.value);
  }

  mult() {
    this.value = this.a * this.b;
    console.log(this.value);
  }

  div() {
    this.value = this.a / this.b;
    console.log(this.value);
  }

  result() {
    console.log(`Результат операції ${this.value}`);
  }

  newFunctional() {
    console.log(this.power());
  }

  power() {
    return this.a ** this.b;
  }
}

let calc = new Calculator();

calc.indicateNumbers();
calc.sum();
calc.result();
calc.sub();
calc.result();
calc.mult();
calc.result();
calc.div();
calc.result();
calc.newFunctional();

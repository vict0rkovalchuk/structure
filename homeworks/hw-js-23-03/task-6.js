"use strict";

let input;
let total = 0;
const numbers = [];

do {
  input = prompt("Number:");
  numbers.push(Number(input));
} while (input != null);

if (numbers.length > 0) {
  for (let element of numbers) {
    total += element;
  }
  console.log(total);
}

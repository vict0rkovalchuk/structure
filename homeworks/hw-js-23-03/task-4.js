"use strict";

// let numbers = [10, 20, 2, 30, 1, 50];

// function findSmallestNumber(items) {
//   let smallestNumber = items[0];

//   for (let i = 0; i < items.length; i += 1) {
//     console.log(items[i]);
//     if (items[i] < smallestNumber) {
//       smallestNumber = items[i];
//     }
//   }

//   return smallestNumber;
// }

// let num = findSmallestNumber(numbers);
// console.log(num);
//===============================================================

function funcA() {
  console.log("Start A");
  funcB();
  console.log("Start A");
}

function funcB() {
  console.log("Func  execution");
}

funcB();

// console.log("Main code");
// func();
// console.log("Main continue");

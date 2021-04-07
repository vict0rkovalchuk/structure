"use strict";

function some(array, func) {
  let someArray = [];
  for (let item of array) {
    if (func(item)) someArray.push(item);
  }
  if (someArray.length > 0 && someArray.length <= array.length) {
    return true;
  }
  return false;
}

console.log(some([1, 2, 3, 23, 5], (element) => element > 10));
console.log(some([12, 45, 67, 34], (element) => element < 10));

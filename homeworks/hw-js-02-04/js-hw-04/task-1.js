"use strict";
function every(array, func) {
  let filterArray = [];
  for (let item of array) {
    if (func(item)) filterArray.push(item);
  }
  if (array.length == filterArray.length) {
    return true;
  }
  return false;
}

console.log(every([1, 2, 3, 4, 5], (element) => element < 10));
console.log(every([2, 45, 67, 34], (element) => element > 10));

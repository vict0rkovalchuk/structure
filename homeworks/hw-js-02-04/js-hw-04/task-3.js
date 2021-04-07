"use strict";

function compact(array, func) {
  let compactArray = [];
  for (let item of array) {
    if (func(item)) {
      compactArray.push(item);
    }
  }
  return compactArray;
}

console.log(compact([1, 0, "", null, "Hello"], (element) => Boolean(element)));

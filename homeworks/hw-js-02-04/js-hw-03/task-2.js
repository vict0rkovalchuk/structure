"use strict";

const isObjectEmpty = function (object) {
  let length = Object.keys(object).length;
  if (length == 0) {
    return true;
  }
  if (length > 0) {
    return false;
  }
};

console.log(isObjectEmpty({})); // true
console.log(isObjectEmpty({ name: "Vasilis", age: 21 })); // false

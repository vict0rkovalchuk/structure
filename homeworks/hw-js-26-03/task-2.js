"use strict";

const countProps = function (obj) {
  let arr = Object.keys(obj);
  let length = arr.length;
  return length;
};

console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

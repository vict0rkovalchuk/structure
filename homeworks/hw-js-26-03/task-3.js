"use strict";

const findBestEmployee = function (employees) {
  let arr = Object.values(employees);
  let max = Math.max(...arr);
  // const key = Object.keys(employees).find((key) => employees[key] === max);
  for (let key in employees) {
    if (max === employees[key]) {
      return key;
    }
  }
  // return key;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

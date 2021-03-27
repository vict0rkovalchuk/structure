"use strict";

const formatString = function (string) {
  let array = string.split("");
  if (array.length <= 40) {
    return string;
  } else if (array.length > 40) {
    let change = string.slice(0, 40);
    return `${change}...`;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

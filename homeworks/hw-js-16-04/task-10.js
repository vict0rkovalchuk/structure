"use strict";

import scientists from "./scientists.js";

let arrayOfLiviedYears = scientists
  .reduce((acc, { dead, born }) => {
    acc.push(dead - born);
    return acc;
  }, [])
  .sort((a, b) => a - b);

let least = arrayOfLiviedYears.shift();
let most = arrayOfLiviedYears.pop();

function findScientists(value) {
  let scientistOfLivedYears = scientists.find(({ dead, born }) => {
    return dead - born === value;
  });

  return scientistOfLivedYears;
}

console.log(findScientists(least));
console.log(findScientists(most));

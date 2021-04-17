"use strict";

import scientists from "./scientists.js";

let allDatasOfBorns = scientists
  .reduce((acc, { born }) => {
    acc.push(born);
    return acc;
  }, [])
  .sort((a, b) => a - b);

let lastElement = allDatasOfBorns.pop();

let nameOfScientist = scientists.find(({ born }) => born === lastElement);

console.log(nameOfScientist);

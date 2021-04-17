"use strict";

import scientists from "./scientists.js";

let sortScientists = scientists
  .reduce((acc, { name }) => {
    acc.push(name);
    return acc;
  }, [])
  .sort();

console.log(sortScientists);

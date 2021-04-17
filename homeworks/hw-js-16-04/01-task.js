"use strict";

import scientists from "./scientists.js";

let namesOfScientists = scientists.reduce((acc, { born, name }) => {
  if (born > 1800 && born < 1900) {
    acc.push(name);
  }
  return acc;
}, []);

console.log(namesOfScientists);

"use strict";

import scientists from "./scientists.js";

let deleteSomeScientists = scientists.reduce((acc, { born, name }) => {
  if (born < 1400) {
    acc.push(name);
  } else if (born > 1700) {
    acc.push(name);
  }
  return acc;
}, []);

console.log(deleteSomeScientists);

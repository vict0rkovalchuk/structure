"use strict";

import scientists from "./scientists.js";

let someOfScientists = scientists.filter((item) => {
  if (
    (item.born > 1800 && item.born < 1900) ||
    (item.dead > 1800 && item.dead < 1900)
  ) {
    return item;
  }
});

console.log(scientists.length == someOfScientists.length);

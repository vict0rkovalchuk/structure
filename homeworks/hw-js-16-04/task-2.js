"use strict";

import scientists from "./scientists.js";

let sumOfYears = scientists.reduce(
  (acc, { born, dead }) => acc + dead - born,
  0
);

console.log(sumOfYears);

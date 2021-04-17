"use strict";

import scientists from "./scientists.js";

let sort = scientists
  .sort((a, b) => a.dead - a.born - (b.dead - b.born))
  .reduce((acc, { name }) => {
    acc.push(name);
    return acc;
  }, []);

console.log(sort);

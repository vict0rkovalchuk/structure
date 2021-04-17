"use strict";

import scientists from "./scientists.js";

let filteredScientistsByFirstsLetters = scientists.filter(
  ({ name, surname }) => {
    let nameSplit = name.split("");
    let surnameSplit = surname.split("");
    return nameSplit[0] == surnameSplit[0];
  }
);

console.table(filteredScientistsByFirstsLetters);

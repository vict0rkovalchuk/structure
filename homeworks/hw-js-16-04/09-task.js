"use strict";

import scientists from "./scientists.js";

scientists.forEach((item) => {
  let surnameOfScientists = item.name.split("");
  if (surnameOfScientists[0] != "A") {
    console.log(item);
  }
});

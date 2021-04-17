"use strict";

import scientists from "./scientists.js";

scientists.forEach((item) => {
  let surnameOfScientists = item.surname.split("");
  if (surnameOfScientists[0] === "C") {
    console.log(item);
  }
});

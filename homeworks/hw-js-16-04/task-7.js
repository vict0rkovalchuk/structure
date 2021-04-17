"use strict";

import scientists from "./scientists.js";

let nameOfScientist = "Albert";
let surnameOfScientist = "Einstein";
let albertEinstein = scientists.reduce((acc, { name, surname, born }) => {
  if (name == nameOfScientist && surname == surnameOfScientist) {
    return (acc += born);
  }
  return acc;
}, 0);

console.log(albertEinstein);

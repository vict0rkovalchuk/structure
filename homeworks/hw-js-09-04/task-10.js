"use strict";

import users from "./users.js";

let arrOfSkills = [];
const getSortedUniqueSkills = (users) => {
  users.forEach((element) => {
    element.skills.forEach((item) => {
      if (arrOfSkills.includes(item)) {
      } else arrOfSkills.push(item);
    });
  });
  return arrOfSkills.sort();
};

console.log(getSortedUniqueSkills(users));

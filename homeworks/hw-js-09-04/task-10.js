"use strict";

import users from "./users.js";

const getSortedUniqueSkills = (users) =>
  users
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((element, index, array) => array.indexOf(element) === index)
    .sort();

// let arrOfSkills = [];
// const getSortedUniqueSkills = (users) => {
//   users.forEach((element) => {
//     element.skills.forEach((item) => {
//       if (arrOfSkills.includes(item)) {
//       } else arrOfSkills.push(item);
//     });
//   });
//   return arrOfSkills.sort();
// };

console.log(getSortedUniqueSkills(users));

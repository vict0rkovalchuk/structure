"use strict";

import users from "./users.js";

//Variant 1
const getSortedUniqueSkills = (users) =>
  users
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((element, index, array) => array.indexOf(element) === index)
    .sort();

//Variant 2
// const getSortedUniqueSkills = (users) =>
//   users
//     .reduce((acc, { skills }) => {
//       acc.push(...skills);
//       return acc;
//     }, [])
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .sort();

//Variant 3
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

"use strict";

import users from "./users.js";

const getUsersWithAge = (users, min, max) =>
  users.filter(({ age }) => age > min && age < max);

// const getUsersWithAge = (users, min, max) => {
//   return users.filter((element) => {
//     return element.age > min && element.age < max;
//   });
// };

console.table(getUsersWithAge(users, 20, 30));
console.table(getUsersWithAge(users, 30, 40));

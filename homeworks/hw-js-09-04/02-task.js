"use strict";

import users from "./users.js";

const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color);

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((item) => {
//     return item.eyeColor === color;
//   });
// };

console.table(getUsersWithEyeColor(users, "blue"));

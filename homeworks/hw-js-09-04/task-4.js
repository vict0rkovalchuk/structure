"use strict";

import users from "./users.js";

const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);

// const getInactiveUsers = (users) => {
//   return users.filter((item) => {
//     return !item.isActive;
//   });
// };

console.log(getInactiveUsers(users));

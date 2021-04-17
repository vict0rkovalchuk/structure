"use strict";

import users from "./users.js";

const getUserNames = (users) => users.map(({ name }) => name);

// const getUserNames = (users) => {
//   return users.map((item) => {
//     return item.name;
//   });
// };

console.log(getUserNames(users));

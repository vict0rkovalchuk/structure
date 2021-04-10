"use strict";

import users from "./users.js";

const calculateTotalBalance = (users) =>
  users.reduce((acc, { balance }) => acc + balance, 0);

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, element) => {
//     return acc + element.balance;
//   }, 0);
// };

console.log(calculateTotalBalance(users));

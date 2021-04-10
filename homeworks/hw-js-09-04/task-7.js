"use strict";

import users from "./users.js";

const calculateTotalBalance = (users) => {
  return users.reduce((acc, element) => {
    return acc + element.balance;
  }, 0);
};

console.log(calculateTotalBalance(users));

"use strict";

import users from "./users.js";

const getInactiveUsers = (users) => {
  return users.filter((item) => {
    return !item.isActive;
  });
};
console.log(getInactiveUsers(users));

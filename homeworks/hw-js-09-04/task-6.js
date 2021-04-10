"use strict";

import users from "./users.js";

const getUsersWithAge = (users, min, max) => {
  return users.filter((element) => {
    return element.age > min && element.age < max;
  });
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

"use strict";

import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  return users.reduce((acc, item) => {
    if (item.gender === gender) {
      acc.push(item.name);
    }
    return acc;
  }, []);
};
console.log(getUsersWithGender(users, "male"));

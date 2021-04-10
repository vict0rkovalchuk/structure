"use strict";

import users from "./users.js";

const getUserWithEmail = (users, email) => {
  return users.find((element) => {
    return element.email === email;
  });
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

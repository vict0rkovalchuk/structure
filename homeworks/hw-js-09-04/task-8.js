"use strict";

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((acc, element) => {
    if (element.friends.includes(friendName)) {
      acc.push(element.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

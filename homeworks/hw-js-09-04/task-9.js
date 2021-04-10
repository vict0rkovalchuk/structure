"use strict";

import users from "./users.js";

const getNamesSortedByFriendsCount = (users) =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .reduce((acc, { name }) => {
      acc.push(name);
      return acc;
    }, []);

// const getNamesSortedByFriendsCount = (users) => {
//   return users
//     .sort((a, b) => {
//       return a.friends.length - b.friends.length;
//     })
//     .reduce((acc, element) => {
//       acc.push(element.name);
//       return acc;
//     }, []);
// };

console.log(getNamesSortedByFriendsCount(users));

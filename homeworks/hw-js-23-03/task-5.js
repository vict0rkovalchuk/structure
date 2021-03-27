"use strict";

const checkForSpam = function (message) {
  let messageUpper = message.toLowerCase();
  let array = messageUpper.split(/\b/);
  if (array.includes("sale") || array.includes("spam")) {
    return true;
  } else return false;
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));

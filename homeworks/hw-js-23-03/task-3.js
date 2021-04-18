"use strict";

const findLongestWord = function (string) {
  let array = string.split(" ");
  function longestWord(items) {
    let firstElement = items[0].length;

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].length > firstElement) {
        firstElement = items[i].length;
      }
    }

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].length === firstElement) console.log(items[i]);
    }
  }
  longestWord(array);
};

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");

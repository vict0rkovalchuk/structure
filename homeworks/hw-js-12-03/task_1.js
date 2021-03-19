"use strict";

let answer = prompt("Рік народження", "");

if (answer == 1800 || answer == 1900 || answer == 2100) {
  console.log("Рік народження невисокосний");
} else if (answer % 4 == 0) {
  console.log("Рік народження високосний");
} else if (isNaN(answer)) {
  console.log("Некоректне значення");
} else {
  console.log("Рік народження невисокосний");
}

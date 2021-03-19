" use strict";

const values = [];

values[0] = prompt("Перше число");
values[1] = prompt("Друге число");
values[2] = prompt("Третє число");

let largest = Math.max.apply(Math, values);

if (isNaN(values[0] || isNaN(values[1]) || isNaN(values[2]))) {
  alert("Error");
} else console.log(largest);

"use strict";

let numberOfComputer = Math.ceil(Math.random() * 10);
let guess = +prompt("Яке число загадав комп'ютер?", "");

if (numberOfComputer == guess) {
  alert(`Вітаю ви вгадали число ${numberOfComputer}`);
} else {
  alert(`Ви програли, комп'ютер загадав ${numberOfComputer}`);
}

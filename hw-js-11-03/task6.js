"use strict";

let total = 0;

for (let i = 0; i < 1; i++) {
  let input = prompt("Введите номер");

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
  } else {
    input = +input;
    if (isNaN(input)) {
      i--;
      alert("Было введено не число, попробуйте еще раз");
    } else {
      i--;
      total += input;
    }
  }
}

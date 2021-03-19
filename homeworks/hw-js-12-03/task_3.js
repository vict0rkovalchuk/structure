"use strict";

for (let i = 0; i < 1; i += 1) {
  let value1 = +prompt("Перше значення", "");
  let value2 = +prompt("Друге значення", "");
  let sign = prompt("Знак операції", "");

  if (sign == "+") {
    console.log(`Сума чисел ${value1} i ${value2} = ${value1 + value2}`);
  } else if (sign == "-") {
    console.log(`Різниця чисел ${value1} i ${value2} = ${value1 - value2}`);
  } else if (sign == "*") {
    console.log(`Добуток чисел ${value1} i ${value2} = ${value1 * value2}`);
  } else if (sign == "/") {
    console.log(`Частка чисел ${value1} i ${value2} = ${value1 / value2}`);
  } else {
    let message = confirm(
      "Можливі знаки операцій: +, -, *, /. Повторити спробу?"
    );
    if (message) {
      i--;
    } else
      console.log(
        "%cFinish",
        "color: #072448; font-weight: bold; background-color: #f8aa4b; border:  2px solid #ff6150"
      );
  }
}

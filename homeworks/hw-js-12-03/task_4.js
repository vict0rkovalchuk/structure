"use strict";

let variant = prompt('Введіть "F" для Фарангейта, "C" для Цельсія');

let value = +prompt("Градус");

if (variant == "F") {
  if (value == "") {
    console.log("Error 1");
  } else
    alert(
      `${value} градусів по Фарангейту дорівнює ${
        (value - 32) / 1.8
      } по Цельсію`
    );
} else if (variant == "C") {
  if (value == "") {
    console.log("Error 2");
  } else
    alert(
      `${value} градусів по Цельсію дорівнює ${value * 1.8 + 32} по Фарангейту`
    );
} else if (variant == "" || value == "" || (variant == "" && value == "")) {
  console.log("Перевірте введені дані");
} else console.log("%cError 3", "color: red");

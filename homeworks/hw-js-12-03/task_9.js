"use strict";

for (let i = 0; i < 1; i += 1) {
  let variants = ["Камінь", "Ножиці", "Папір"];
  let randomValue = Math.floor(Math.random() * 3);
  let selectedVariant = variants[randomValue];

  let userChoise = prompt("Камінь, ножиці чи папір?");
  const sliceLeft = userChoise.slice(0, 1).toUpperCase();
  const sliceRight = userChoise.slice(1).toLowerCase();
  const result = sliceLeft + sliceRight;

  if (
    (selectedVariant == "Камінь" && result == "Ножиці") ||
    (selectedVariant == "Ножиці" && result == "Папір") ||
    (selectedVariant == "Папір" && result == "Камінь")
  ) {
    alert("Комп'ютер виграв!");
  } else if (selectedVariant == result) {
    i--;
  } else alert("Виграш! ☺");
}

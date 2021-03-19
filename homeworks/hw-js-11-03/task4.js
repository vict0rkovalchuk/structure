"use strict";

const credits = 35500;
const pricePerDroid = 3000;
let numberOfDroids = prompt("Сколь дроидов вы хотите приобрести?", "");
const totalPrice = numberOfDroids * pricePerDroid;

if (numberOfDroids == null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else
  console.log(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов!`
  );

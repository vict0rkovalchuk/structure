"use strict";

const ADMIN_PASSWORD = "adminpass";
let message = prompt("Введите пароль", "");

if (message == null) {
  console.log("Отменено пользователем!");
} else if (message == ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
} else {
  console.log("Доступ запрещен, неверный пароль!");
}

alert(message);

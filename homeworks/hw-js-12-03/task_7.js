"use  strict";

let mark = +prompt("Оцінка");

if (mark >= 89 && mark <= 100) {
  alert("Оцінка A");
} else if (mark >= 75 && mark <= 88) {
  alert("Оцінка B");
} else if (mark >= 60 && mark <= 74) {
  alert("Оцінка C");
} else if (mark >= 45 && mark <= 59) {
  alert("Оцінка D");
} else if (mark >= 20 && mark <= 44) {
  alert("Оцінка E");
} else if (mark < 20 && mark > 0) {
  alert("Оцінка F");
} else alert("Неправильний формат");

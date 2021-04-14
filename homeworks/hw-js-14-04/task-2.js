"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let ingredientsElement = document.querySelector("#ingredients");

let html = "";
ingredients.forEach((item) => {
  html += `<li>${item}</li>`;
});

ingredientsElement.innerHTML = html;

"use strict";

let input = document.querySelector("#name-input"),
  span = document.querySelector("#name-output");

input.addEventListener("change", () => {
  span.textContent = input.value;
});

"use strict";

let input = document.querySelector("#validation-input"),
  len = +input.getAttribute("data-length");

input.addEventListener("change", () => {
  if (input.value.length === len) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

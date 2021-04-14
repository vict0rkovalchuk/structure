"use strict";

let counterValue = document.querySelector("#value"),
  numberCount = +counterValue.textContent,
  dec = document.getElementsByTagName("button")[0],
  inc = document.getElementsByTagName("button")[1];

dec.addEventListener("click", () => {
  numberCount--;
  counterValue.textContent = numberCount;
});

inc.addEventListener("click", () => {
  numberCount++;
  counterValue.textContent = numberCount;
});

"use strict";

const colors = ["red", "green", "violet", "gray", "blue", "yellow"];

const body = document.querySelector("body"),
  btnStart = document.querySelector(`button[data-action="start"]`),
  btnStop = document.querySelector(`button[data-action="stop"]`);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btnStart.addEventListener("click", () => {
  btnStop.removeAttribute("disabled");
  btnStart.setAttribute("disabled", "true");
  let interval = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);

  btnStop.addEventListener("click", () => {
    btnStart.removeAttribute("disabled");
    btnStop.setAttribute("disabled", "true");
    clearInterval(interval);
  });
});

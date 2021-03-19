"use strict";

let time = +prompt("Кількість хвилин");
let hours = Math.floor(time / 60);
let minutes = time % 60;

alert(`${hours}:${minutes}`);

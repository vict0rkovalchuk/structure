"use strict";

let categories = document.querySelectorAll("li.item");
console.log(`В списке ${categories.length} категории.`);

let listItems = document.querySelectorAll("li.item"),
  titles = document.querySelectorAll("h2");

listItems.forEach((item, indx) => {
  let ul = item.querySelector("ul");
  console.log(
    `Категория: ${titles[indx].innerText} - Количество элементов: ${ul.children.length}`
  );
});

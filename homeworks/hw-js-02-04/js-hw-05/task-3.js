"use strict";

class Storage {
  constructor(array) {
    this.items = array;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    for (let key of this.items) {
      if (key === item) {
        let index = this.items.indexOf(key);
        this.items.splice(index, 1);
        return this.items;
      }
    }
    return this.items;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);
const items = storage.getItems();

console.table(items);
storage.addItem("Дроид");
console.table(storage.items);
storage.removeItem("Пролонгер");
console.table(storage.items);

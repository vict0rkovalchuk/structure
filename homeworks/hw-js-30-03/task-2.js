"use strict";

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter((item) => item !== itemName);
  },
};
const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action = action.bind(inventory);
  action(itemName);
};
invokeInventoryAction("Medkit", inventory.add);
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
invokeInventoryAction("Gas mask", inventory.remove);
console.log(inventory.items); // ['Knife', 'Medkit']

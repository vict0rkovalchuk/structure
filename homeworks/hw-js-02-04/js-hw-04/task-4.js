"use strict";

const ordersA = [
  { name: "Phone", price: 12300, deliveryProgress: 50, type: 0 },
  { name: "Computer", price: 230000, deliveryProgress: 100, type: 1 },
  { name: "Tablet", price: 5000, deliveryProgress: null, type: 2 },
];

const ordersB = [
  { name: "Phone", price: 12300, deliveryProgress: 50, type: 0 },
  { name: "Tablet", price: 5000, deliveryProgress: null, type: 2 },
];

function showDeliveryStatus(array) {
  for (let i = 0; i < array.length; i += 1) {
    const progress = array[i].deliveryProgress;
    if (progress == 100) console.log("Done");
    if (progress < 100 && progress != null) console.log("In progress");
    if (progress == null) console.log("Ready for delivery");
  }
}

showDeliveryStatus(ordersA);
showDeliveryStatus(ordersB);

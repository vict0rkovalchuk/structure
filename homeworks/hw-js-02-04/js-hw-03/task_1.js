"use strict";

const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };

const orderGoods = function (objPrices, objOrders) {
  let sum = 0;
  let prices = Object.keys(objPrices);
  let orders = Object.keys(objOrders);

  for (let key of prices) {
    for (let item of orders) {
      if (key === item) {
        sum += objPrices[key] * objOrders[key];
      }
    }
  }
  console.log(sum);
};

const orderA = { apple: 5, cheese: 1, bread: 3 };
const orderB = { orange: 10, pork: 2, bread: 1 };

orderGoods(productsPrice, orderA);
orderGoods(productsPrice, orderB);

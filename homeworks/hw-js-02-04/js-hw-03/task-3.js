"use strict";

const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};

let allSizes = Object.keys(SIZES);
let { BIG, SMALL, MEDIUM } = SIZES;

const STUFFING = {
  CHEESE: { price: 6.5, cal: 45, time: 2 },
  BEACON: { price: 10, cal: 70, time: 6 },
  TOMATO: { price: 12.1, cal: 4, time: 5 },
  CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};

let allStuffing = Object.keys(STUFFING);
let { CHEESE, BEACON, TOMATO, CHICKEN } = STUFFING;

const SAUCES = {
  MUSTARD: { price: 3, cal: 5, time: 1 },
  KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};

let allSauces = Object.keys(SAUCES);
let { MUSTARD, KETCHUP, BOLOGNESE } = SAUCES;

const pizza = {
  size: "",
  stuffing: [],
  sauce: [],

  addStuffing(kindOfStuffing) {
    if (this.stuffing.includes(kindOfStuffing)) {
      console.log("Such stuffing already exists");
    } else {
      this.stuffing.push(kindOfStuffing);
      console.log(this.stuffing);
    }
  },

  addSauce(kindOfSauce) {
    if (this.sauce.includes(kindOfSauce)) {
      console.log("Such sauce already exists");
    } else {
      this.sauce.push(kindOfSauce);
      console.log(this.sauce);
    }
  },

  deleteStuffing(kindOfStuffing) {
    if (pizza.stuffing.includes(kindOfStuffing)) {
      pizza.stuffing.splice(pizza.stuffing.indexOf(kindOfStuffing), 1);
      console.log(pizza.stuffing);
    } else {
      console.log("Such kind of suffing doesn't exist");
    }
  },

  deleteSauce(kindOfSauce) {
    if (pizza.sauce.includes(kindOfSauce)) {
      pizza.sauce.splice(pizza.sauce.indexOf(kindOfSauce), 1);
      console.log(pizza.sauce);
    } else {
      console.log("Such kind of sauce doesn't exist");
    }
  },

  sizeOfPizza(sizeOfPizza) {
    pizza.size = sizeOfPizza;
    console.log(pizza.size);
  },

  /*
  totalPrice(pizzaSize) {
    let totalSum = 0;
    totalSum += SIZES.pizzaSize.price;
    console.log(totalSum);
  },
  */
};

let addStuffing = pizza.addStuffing.bind(pizza);
addStuffing("CHICKEN");
addStuffing("TOMATO");
addStuffing("CHICKEN");

let addSauce = pizza.addSauce.bind(pizza);
addSauce("MUSTARD");
addSauce("KETCHUP");
addSauce("MUSTARD");

let deleteStuffing = pizza.deleteStuffing.bind(pizza);
deleteStuffing("CHEESE");
deleteStuffing("TOMATO");

let deleteSauce = pizza.deleteSauce.bind(pizza);
deleteSauce("BOLOGNESE");
deleteSauce("MUSTARD");

let sizeOfPizza = pizza.sizeOfPizza.bind(pizza);
sizeOfPizza("BIG");

let totalPrice = pizza.totalPrice.bind(pizza);
totalPrice("BIG");

console.log(pizza);

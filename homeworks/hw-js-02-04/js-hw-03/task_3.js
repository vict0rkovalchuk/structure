let PIZZA = {
  size: '',
  time: 0,
  calories: 0,
  price: 0,
  stuffsList: [],
  saucesList: [],

  addStuff(nameOfStuff) {
    if (this.stuffsList.includes(nameOfStuff)) {
      console.log('Already exists');
    } else {
      this.stuffsList.push(nameOfStuff);
    }
  },

  addSauce(nameOfSauce) {
    if (this.saucesList.includes(nameOfSauce)) {
      console.log('Already exists');
    } else {
      this.saucesList.push(nameOfSauce);
    }
  },

  deleteStuff(nameOfStuff) {
    if (!this.stuffsList.includes(nameOfStuff)) {
      console.log("You didn't order this kind of stuff");
    } else {
      this.stuffsList.splice(this.stuffsList.indexOf(nameOfStuff), 1);
    }
  },

  deleteSauce(nameOfSauce) {
    if (!this.saucesList.includes(nameOfSauce)) {
      console.log("You didn't order this kind of sauce");
    } else {
      this.saucesList.splice(this.saucesList.indexOf(nameOfSauce), 1);
    }
  },

  chooseSizeOfPizza(size) {
    this.size = size;
  },

  pizzaPrice(SIZES, STUFFING, SAUCES) {
    this.price += SIZES[this.size].price;
    for (let item of this.stuffsList) {
      this.price += STUFFING[item].price;
    }
    for (let item of this.saucesList) {
      this.price += SAUCES[item].price;
    }
  },

  generalCalories(SIZES, STUFFING, SAUCES) {
    this.calories += SIZES[this.size].cal;
    for (let item of this.stuffsList) {
      this.calories += STUFFING[item].cal;
    }
    for (let item of this.saucesList) {
      this.calories += SAUCES[item].cal;
    }
  },

  durationOfPizzaCooking(SIZES, STUFFING, SAUCES) {
    this.time += SIZES[this.size].time;
    for (let item of this.stuffsList) {
      this.time += STUFFING[item].time;
    }
    for (let item of this.saucesList) {
      this.time += SAUCES[item].time;
    }
  },

  isPizzaValid() {
    if (
      this.size === '' ||
      this.stuffsList.length === 0 ||
      this.saucesList.length === 0
    ) {
      return false;
    } else if (
      this.size !== '' &&
      this.stuffsList.length > 0 &&
      this.saucesList.length > 0
    ) {
      return true;
    }
  },

  generalInfo() {
    if (this.isPizzaValid()) {
      return `Your order have a price: ${this.price}; calories: ${
        this.calories
      }; stuffs: ${this.stuffsList
        .join(', ')
        .toLowerCase()}; sauces: ${this.saucesList.join(', ').toLowerCase()}.`;
    }
    return 'Not valid';
  },
};

const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};

const STUFFING = {
  CHEESE: { price: 6.5, cal: 45, time: 2 },
  BEACON: { price: 10, cal: 70, time: 6 },
  TOMATO: { price: 12.1, cal: 4, time: 5 },
  CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};

const SAUCES = {
  MUSTARD: { price: 3, cal: 5, time: 1 },
  KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};

PIZZA.addStuff('CHEESE');
PIZZA.addStuff('BEACON');

PIZZA.addSauce('MUSTARD');
PIZZA.addSauce('KETCHUP');

PIZZA.deleteStuff('CHEESE');

PIZZA.deleteSauce('MUSTARD');

PIZZA.chooseSizeOfPizza('BIG');

PIZZA.isPizzaValid();

PIZZA.pizzaPrice(SIZES, STUFFING, SAUCES);

PIZZA.generalCalories(SIZES, STUFFING, SAUCES);

PIZZA.durationOfPizzaCooking(SIZES, STUFFING, SAUCES);

console.log(PIZZA.generalInfo());

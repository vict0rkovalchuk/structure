"use strict";

class Car {
  static getSpecs(car) {
    console.log(
      `Speed: ${car.speed}, Price: ${car.price}, Max speed: ${car.maxSpeed}, isOn: ${car.isOn}, distance: ${car.distance}`
    );
  }

  constructor(speed = 0, price, maxSpeed, isOn = false, distance = 0) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get pricer() {
    return this.price;
  }

  set pricer(number) {
    return this.price + number - number;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value > this.maxSpeed) {
      console.log(`The speed ${value} is over fast`);
    } else this.speed += value;
  }

  decelerate(value) {
    if (this.speed - value <= 0) {
      console.log(`The speed ${value} is too high`);
    } else this.speed -= value;
  }

  drive(hours) {
    if (this.isOn == true) {
      this.distance += hours * this.speed;
      return this.distance;
    } else console.log("The car is not started");
  }
}

const mercedesBenzW223 = new Car(110, 176189, 250, false, 95);

mercedesBenzW223.turnOn();
mercedesBenzW223.accelerate(50);
mercedesBenzW223.drive(2);

Car.getSpecs(mercedesBenzW223);
mercedesBenzW223.decelerate(20);
mercedesBenzW223.drive(1);
mercedesBenzW223.turnOff();

Car.getSpecs(mercedesBenzW223);
console.log(mercedesBenzW223.price);
mercedesBenzW223.price = 116300;
console.log(mercedesBenzW223.price);

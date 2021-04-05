"use strict";

function Account(login, email) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const mango = new Account("Mangozedog", "mango@dog.woof");
const poly = new Account("Poly", "poly@mail.com");

console.log(Account.prototype.getInfo); // function
mango.getInfo();
poly.getInfo();

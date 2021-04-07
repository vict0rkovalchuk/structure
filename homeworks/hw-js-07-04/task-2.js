"use strict";

class Library {
  allBooks = [];
  favouriteBooks = [];
  readBooks = [];
  totalPrice = 0;

  buy(objBook, price) {
    if (this.allBooks.includes(objBook)) {
      console.log("The book has already been purchased");
    } else {
      this.allBooks.push(objBook);
      this.readBooks.push(objBook);
      this.totalPrice += price;
      console.log(this.allBooks);
    }
  }

  sell(nameOfBook) {
    if (this.allBooks.includes(nameOfBook)) {
      this.allBooks.splice(this.allBooks.indexOf(nameOfBook), 1);
      console.log(this.allBooks);
    } else console.log(this.allBooks);
  }
  addToFavourite(nameOfBook) {
    this.favouriteBooks.push(nameOfBook);
    this.readBooks.push(nameOfBook);
    console.log(this.favouriteBooks);
  }

  removeFromFavourite(nameOfBook) {
    if (this.favouriteBooks.includes(nameOfBook)) {
      this.favouriteBooks.splice(this.favouriteBooks.indexOf(nameOfBook), 1);
      console.log(this.favouriteBooks);
    } else console.log(this.favouriteBooks);
  }

  get сountFavouriteBooks() {
    return this.favouriteBooks.length;
  }

  get finishedBook() {
    return this.readBooks;
  }

  get totalCost() {
    return `${this.totalPrice}$`;
  }
}

let lib = new Library();

lib.buy("Deception Point", 13.95);
lib.buy("Digital Fortress", 9.99);
lib.buy("His Last Bow", 13.29);
lib.buy("Deception Point", 13.95);
lib.sell("Digital Fortress");
lib.addToFavourite("The Da Vinci Code");
lib.addToFavourite("The Adventures of Sherlock Holmes");
lib.removeFromFavourite("The Da Vinci Code");
console.log(lib.сountFavouriteBooks);
console.log(lib.finishedBook);
console.log(lib.totalCost);

class Book {
  constructor(objectBook) {
    let { author, title, price, totalPages, currentPage } = objectBook;
    this.author = author;
    this.title = title;
    this.price = price;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
  }

  read(numberOfReadPages) {
    this.currentPage = numberOfReadPages;
  }

  bookProgresPercent() {
    return `${(this.currentPage * 100) / this.totalPages}%`;
  }

  bookProgresPages() {
    return `${
      (((this.currentPage * 100) / this.totalPages) * this.totalPages) / 100
    } pages`;
  }
}

let henryInfo = {
  author: "Henry Ford",
  title: " My Life and Work",
  price: 15.99,
  totalPages: 309,
  currentPage: 0,
};

let henry = new Book(henryInfo);

henry.read(155);
console.log(henry.bookProgresPercent());
console.log(henry.bookProgresPages());

let dreamcatcherInfo = {
  author: "Stephen King",
  title: "Dreamcatcher",
  price: 11.99,
  totalPages: 896,
  currentPage: 0,
};

let dreamcatcher = new Book(dreamcatcherInfo);

dreamcatcher.read(290);
console.log(dreamcatcher.bookProgresPercent());
console.log(dreamcatcher.bookProgresPages());

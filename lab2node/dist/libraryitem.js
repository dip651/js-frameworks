"use strict";
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.borrowed = false;
    }
    borrow() {
        this.borrowed = true;
    }
}
class Magazine {
    constructor(title, author, chapter) {
        this.title = title;
        this.author = author;
        this.chapter = chapter;
        this.borrowed = false;
    }
    borrow() {
        this.borrowed = true;
    }
}
class DVD {
    constructor(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.borrowed = false;
    }
    borrow() {
        this.borrowed = true;
    }
}
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    findItemByName(name) {
        return this.items.find(i => i.title === name);
    }
    listAvailable() {
        this.items
            .filter(i => !i.borrowed)
            .forEach(i => {
            console.log(`title: ${i.title}, author: ${i.author}`);
        });
    }
}
const lib = new Library();
const book1 = new Book("the green mile", "stephen king", 328);
const mag1 = new Magazine("batman year one", "dc comics", 42);
const dvd1 = new DVD("inception", "christopher nolan", 148);
lib.addItem(book1);
lib.addItem(mag1);
lib.addItem(dvd1);
lib.listAvailable();
book1.borrow();
const found = lib.findItemByName("the green mile");
console.log(`found: ${found === null || found === void 0 ? void 0 : found.title}, borrowed: ${found === null || found === void 0 ? void 0 : found.borrowed}`);
lib.listAvailable();

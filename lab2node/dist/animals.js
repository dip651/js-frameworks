"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = exports.Cat = void 0;
class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    move() {
        console.log(`${this.name} is walking.`);
    }
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}
exports.Cat = Cat;
class Bird {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    move() {
        console.log(`${this.name} is flying.`);
    }
    makeSound() {
        console.log(`${this.name} tweet-tweets.`);
    }
}
exports.Bird = Bird;
class Fish {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    move() {
        console.log(`${this.name} is swimming.`);
    }
    makeSound() {
        console.log(`${this.name} does NOT make sounds.`);
    }
}
exports.Fish = Fish;

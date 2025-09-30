import { Cat, Bird, Fish } from './animals';

const myCat = new Cat("Tom", 3, "gray");
const myBird = new Bird("Birdie", undefined, "yellow");
const myFish = new Fish("Nemo", 1, "orange");

myCat.move();
myBird.move();
myFish.move();

myCat.makeSound();
myBird.makeSound();
myFish.makeSound();
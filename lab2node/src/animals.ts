export interface Animal {
    name: string;
    age?: number;
    color?: string;

    move(): void;
    makeSound(): void;
}

export class Cat implements Animal {
    name: string;
    age?: number;
    color?: string;

    constructor(name: string, age?: number, color?: string) {
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

export class Bird implements Animal {
    name: string;
    age?: number;
    color?: string;

    constructor(name: string, age?: number, color?: string) {
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

export class Fish implements Animal {
    name: string;
    age?: number;
    color?: string;

    constructor(name: string, age?: number, color?: string) {
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
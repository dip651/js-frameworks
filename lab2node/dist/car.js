"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getYear() {
        return this.year;
    }
}
class Toyota extends Car {
    constructor(model, year, color) {
        super("Toyota", model, year);
        this.color = color;
    }
    showInfo() {
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.getYear()}, color: ${this.color}`);
    }
}
class BMW extends Car {
    constructor(model, year, engine) {
        super("BMW", model, year);
        this.engine = engine;
    }
    showInfo() {
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.getYear()}, engine: ${this.engine}`);
    }
}
class Tesla extends Car {
    constructor(model, year, battery) {
        super("Tesla", model, year);
        this.battery = battery;
    }
    showInfo() {
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.getYear()}, battery: ${this.battery} kWh`);
    }
}
const car1 = new Toyota("Corolla", 2020, "red");
const car2 = new Toyota("Camry", 2022, "black");
const car3 = new BMW("X5", 2021, "diesel");
const car4 = new BMW("M3", 2023, "petrol");
const car5 = new Tesla("Model 3", 2022, 75);
const car6 = new Tesla("Model S", 2023, 100);
car1.showInfo();
car2.showInfo();
car3.showInfo();
car4.showInfo();
car5.showInfo();
car6.showInfo();

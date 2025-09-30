"use strict";
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    getAnnualBonus() {
        return this.salary * 0.1;
    }
    pay() {
        console.log(`${this.name} got salary ${this.salary}`);
    }
}
class Manager extends Employee {
    getAnnualBonus() {
        return this.salary * 0.2;
    }
    pay() {
        console.log(`${this.name} got salary ${this.salary}`);
    }
}
const employees = [
    new Developer("walter", 25, 4000),
    new Developer("jesse", 28, 5000),
    new Manager("mike", 35, 6000),
    new Manager("gus", 40, 7000)
];
let totalBonus = 0;
for (const e of employees) {
    totalBonus += e.getAnnualBonus();
}
console.log("total annual bonus:", totalBonus);

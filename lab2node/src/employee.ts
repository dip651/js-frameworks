abstract class Employee {
    public name: string
    public age: number
    public salary: number

    constructor(name: string, age: number, salary: number) {
        this.name = name
        this.age = age
        this.salary = salary
    }

    public abstract getAnnualBonus(): number
}

interface Payable {
    pay(): void
}

class Developer extends Employee implements Payable {
    public getAnnualBonus(): number {
        return this.salary * 0.1
    }

    public pay(): void {
        console.log(`${this.name} got salary ${this.salary}`)
    }
}

class Manager extends Employee implements Payable {
    public getAnnualBonus(): number {
        return this.salary * 0.2
    }

    public pay(): void {
        console.log(`${this.name} got salary ${this.salary}`)
    }
}

const employees: Employee[] = [
    new Developer("walter", 25, 4000),
    new Developer("jesse", 28, 5000),
    new Manager("mike", 35, 6000),
    new Manager("gus", 40, 7000)
]

let totalBonus = 0
for (const e of employees) {
    totalBonus += e.getAnnualBonus()
}

console.log("total annual bonus:", totalBonus)

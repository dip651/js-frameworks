abstract class Car {
    public brand: string
    protected model: string
    private year: number

    constructor(brand: string, model: string, year: number) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    public getYear(): number {
        return this.year
    }

    public abstract showInfo(): void
}

class Toyota extends Car {
    public color: string

    constructor(model: string, year: number, color: string) {
        super("Toyota", model, year)
        this.color = color
    }

    public showInfo(): void {
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.getYear()}, color: ${this.color}`)
    }
}

class BMW extends Car {
    public engine: string

    constructor(model: string, year: number, engine: string) {
        super("BMW", model, year)
        this.engine = engine
    }

    public showInfo(): void {
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.getYear()}, engine: ${this.engine}`)
    }
}

class Tesla extends Car {
    public battery: number

    constructor(model: string, year: number, battery: number) {
        super("Tesla", model, year)
        this.battery = battery
    }

    public showInfo(): void {
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.getYear()}, battery: ${this.battery} kWh`)
    }
}

const car1 = new Toyota("Corolla", 2020, "red")
const car2 = new Toyota("Camry", 2022, "black")
const car3 = new BMW("X5", 2021, "diesel")
const car4 = new BMW("M3", 2023, "petrol")
const car5 = new Tesla("Model 3", 2022, 75)
const car6 = new Tesla("Model S", 2023, 100)

car1.showInfo()
car2.showInfo()
car3.showInfo()
car4.showInfo()
car5.showInfo()
car6.showInfo()

export interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}

export class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number) {
        this.radius *= factor;
    }
}

export class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number) {
        this.width *= factor;
        this.height *= factor;
    }
}

export class Triangle implements Shape {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    scale(factor: number) {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5),
    new Circle(2),
    new Rectangle(2, 3)
];

let totalArea = 0;
let totalPerimeter = 0;

for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}

console.log("Total area:", totalArea);
console.log("Total perimeter:", totalPerimeter);

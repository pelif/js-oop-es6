class Polygon {

    constructor(width, height) {
        this.name = 'Polygon';
        this.width = width;
        this.height = height;
    }

    sayMyType() {
        console.log(`This is a  ${this.name} with width = ${this.width} and height = ${this.height}`)
    }
}

class Square extends Polygon {

    constructor() {
        super(40,40);
        this.name = 'Square';
    }

    getArea() {
        return this.width * this.height;
    }
}

const polygon  = new Polygon(20,30);
console.log(polygon);

const square  = new Square(10);
console.log(square);
square.sayMyType();
console.log(square.getArea());

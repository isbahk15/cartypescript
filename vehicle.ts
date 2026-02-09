// Define the Interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}
// Implement the Class
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(): void {
        console.log("Car engine started");
    }
}
// Create Instance and Test
const myCar = new Car("Toyota", "Corolla", 2024);
myCar.start();

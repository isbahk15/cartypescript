// Implement the Class
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create Instance and Test
var myCar = new Car("Toyota", "Corolla", 2024);
myCar.start();

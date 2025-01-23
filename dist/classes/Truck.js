// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// x TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // x TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
    constructor(vin, color, make, model, year, weight, topSpeed, towingCapacity, wheels) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // x TODO: Create a constructor that accepts the properties of the Truck class
    // x TODO: The constructor should call the constructor of the parent class, Vehicle
    // x TODO: The constructor should initialize the properties of the Truck class
    // x TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    // x TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // x TODO: Get the make and model of the vehicle if it exists
        if (vehicle) {
            if (vehicle.weight <= this.towingCapacity) {
                console.log(`${vehicle.make} ${vehicle.model} is being towed.`);
            }
            else {
                console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed.`);
            }
        }
        // x TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        // x TODO: If it is, log that the vehicle is being towed
        // x TODO: If it is not, log that the vehicle is too heavy to be towed
    }
    // x TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        // x TODO: The method should call the printDetails method of the parent class
        super.printDetails();
        // x TODO: The method should log the details of the Truck
        // x TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        // Print details of the wheels
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
        console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
        console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
    }
}
// Export the Truck class as the default export
export default Truck;

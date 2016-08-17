//Approach #1: Modify a VehicleFactory instance to use the Truck / Car class

var Car = require('./car.js');
var Truck = require('./truck.js');

//create an instance of your factory that makes cars
var VehicleFactory = require('./factory.js');
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
		type: "CAR",
		color: "yellow",
		doors: 6
	});
	
console.log('instance of Car? ', car instanceof Car);
console.log(car);

//create an instance of your factory that makes trucks
var truckFactory = new VehicleFactory();
var truck = truckFactory.createVehicle({
		type: "CAR",
		color: "yellow",
	});
	
console.log('instance of Truck? ', truck instanceof truck);
console.log(truck);
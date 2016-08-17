//Approach #2: Subclass VehicleFactory to create a factory class that builds Cars

var Car = require('./car.js');
var VehicleFactory = require('./factory.js');

function CarFactory(){}
CarFactory.prototype = VehicleFactory.prototype;
CarFactory.prototype.vehicleClass = Car;

var carFactory = new CarFactory();
var car = carFactory.createVehicle({
		type: "CAR",
		color: "yellow",
		doors: 6
	});
	
console.log('instance of Car? ', car instanceof Car);
console.log(car);
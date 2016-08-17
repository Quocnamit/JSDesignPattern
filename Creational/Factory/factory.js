var Truck = require('./truck.js');
var Car = require('./car.js');

var VehicleFactory = function(){}
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options){
	switch(options.type){
		case "CAR":
			this.vehicleClass = Car;
			break;
		case "TRUCK":
			this.vehicleClass = Truck;
			break;
	}
	
	return new this.vehicleClass(options);
}

module.exports = VehicleFactory;
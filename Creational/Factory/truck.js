//Define Truck "class"
var Truck = function(options){
	this.type = options.type.toUpperCase() || "TRUCK";
	this.wheelSize = options.wheelSize || "large";
	this.state = options.state || "used";
	this.color = options.color || "blue";
}

module.exports = Truck;
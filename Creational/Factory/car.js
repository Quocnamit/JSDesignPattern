//Define Car "class"
var Car = function(options){
	this.type = options.type.toUpperCase() || "CAR";
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}

module.exports = Car;

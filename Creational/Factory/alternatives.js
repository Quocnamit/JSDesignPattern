function Boss(options){
  this.type = options.type.toUpperCase() || "BOSS";
  this.baseSalary = options.baseSalary || 1000;
  this.rate = 1;
}
Boss.prototype.calcSalary = function(){
	console.log('boss salary: ', this.rate * this.baseSalary);
}

function Employee(options){
  this.type = options.type.toUpperCase() || "EMPLOYEE";
  this.baseSalary = options.baseSalary || 500;
  this.rate = 0.75;
  this.allowance = 500;
}

Employee.prototype.calcSalary = function(){
	console.log('employee salary: ', this.rate * this.baseSalary + this.allowance);
}

function EmployeeFactory(){
	var employee;
	this.createEmployee = function(options){
		switch(options.type){
			case "BOSS":
				employee = new Boss(options);
				break;
			case "EMPLOYEE":
				employee = new Employee(options);
				break;
		}
		
		return employee;
	}
}

var employees = [];
var employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.createEmployee({
	type:"BOSS",
	baseSalary: 2000
}))

employees.push(employeeFactory.createEmployee({
	type:"EMPLOYEE",
	baseSalary: 1000
}))

for (var i = 0, len = employees.length; i < len; i++) {
	employees[i].calcSalary();
}
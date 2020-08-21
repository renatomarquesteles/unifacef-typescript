"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    Employee.prototype.calcSalary = function () {
        this.salary = this.baseSalary;
    };
    Employee.prototype.show = function () {
        console.log("ID: " + this.id + ", Name: " + this.name + ", Salary: " + this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;

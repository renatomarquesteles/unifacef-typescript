"use strict";
exports.__esModule = true;
exports.Office = void 0;
var Office = /** @class */ (function () {
    function Office(CIO, employee) {
        this.CIO = CIO;
        this.employee = employee;
    }
    Office.prototype.hire = function () {
        console.log("Hiring " + this.employee.name);
    };
    return Office;
}());
exports.Office = Office;

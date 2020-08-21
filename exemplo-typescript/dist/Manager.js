"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Manager = void 0;
var Employee_1 = require("./Employee");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(comission, id, name, baseSalary) {
        var _this = _super.call(this, id, name, baseSalary) || this;
        _this.comission = comission;
        return _this;
    }
    Manager.prototype.calcSalary = function () {
        this.salary = this.baseSalary + (this.baseSalary * this.comission) / 100;
    };
    Manager.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log(this.comission);
    };
    return Manager;
}(Employee_1.Employee));
exports.Manager = Manager;

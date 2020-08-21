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
exports.Chief = void 0;
var Employee_1 = require("./Employee");
var Chief = /** @class */ (function (_super) {
    __extends(Chief, _super);
    function Chief(bonus, id, name, baseSalary) {
        var _this = _super.call(this, id, name, baseSalary) || this;
        _this.bonus = bonus;
        return _this;
    }
    Chief.prototype.calcSalary = function () {
        this.salary = this.baseSalary + this.bonus;
    };
    Chief.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log(this.bonus);
    };
    return Chief;
}(Employee_1.Employee));
exports.Chief = Chief;

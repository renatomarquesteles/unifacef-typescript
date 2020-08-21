"use strict";
exports.__esModule = true;
var Chief_1 = require("./Chief");
var Office_1 = require("./Office");
var Manager_1 = require("./Manager");
var man = new Manager_1.Manager(10, 123, 'Elon', 3000);
var office1 = new Office_1.Office('Robert', man);
office1.hire();
var chi = new Chief_1.Chief(3000, 456, 'Steve', 20000);
var office2 = new Office_1.Office('John', chi);
office2.hire();
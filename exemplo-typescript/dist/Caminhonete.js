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
var Carro_1 = require("./Carro");
var Caminhonete = /** @class */ (function (_super) {
    __extends(Caminhonete, _super);
    /** Não colocar public nas variáveis herdadas */
    function Caminhonete(tamanhoCabine, marca, velocidade) {
        var _this = _super.call(this, marca, velocidade) || this;
        _this.tamanhoCabine = tamanhoCabine;
        return _this;
    }
    Caminhonete.prototype.mostrar = function () {
        _super.prototype.mostrar.call(this);
        console.log("Tamanho da cabine " + this.tamanhoCabine);
    };
    return Caminhonete;
}(Carro_1.Carro));
function mostra(carro) {
    carro.mostrar(); /** Polimorfismo */
}
var caminhonete1 = new Caminhonete(2, 'Ford', 180);
caminhonete1.acelerar(100);
mostra(caminhonete1);

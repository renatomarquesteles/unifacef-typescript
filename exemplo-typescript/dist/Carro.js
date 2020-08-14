"use strict";
exports.__esModule = true;
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(marca, velocidade) {
        this.marca = marca;
        this.velocidade = velocidade;
    }
    Carro.prototype.acelerar = function (x) {
        this.velocidade = this.velocidade + x;
    };
    Carro.prototype.frear = function (x) {
        this.velocidade = this.velocidade - x;
    };
    Carro.prototype.mostrar = function () {
        console.log("Marca: " + this.marca + " e velocidade " + this.velocidade);
    };
    return Carro;
}());
exports.Carro = Carro;
/*
let carro1 = new Carro('Fiat', 100);
carro1.acelerar(30);
carro1.mostrar();

let carro2 = new Carro('GM', 80);
carro2.frear(40);
carro2.mostrar();
*/ 

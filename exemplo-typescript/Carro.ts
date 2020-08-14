export class Carro {

  constructor(public marca: string, public velocidade: number) {

  }

  acelerar(x: number) {
    this.velocidade = this.velocidade + x;
  }

  frear(x: number) {
    this.velocidade = this.velocidade - x;
  }

  mostrar() {
    console.log(`Marca: ${this.marca} e velocidade ${this.velocidade}`);
  }
}

/*
let carro1 = new Carro('Fiat', 100);
carro1.acelerar(30);
carro1.mostrar();

let carro2 = new Carro('GM', 80);
carro2.frear(40);
carro2.mostrar();
*/
import { Carro } from './Carro';

class Caminhonete extends Carro {

  /** Não colocar public nas variáveis herdadas */
  constructor(public tamanhoCabine: number, marca: string, velocidade: number) {
    super(marca, velocidade);
  }

  mostrar() {
    super.mostrar();
    console.log(`Tamanho da cabine ${this.tamanhoCabine}`);
  }
}

function mostra(carro: Carro) {
  carro.mostrar(); /** Polimorfismo */
}

let caminhonete1 = new Caminhonete(2, 'Ford', 180);
caminhonete1.acelerar(100);
mostra(caminhonete1);

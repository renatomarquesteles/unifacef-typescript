/*
Avaliação 1º bim
 
1. Para converter o código do projeto para javascript e permitir que seja rodado no Node.js ou no navegador.

/** 2 */
function countJedis(n1: number, n2: number, n3: number, n4: number): number {
  return n1 + n2 + n3 + n4;
}

/** 3 */
class Inseto {
  constructor(public qtd_patas: number, public qtd_asas: number) {
  }
  mostrar() {
    console.log(`Quantidade de patas: ${this.qtd_patas} - Quantidade de asas: ${this.qtd_asas}`);
  }
}

class Mosquito extends Inseto {
  constructor(public nome_cientifico: String, qtd_patas: number, qtd_asas: number) {
    super(qtd_patas, qtd_asas);
  }
  mostrar() {
    console.log(`Nome científico: ${this.nome_cientifico}`);
    super.mostrar();
  }
}

function mostraDados(inseto: Inseto) {
  inseto.mostrar();
}

let dengue = new Mosquito('Aedes Aegypt', 8, 2);

mostraDados(dengue);

/*
A função mostraDados recebe um Inseto como parâmetro, mas ao chamarmos ela passando um mosquito, o método da classe Mosquito sobrescreve o método da classe Inseto, mostrando as informações do Mosquito, no caso o nome científico. Isso é o polimorfismo.
*/

/** 4 */

interface IViagem {
  origem: string;
  destino: string;
  dataSaida: string;
  dataChegada: string;
}

function mostraViagem(viagem: IViagem) {
  console.log(`Origem: ${viagem.origem}`);
  console.log(`Destino: ${viagem.destino}`);
  console.log(`Data de saída: ${viagem.dataSaida}`);
  console.log(`Data de chegada: ${viagem.dataChegada}`);
}

/*
Neste exemplo a função mostraViagem recebe como parâmetro um objeto "viagem" que deve ser compatível com o formato definido pela interface IViagem, ou seja, deve ser um objeto com os atributos "origem", "destino", "dataSaida" e "dataChegada". Assim conseguimos forçar a tipagem de um objeto através da criação de uma interface.
*/

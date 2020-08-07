let nome: string;
nome = 'Renato Marques';
console.log(`O nome do aluno é ${nome}`);

// Funções com parâmetros e retorno tipados
function somaDoisNumeros(numero1: number, numero2: number): void {
  console.log(`A soma dos números é ${numero1 + numero2}`);
}

somaDoisNumeros(34, 76);

// Variável do tipo função retornando um número
let multiplicacao = function (numero1: number, numero2: number): number {
  return numero1 * numero2;
}

console.log(`O resultado da multiplicação é ${multiplicacao(3, 9)}`);

// Função com parâmetro opcional
function divisao(numero1: number, numero2?: number): void {
  let divisor = numero2 || 1;
  console.log(`O resultado da divisão é ${numero1 / divisor}`);
}

divisao(12, 4);
divisao(7);

function subtracao(vetor: number[]): number {
  return vetor.reduce((numA, numB) => numA - numB);
}

console.log(`O resultado da subtração é ${subtracao([9, 2, 1])}`);

// Usando SPREAD OPERATOR
function subtracaoSpread(...vetor: number[]): number {
  return vetor.reduce((numA, numB) => numA - numB);
}

console.log(`O resultado da subtração spread é ${subtracaoSpread(9, 2, 1)}`);

var nome;
nome = 'Renato Marques';
console.log("O nome do aluno \u00E9 " + nome);
// Funções com parâmetros e retorno tipados
function somaDoisNumeros(numero1, numero2) {
    console.log("A soma dos n\u00FAmeros \u00E9 " + (numero1 + numero2));
}
somaDoisNumeros(34, 76);
// Variável do tipo função retornando um número
var multiplicacao = function (numero1, numero2) {
    return numero1 * numero2;
};
console.log("O resultado da multiplica\u00E7\u00E3o \u00E9 " + multiplicacao(3, 9));
// Função com parâmetro opcional
function divisao(numero1, numero2) {
    var divisor = numero2 || 1;
    console.log("O resultado da divis\u00E3o \u00E9 " + numero1 / divisor);
}
divisao(12, 4);
divisao(7);
function subtracao(vetor) {
    return vetor.reduce(function (numA, numB) { return numA - numB; });
}
console.log("O resultado da subtra\u00E7\u00E3o \u00E9 " + subtracao([9, 2, 1]));
// Usando SPREAD OPERATOR
function subtracaoSpread() {
    var vetor = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vetor[_i] = arguments[_i];
    }
    return vetor.reduce(function (numA, numB) { return numA - numB; });
}
console.log("O resultado da subtra\u00E7\u00E3o spread \u00E9 " + subtracaoSpread(9, 2, 1));

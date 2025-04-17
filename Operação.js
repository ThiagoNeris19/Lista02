// Função principal que executa a operação passada como argumento
function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}

// Funções de operação matemática
function somar(x, y) {
  return x + y;
}

function subtrair(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

function dividir(x, y) {
  return y !== 0 ? x / y : "Divisão por zero!";
}

console.log(executarOperacao(10, 5, somar)); // 15
console.log(executarOperacao(10, 5, subtrair)); // 5
console.log(executarOperacao(10, 5, multiplicar)); // 50
console.log(executarOperacao(10, 5, dividir)); // 2
console.log(executarOperacao(10, 0, dividir)); // "Divisão por zero!"

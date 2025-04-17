// Criando o objeto aluno
let aluno = {
  nome: "João Silva",
  idade: 20,
  curso: "Engenharia",
  notas: [7.5, 8.0, 9.2, 6.8],
};

// Função para calcular a média das notas
function calcularMedia(aluno) {
  let soma = aluno.notas.reduce((total, nota) => total + nota, 0);
  let media = soma / aluno.notas.length;
  aluno.media = media; // Adiciona a média ao objeto
}

// Chamando a função
calcularMedia(aluno);

// Exibindo o objeto atualizado
console.log(aluno);

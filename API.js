// Simulando a resposta da API (formato JSON)
const respostaApi = `{
    "tarefas": [
      { "descricao": "Estudar JS", "concluida": true },
      { "descricao": "Ler livro", "concluida": false },
      { "descricao": "Praticar exercícios", "concluida": true }
    ]
  }`;

// Parseando o JSON para um objeto JavaScript
const dados = JSON.parse(respostaApi);

// Função para imprimir as tarefas concluídas
function imprimirTarefasConcluidas(dados) {
  const tarefasConcluidas = dados.tarefas.filter((tarefa) => tarefa.concluida);

  console.log("Tarefas concluídas:");
  tarefasConcluidas.forEach((tarefa) => console.log(tarefa.descricao));
}

// Chamando a função para mostrar as tarefas concluídas
imprimirTarefasConcluidas(dados);

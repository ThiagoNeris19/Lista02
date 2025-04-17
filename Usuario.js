// Criando o objeto de usuário
const usuario = {
  nome: "Maria Souza",
  email: "maria.souza@example.com",
  idade: 30,
};

// Exibindo o objeto original no console
console.log("Objeto original:", usuario);

// Convertendo o objeto para JSON usando JSON.stringify()
const usuarioJson = JSON.stringify(usuario);
console.log("Objeto convertido para JSON:", usuarioJson);

// Reconstruindo o objeto de volta para o formato de objeto usando JSON.parse()
const usuarioReconvertido = JSON.parse(usuarioJson);
console.log("Objeto reconvertido de volta:", usuarioReconvertido);

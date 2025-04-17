function contarVogais(texto) {
  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (let char of texto) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}

// Exemplo de uso
console.log(contarVogais("Olá, mundo!")); // Saída: 4

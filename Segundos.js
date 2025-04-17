function temporizador(segundos) {
  let restante = segundos;

  const intervalo = setInterval(() => {
    console.clear();
    console.log(`Contagem regressiva: ${restante}s`);
    restante--;

    if (restante < 0) {
      clearInterval(intervalo);
      console.log("Tempo esgotado!");
    }
  }, 1000);
}

// Inicia a contagem de 5 segundos
temporizador(5);

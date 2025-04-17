function relogioDigital() {
  setInterval(() => {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    console.clear(); // Limpa o console para parecer um relógio digital
    console.log(horaFormatada);
  }, 1000); // Atualiza a cada 1000ms (1 segundo)
}

// Inicia o relógio
relogioDigital();

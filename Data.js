function mostrarDataHoraAtual() {
  const agora = new Date();

  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0"); // Janeiro = 0
  const ano = agora.getFullYear();

  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  const mensagem = `Hoje é ${dia}/${mes}/${ano} e agora são ${horas}:${minutos}:${segundos}`;
  console.log(mensagem);
}

// Exemplo de uso
mostrarDataHoraAtual();

// Altere para a data que o relacionamento começou
const dataInicio = new Date("2022-08-31T00:00:00");

function atualizaTempo() {
  const agora = new Date();
  const diff = agora.getTime() - dataInicio.getTime();

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  const texto = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos 💘`;
  document.getElementById("contador").textContent = texto;
}

setInterval(atualizaTempo, 1000);
atualizaTempo();

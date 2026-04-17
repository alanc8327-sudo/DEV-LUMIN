document.getElementById("whatsappBtn").addEventListener("click", function() {
  const numero = "5519996992683"; // Substitua pelo seu número com DDD
  const mensagem = "Olá, gostaria de contratar seus serviços!";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});

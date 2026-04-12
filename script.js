function selectProfile(nome) {
  localStorage.setItem("usuarioLogado", nome);
  window.location.href = "home.html";
}

window.onload = function () {
  const nomeUsuarioElemento = document.getElementById("nome-usuario");
  if (nomeUsuarioElemento) {
    const nomeSalvo = localStorage.getItem("usuarioLogado");
    nomeUsuarioElemento.innerText = nomeSalvo ? nomeSalvo : "Convidado";
  }
};

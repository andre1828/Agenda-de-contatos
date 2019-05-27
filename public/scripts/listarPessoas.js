const botaoirParaCadastrarPessoa = document.querySelector(
  "#irParaCadastrarPessoa"
)

function irParaCadastrarPessoa() {
  location.href = location.origin + "/cadastrarPessoa"
}

botaoirParaCadastrarPessoa.addEventListener("click", irParaCadastrarPessoa)

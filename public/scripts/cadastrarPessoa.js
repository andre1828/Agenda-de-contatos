// ;(function() {
"use strict"
var state = {
  novaPessoa: {},
  contatos: [],
  novoContato: {},
  enderecos: [],
  novoEndereco: {},
  id: 0
}
const inputPessoaNome = document.querySelector("#pessoaNome")
const selectPessoaMarcador = document.querySelector("#pessoaMarcador")
const botaoAdicionarContato = document.querySelector("#adicionarContato")
const selectNovoContatoTipo = document.querySelector("#novoContatoTipo")
const inputNovoContatoValor = document.querySelector("#novoContatoValor")
const botaoConfirmarNovoContato = document.querySelector(
  "#confirmarNovoContato"
)
const botaoCancelarNovoContato = document.querySelector("#cancelarNovoContato")
const botaoAdicionarEndereco = document.querySelector("#adicionarEndereco")
const inputNovoEnderecoLogradouro = document.querySelector(
  "#novoEnderecoLogradouro"
)
const inputNovoEnderecoNumero = document.querySelector("#novoEnderecoNumero")
const inputNovoEnderecoComplemento = document.querySelector(
  "#novoEnderecoComplemento"
)
const selectNovoEnderecoTipo = document.querySelector("#novoEnderecoTipo")
const inputNovoEnderecoBairro = document.querySelector("#novoEnderecoBairro")
const inputNovoEnderecoCidade = document.querySelector("#novoEnderecoCidade")
const inputNovoEnderecoEstado = document.querySelector("#novoEnderecoEstado")
const botaoConfirmarNovoEndereco = document.querySelector(
  "#confirmarNovoEndereco"
)
const botaoCancelarNovoEndereco = document.querySelector(
  "#cancelarNovoEndereco"
)
const botaoVoltar = document.querySelector("#voltar")
const botaoCadastrarPessoa = document.querySelector("#cadastrarPessoa")

function inputPessoaNomeAlterado() {
  state.novaPessoa.nome = inputPessoaNome.value
}

function selectPessoaMarcadorAlterado() {
  state.novaPessoa.marcador = selectPessoaMarcador.value
}

function botaoAdicionarContatoClicado() {
  selectNovoContatoTipo.style.display = "inline"
  inputNovoContatoValor.style.display = "inline"
  botaoConfirmarNovoContato.style.display = "inline"
  botaoCancelarNovoContato.style.display = "inline"
}

function novoContatoTipoAlterado() {
  state.novoContato.tipo = selectNovoContatoTipo.value
}

function inputNovoContatoValorAlterado() {
  state.novoContato.valor = inputNovoContatoValor.value
}

function botaoConfirmarNovoContatoClicado() {
  console.log(state.novoContato)
  if (!state.novoContato.valor || !state.novoContato.tipo) {
    alert("Por favor informe o contato e tipo de contato nos campos acima")
    return
  }
  let id = ++state.id
  state.contatos.push({ id: id, contato: state.novoContato })

  let divContato = document.createElement("div")
  divContato.className = "contato"
  divContato.id = id
  let pTipoContato = document.createElement("p")
  switch (state.novoContato.tipo) {
    case "1":
      pTipoContato.innerHTML = "E-mail"
      break
    case "2":
      pTipoContato.innerHTML = "Celular"
      break
    case "3":
      pTipoContato.innerHTML = "Telefone Fixo"
      break
    case "4":
      pTipoContato.innerHTML = "Site"
      break
    default:
      pTipoContato.innerHTML = "Tipo invalido"
  }
  let pValorContato = document.createElement("p")
  pValorContato.innerHTML = state.novoContato.valor
  let botaoExcluir = document.createElement("i")
  botaoExcluir.className = "fas fa-minus-circle"
  botaoExcluir.onclick = e => {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement)
    state.contatos = state.contatos.filter(
      contato => contato.id != e.target.parentElement.id
    )
    console.log(state.contatos)
  }
  divContato.append(pTipoContato, pValorContato, botaoExcluir)

  if (document.querySelector(".contatos .mensagem-sem-contatos") !== null) {
    document.querySelector(".contatos").innerHTML = ""
  }
  document.querySelector(".contatos").appendChild(divContato)

  state.novoContato = {}
}

function botaoCancelarNovoContatoClicado() {}

function botaoAdicionarEnderecoClicado() {
  inputNovoEnderecoLogradouro.parentElement.style.display = "flex"
  inputNovoEnderecoNumero.parentElement.style.display = "flex"
  inputNovoEnderecoComplemento.parentElement.style.display = "flex"
  selectNovoEnderecoTipo.parentElement.style.display = "flex"
  inputNovoEnderecoBairro.parentElement.style.display = "flex"
  inputNovoEnderecoCidade.parentElement.style.display = "flex"
  inputNovoEnderecoEstado.parentElement.style.display = "flex"
  botaoConfirmarNovoEndereco.style.display = "inline"
  botaoCancelarNovoEndereco.style.display = "inline"
}

function inputNovoEnderecoLogradouroAlterado() {
  state.novoEndereco.logradouro = inputNovoEnderecoLogradouro.value
}

function inputNovoEnderecoNumeroAlterado() {
  state.novoEndereco.numero = inputNovoEnderecoNumero.value
}

function inputNovoEnderecoComplementoAlterado() {
  state.novoEndereco.complemento = inputNovoEnderecoComplemento.value
}

function selectNovoEnderecoTipoAlterado() {
  state.novoEndereco.tipo = selectNovoEnderecoTipo.value
}

function inputNovoEnderecoBairroAlterado() {
  state.novoEndereco.bairro = inputNovoEnderecoBairro.value
}

function inputNovoEnderecoCidadeAlterado() {
  state.novoEndereco.cidade = inputNovoEnderecoCidade.value
}

function inputNovoEnderecoEstadoAlterado() {
  state.novoEndereco.estado = inputNovoEnderecoEstado.value
}

function botaoConfirmarNovoEnderecoClicado() {
  console.log(state.novoEndereco)
}

function botaoCancelarNovoEnderecoClicado() {
  state.novoEndereco.estado = inputNovoEnderecoEstado.value
}

function botaoVoltarClicado() {
  location.href = location.origin
}

function botaoCadastrarPessoaClicado() {
  if (!state.novaPessoa.nome) {
    alert("Por favor informe o nome")
    return
  }

  fetch("localhost:3333/api/cadastrarPessoa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: state.novaPessoa.nome,
      marcador: state.novaPessoa.marcador,
      contatos: state.contatos,
      enderecos: state.enderecos
    })
  }).then(response => response.json())
  .then(res => console.log(res))
}

inputPessoaNome.addEventListener("change", inputPessoaNomeAlterado)
selectPessoaMarcador.addEventListener("change", selectPessoaMarcadorAlterado)
botaoAdicionarContato.addEventListener("click", botaoAdicionarContatoClicado)
selectNovoContatoTipo.addEventListener("change", novoContatoTipoAlterado)
inputNovoContatoValor.addEventListener("change", inputNovoContatoValorAlterado)
botaoConfirmarNovoContato.addEventListener(
  "click",
  botaoConfirmarNovoContatoClicado
)
botaoCancelarNovoContato.addEventListener(
  "change",
  botaoCancelarNovoContatoClicado
)
botaoAdicionarEndereco.addEventListener("click", botaoAdicionarEnderecoClicado)
inputNovoEnderecoLogradouro.addEventListener(
  "change",
  inputNovoEnderecoLogradouroAlterado
)
inputNovoEnderecoNumero.addEventListener(
  "change",
  inputNovoEnderecoNumeroAlterado
)
inputNovoEnderecoComplemento.addEventListener(
  "change",
  inputNovoEnderecoComplementoAlterado
)
selectNovoEnderecoTipo.addEventListener(
  "change",
  selectNovoEnderecoTipoAlterado
)
inputNovoEnderecoBairro.addEventListener(
  "change",
  inputNovoEnderecoBairroAlterado
)
inputNovoEnderecoCidade.addEventListener(
  "change",
  inputNovoEnderecoCidadeAlterado
)

inputNovoEnderecoEstado.addEventListener(
  "change",
  inputNovoEnderecoEstadoAlterado
)

botaoConfirmarNovoEndereco.addEventListener(
  "click",
  botaoConfirmarNovoEnderecoClicado
)
botaoCancelarNovoEndereco.addEventListener(
  "click",
  botaoCancelarNovoEnderecoClicado
)
botaoVoltar.addEventListener("click", botaoVoltarClicado)
botaoCadastrarPessoa.addEventListener("click", botaoCadastrarPessoaClicado)
// })()

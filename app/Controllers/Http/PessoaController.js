"use strict"

const Pessoa = use("App/Models/Pessoa")

class PessoaController {
  async listar({ view }) {
    // const pessoas = await Pessoa.all()
    return view.render("listarPessoas", {
      pessoas: [
        {
          nome: "Joana",
          marcador: "Amigos",
          contatos: [],
          enderecos: []
        },
        {
          nome: "Miguel",
          marcador: "Trabalho",
          contatos: [],
          enderecos: []
        },
        {
          nome: "Lia",
          marcador: "Familia",
          contatos: [],
          enderecos: []
        },
        {
          nome: "Vitor",
          marcador: "Amigos",
          contatos: [],
          enderecos: []
        },
      ]
    })
  }

  async cadastrar({ view }) {
    return view.render("cadastrarPessoa")
  }

  async apiCadastrarPessoa({ request, response }) {
    // let novaPessoa = await Pessoa.create({})
  }
}

module.exports = PessoaController

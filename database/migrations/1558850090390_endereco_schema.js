'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {
      table.increments()
      table.integer('pessoa_id').unsigned().references('id').inTable('pessoas')
      table.string('logradouro', 255).notNullable()
      table.integer('numero')
      table.string('complemento')
      table.integer('tipo')
      table.string('bairro')
      table.string('cidade')
      table.string('estado')
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecoSchema

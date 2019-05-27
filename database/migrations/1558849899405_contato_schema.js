'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatoSchema extends Schema {
  up () {
    this.create('contatos', (table) => {
      table.increments()
      table.integer('pessoa_id').unsigned().references('id').inTable('pessoas')
      table.integer('tipo').notNullable()
      table.string('valor').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contatos')
  }
}

module.exports = ContatoSchema

const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Produto = require('./produto')
const Fornecedor = require('./fornecedor')
const Usuario = require('./usuario')

const produto = Produto(sequelize, Sequelize.DataTypes)
const fornecedor = Fornecedor(sequelize, Sequelize.DataTypes)
const usuario = Usuario(sequelize, Sequelize.DataTypes)

produto.belongsTo(fornecedor)

const db = {
  produto,
  fornecedor,
  usuario,
  sequelize
}

module.exports = db
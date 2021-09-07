const express = require('express')

const produtosRouter = require('./produtos')
const fornecedoresRouter = require('./fornecedores')
const usuariosRouter = require('./usuarios')

const router = express.Router()

router.use('/produtos', produtosRouter)
router.use('/fornecedores', fornecedoresRouter)
router.use('/usuarios', usuariosRouter)

module.exports = router

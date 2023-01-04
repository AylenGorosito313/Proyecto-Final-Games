const { Router } = require('express')
const addToCar = require('../controllers/carrito.controller')

const carritoRouter = Router()

carritoRouter.post('/user/addCard/:userId/:gameId', addToCar)

module.exports = carritoRouter
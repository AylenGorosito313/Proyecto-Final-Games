const { Router } = require('express')
const userPurchase = require('../controllers/compras.controllers')

let ShoppingHistory = Router()

ShoppingHistory.get('/user/shopping-history', userPurchase)
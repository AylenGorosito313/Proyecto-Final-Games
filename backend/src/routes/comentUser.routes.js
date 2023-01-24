const { Router } = require('express')
const createComent = require('../controllers/coments')

const comentRouter = Router()

comentRouter.post('/user/add/coment', createComent)


module.exports = comentRouter
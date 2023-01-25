const { Router } = require('express')
const {createComent, deleteComent} = require('../controllers/coments')

const comentRouter = Router()

comentRouter.post('/user/add/coment', createComent)
comentRouter.delete('/user/delete/coment', deleteComent)

module.exports = comentRouter
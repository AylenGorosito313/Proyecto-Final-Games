const { Router } = require('express')
const deleteCloudinary = require('../controllers/cloudinary.controller')

let Cloudinary = Router()

Cloudinary.delete('/cloudinary/:public_id', deleteCloudinary)

module.exports = Cloudinary



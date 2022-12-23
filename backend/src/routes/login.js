const { Router } = require("express");

const { loginUser} = require('../controllers/login')

const loginrouter = Router();
loginrouter.post('/login/user', loginUser)
module.exports = loginrouter;
const { Router } = require("express");
const {registerUser} = require('../controllers/login')
const usersControllers = require("../controllers/users.controllers")
const usersrouter = Router();

usersrouter.post('/users/create', registerUser)
usersrouter.post("/users/create/subs",usersControllers.subscription)
usersrouter.post("/users/create/delete",usersControllers.deletedSubscription)
module.exports = usersrouter;
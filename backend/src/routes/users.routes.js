const { Router } = require("express");
const { registerUser } = require("../controllers/login");
const { getAllUser, getUserById } = require('../controllers/users.controllers')
const usersRouter = Router();

usersRouter.post('/user/create', registerUser)
usersRouter.get('/users', getAllUser)
usersRouter.get('/user/:id', getUserById)
module.exports = usersRouter;

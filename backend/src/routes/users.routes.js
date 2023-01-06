const { Router } = require("express");
const { registerUser } = require("../controllers/login");
const { registerProvider } = require("../controllers/providers.controllers");
const { getAllUser, getUserById } = require('../controllers/users.controllers')
const usersRouter = Router();

usersRouter.post('/user/create', registerUser)
usersRouter.get('/users', getAllUser)
usersRouter.get('/user/:id', getUserById)
usersRouter.post('/user/provider/create/:userId/:gameId', registerProvider)
module.exports = usersRouter;

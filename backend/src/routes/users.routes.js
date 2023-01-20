const { Router } = require("express");
const { registerUser } = require("../controllers/login");
const {  getGamesByProvider, supplierProfit,  } = require('../controllers/providers.controllers');
const { updateUserProfile, providerAplication } = require("../controllers/users.controllers");

const usersRouter = Router();

usersRouter.post('/user/create', registerUser)
usersRouter.put('/user/:id', updateUserProfile)
usersRouter.post('/user/provider/aplication/:userId', providerAplication)
usersRouter.get('/user/provider/videogames/create/:userId', getGamesByProvider)
usersRouter.get('/user/provider/setprofit', supplierProfit)
module.exports = usersRouter;


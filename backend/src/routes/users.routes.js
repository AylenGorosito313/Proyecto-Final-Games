const { Router } = require("express");
const { registerUser } = require("../controllers/login");
const { getAllUser,
        getUserById,
        updateUserProfile,
        deletedUser,
        getInactiveUsers,
        getInactiveUser,
        usuariosProveedores } = require('../controllers/users.controllers')
const { registerProvider, getGamesByProvider, supplierProfit } = require('../controllers/providers.controllers')

const usersRouter = Router();

//--------------------- GET / PUT / POST -> USERS ------------------------------
usersRouter.post('/user/create', registerUser)
usersRouter.get('/users', getAllUser)
usersRouter.get('/user/:id', getUserById)
usersRouter.put('/user/:id', updateUserProfile)
//-------------------- DELETED --------------------------------------------------
usersRouter.get('/users/inactive', getInactiveUsers) 
usersRouter.get('/user/inactive/:id', getInactiveUser ) 
usersRouter.get('/user/setInactivityUser/:id', deletedUser) 
//-------------------- PROVEEDOR ------------------------------------------------
usersRouter.post('/user/provider/create/:userId', registerProvider)
usersRouter.get('/user/proveedor/usuario', usuariosProveedores)
usersRouter.get('/user/provider/videogames/create/:userId', getGamesByProvider)
usersRouter.get('/user/provider/setprofit', supplierProfit)
module.exports = usersRouter;


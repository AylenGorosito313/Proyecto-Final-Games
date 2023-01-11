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


usersRouter.post('/user/create', registerUser)
usersRouter.get('/users', getAllUser)
usersRouter.get('/user/:id', getUserById)
usersRouter.put('/user/:id', updateUserProfile)
usersRouter.get('/user/provider/setprofit', supplierProfit)
usersRouter.get('/user/provider/videogames/create/:userId', getGamesByProvider)
usersRouter.post('/user/provider/create/:userId', registerProvider)
usersRouter.get('/users/inactive', getInactiveUsers) // obtener info de todos los usuarios eliminados    
usersRouter.get('/user/inactive/:id', getInactiveUser ) // obtener info de un usuario eliminado en particular
usersRouter.get('/user/setInactivityUser/:id', deletedUser)  // inhabilitar(borrado logico) el usuario mediante id
usersRouter.get('/user/proveedor/usuario', usuariosProveedores)
module.exports = usersRouter;


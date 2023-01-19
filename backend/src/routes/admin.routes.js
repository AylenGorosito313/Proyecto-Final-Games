const { Router } = require("express");
const admin = require("../Administrador/admin.controllers");
const adminUsers = require('../Administrador/CRUD/Admin_Users')

const adminRouter = Router();

adminRouter.post("/admin/create", admin.createNewAdmin)
adminRouter.post('/admin/login', admin.adminLogin)

//Admin -> user

adminRouter.get('/users', adminUsers.getAllUser) //admin
adminRouter.get('/user/:id', adminUsers.getUserById) //admin
adminRouter.get('/get/providers/aplication', adminUsers.getAplicationProviders)
adminRouter.put('/admin/user/:id', adminUsers.updateUserProfile) //admin editar usuario
adminRouter.get('/users/inactive', adminUsers.getInactiveUsers) //admin
adminRouter.get('/user/proveedor/usuario', adminUsers.usuariosProveedores) 
adminRouter.get('/user/inactive/:id', adminUsers.getInactiveUser ) //admin
adminRouter.delete('/user/setInactivityUser/:id', adminUsers.deletedUser) //admin

//Admin -> providers
adminRouter.post('/user/provider/create/:userId', adminUsers.registerProvider) //admin
adminRouter.delete('/user/provider/denied/:userId', adminUsers.denyRequest)

module.exports = adminRouter
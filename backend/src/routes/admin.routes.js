const { Router } = require("express");
const adminControllers = require("../Administrador/admin.controllers");

const adminRouter = Router();

adminRouter.post("/admin/create", adminControllers.createNewAdmin)
adminRouter.post('/admin/login', adminControllers.adminLogin)

module.exports = adminRouter
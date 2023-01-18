const { Router } = require("express");
const {createNewAdmin} = require("../Administrador/admin.controllers");

const adminRouter = Router();

adminRouter.post("/admin/create", createNewAdmin)

module.exports = adminRouter
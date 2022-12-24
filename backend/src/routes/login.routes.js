const { Router } = require("express");

const { loginUser } = require("../controllers/login");
const loginRouter = Router();

loginRouter.post("/login/user", loginUser);
module.exports = loginRouter;

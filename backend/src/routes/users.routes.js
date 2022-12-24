const { Router } = require("express");
const { registerUser } = require("../controllers/login");
const usersControllers = require("../controllers/users.controllers");
const usersRouter = Router();

usersRouter.post("/user/create", registerUser);
usersRouter.post("/users/create/subs", usersControllers.subscription);
usersRouter.post("/users/create/delete", usersControllers.deletedSubscription);
module.exports = usersRouter;

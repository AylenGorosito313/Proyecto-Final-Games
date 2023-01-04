const { Router } = require("express");
const { addToCar, getCarUser } = require("../controllers/carrito.controller");

const carritoRouter = Router();

carritoRouter.post("/user/addCard/:userId/:gameId", addToCar);
carritoRouter.get("/user/cartItems/:userId", getCarUser);

module.exports = carritoRouter;

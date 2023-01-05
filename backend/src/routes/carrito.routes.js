const { Router } = require("express");
const { addToCar, getCarUser, deleteItem, deleteAllItems } = require("../controllers/carrito.controller");

const carritoRouter = Router();

carritoRouter.post("/user/addCard/:userId/:gameId", addToCar);
carritoRouter.get("/user/cartItems/:userId", getCarUser);
carritoRouter.delete("/use/deleteItem/:userId/:gameId", deleteItem)
carritoRouter.delete("/user/deleteAllItems/:userId", deleteAllItems)

module.exports = carritoRouter;

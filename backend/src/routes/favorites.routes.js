const { Router } = require("express");
const { addFavorite } = require("../controllers/favorites.controllers");

const gameFavoriteRouter = Router();

gameFavoriteRouter.get("/user/addFavorite/:userId/:gameId", addFavorite);

module.exports = gameFavoriteRouter;

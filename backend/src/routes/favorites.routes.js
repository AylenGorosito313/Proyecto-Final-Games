const { Router } = require("express");
const { addFavorite } = require("../controllers/favorites.controllers");

const gameFavoriteRouter = Router();

gameFavoriteRouter.post("/game/addFavorite/:userId/:gameId", addFavorite);

module.exports = gameFavoriteRouter;

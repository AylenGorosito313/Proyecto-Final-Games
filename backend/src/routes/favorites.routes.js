const { Router } = require("express");
const { addFavorite } = require("../controllers/favorites.controllers");
const { getFavorite } = require("../controllers/favorites.controllers")
const gameFavoriteRouter = Router();

gameFavoriteRouter.post("/game/addFavorite/:userId/:gameId", addFavorite);
gameFavoriteRouter.get("/game/getFavorite/:userId", getFavorite)
module.exports = gameFavoriteRouter;

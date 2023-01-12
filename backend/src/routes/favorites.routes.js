const { Router } = require("express");
const { addFavorite, getFavorite, deleteFavorite } = require("../controllers/favorites.controllers");

const gameFavoriteRouter = Router();

gameFavoriteRouter.post("/game/addFavorite/:userId/:gameId", addFavorite);
gameFavoriteRouter.get("/game/getFavorite/:userId", getFavorite)
gameFavoriteRouter.delete("/game/deletFavorite/:userId/:gameId", deleteFavorite)
module.exports = gameFavoriteRouter;

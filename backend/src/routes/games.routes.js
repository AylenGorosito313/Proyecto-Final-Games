const { Router } = require("express");
const gameControllers = require("../controllers/games.controllers");

const gamesRouter = Router();
gamesRouter.get("/games", gameControllers.getGames);
gamesRouter.get("/game", gameControllers.searchGame);
gamesRouter.post("/game/create", gameControllers.createGame);
gamesRouter.get("/game/:id", gameControllers.gameInformation);
module.exports = gamesRouter;
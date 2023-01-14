const { Router } = require("express");
const gameControllers = require("../controllers/games.controllers");

const gamesRouter = Router();
gamesRouter.get("/games", gameControllers.getGames);
gamesRouter.get("/game", gameControllers.searchGame);
gamesRouter.get('/games/filters/examinar/routes', gameControllers.GamesExaminar)
gamesRouter.get('/games/popular', gameControllers.mostPopularGames)
gamesRouter.get('/games/released', gameControllers.releasedLastMonth)
gamesRouter.post("/game/create/:userId", gameControllers.createGame);
gamesRouter.get("/game/:id", gameControllers.gameInformation);
gamesRouter.delete("/game/provider/deleteGameProvider/:userId/:gameId", gameControllers.deleteGameProvider);
module.exports = gamesRouter;
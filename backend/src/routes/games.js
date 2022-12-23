const { Router } = require("express");
const gameControllers = require("../controllers/games.controllers");

const gamesrouter = Router();
gamesrouter.get("/", gameControllers.getGames);
gamesrouter.get("/search", gameControllers.searchGame);
gamesrouter.post("/create", gameControllers.createGame);
gamesrouter.get("/:id", gameControllers.gameInformation);
module.exports = gamesrouter;
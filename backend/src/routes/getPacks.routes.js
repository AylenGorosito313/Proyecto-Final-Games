const { Router } = require("express");
const getPacksGames = require("../controllers/gamesPacks.controllers");
const PacksGamesRouter = Router();

PacksGamesRouter.get("/packsGames", getPacksGames);
module.exports = PacksGamesRouter;

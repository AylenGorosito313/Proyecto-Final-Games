const { Router } = require("express");
const {
    getGames,
    gameInformation,
    searchGame,
    createGame,
} = require("../controllers/games.controllers");
const getGenres = require("../controllers/genres.controllers");

const router = Router();

router.get("/", getGames);
router.get("/game", searchGame);
router.get('/genres', getGenres)
router.post("/game/create", createGame);
router.get("/game/:id", gameInformation);

module.exports = router;

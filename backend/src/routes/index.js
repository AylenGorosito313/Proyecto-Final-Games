const { Router } = require("express");
const {
    getGames,
    gameInformation,
    searchGame,
    createGame,
} = require("../controllers/games.controllers");
const getGenres = require("../controllers/genres.controllers");
const {user,
       newUser,
       subscription,
       deletedSubscription



    
    }=require("../controllers/users.controllers")

const router = Router();

router.get("/", getGames);
router.get("/game", searchGame);

router.post("/game/create", createGame);
router.get("/game/:id", gameInformation);
router.get('/genres', getGenres);
router.get("/users",user);
router.post("/users/create",newUser)
router.post("/users/create/subs",subscription)
router.post("/users/create/delete",deletedSubscription)
module.exports = router;

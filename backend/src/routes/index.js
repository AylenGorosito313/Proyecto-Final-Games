const { Router } = require("express");
const gameControllers = require("../controllers/games.controllers");
const getGenres = require("../controllers/genres.controllers");
const {registerUser, loginUser} = require('../controllers/login')
const usersControllers = require("../controllers/users.controllers")
const userExtractor = require('../utils/userExtractor')
const router = Router();


router.get("/", gameControllers.getGames);
router.get("/game", gameControllers.searchGame);

router.post("/game/create", gameControllers.createGame);
router.get("/game/:id", gameControllers.gameInformation);
router.get('/genres', getGenres);
router.post('/user/create', registerUser)
router.post('/login/user', loginUser)
// router.get("/users",usersControllers.user);
// router.post("/users/create",usersControllers.newUser)
router.post("/users/create/subs",usersControllers.subscription)
router.post("/users/create/delete",usersControllers.deletedSubscription)
module.exports = router;

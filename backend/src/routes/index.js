const { Router } = require("express");
const gamesrouter = require('./games')
const genresrouter = require("./genres")
const loginrouter = require("./login")
const usersrouter  = require("./users")

const router = Router();
router.use("/game",gamesrouter );
router.use('/genres', genresrouter);
router.use('/users', usersrouter )
router.use('/login', loginrouter)

module.exports = router;

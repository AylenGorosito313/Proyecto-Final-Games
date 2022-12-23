const { Router } = require("express");
const getGenres = require("../controllers/genres.controllers");
const genresrouter = Router();
genresrouter.get('/genres', getGenres);
module.exports = genresrouter;
const { Router } = require("express");
const {getGenres} = require("../controllers/genres.controllers");
const genresRouter = Router();

genresRouter.get("/genres", getGenres);
module.exports = genresRouter;

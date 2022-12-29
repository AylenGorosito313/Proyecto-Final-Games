const { Router } = require("express");
const getPlatform = require("../controllers/platform.controllers");

const platformRouter = Router();

platformRouter.get("/games/platforms", getPlatform);

module.exports = platformRouter;

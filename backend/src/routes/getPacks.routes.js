const { Router } = require("express");
const {GamePacks}= require("../models/gamesPacks")
const packsRouter = Router();

packsRouter.get("/packsGames", async (req, res, next) => {
    try {
      const packs = await GamePacks.findAll();
      return res.send(packs);
    } catch (error) {
      return next(error);
    }
  })
module.exports = packsRouter;

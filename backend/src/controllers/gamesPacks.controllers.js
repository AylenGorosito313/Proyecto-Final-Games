
const { GamePacks } = require("../models/gamesPacks"); 


const getPacksGames = async (req, res, next) => {
    try {
      const packs = await GamePacks.findAll();
      return res.send(packs);
    } catch (error) {
      return next(error);
    }
  };

  module.exports = {
    getPacksGames
};
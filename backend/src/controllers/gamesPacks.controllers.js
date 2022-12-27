
const { GamePacks } = require("../models/gamesPacks") 


const getPacksGames = async (req, res, next) => {
    try {
      const packs = await GamePacks.findAll();
      return res.send(packs);
    } catch (error) {
      
      return res.send("hola mundo");
    }
  };

  module.exports = {
    getPacksGames
};
const { Game } = require("../models/games");
const { Genre } = require("../models/genres");

const getAllGamesDb = async () => {
    try {
        let response = await Game.findAll({
            include: {
                model: Genre,
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};

module.exports = getAllGamesDb;

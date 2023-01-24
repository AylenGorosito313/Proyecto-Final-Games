const { Op } = require("sequelize");
const { Game } = require("../models/games");
const { Genre } = require("../models/genres");

const getAllGamesDb = async (search = "") => {
    try {
        if (!search) {
            let response = await Game.findAll({
                include: {
                    model: Genre,
                },
            });
            return response;
        }
        let response = await Game.findAll({
            where: {
                name: { [Op.iLike]: `%${search}%` },
            },
            include: { model: Genre },
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error.message);
        return error;
    }
};

module.exports = getAllGamesDb;

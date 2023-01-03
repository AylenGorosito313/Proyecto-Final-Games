const { Game } = require("../models/games");
const { Users } = require("../models/users");
const apiClient = require("../utils/apiClient");
const mapGames = require("../utils/mapGames");

const addFavorite = async (req, res) => {
    const { userId, gameId } = req.params;

    try {
        if (
            /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/.test(
                gameId
            )
        ) {
            let gameInfo = await Game.findByPk(gameId);
            let addGameFavorite = await Users.findByPk(userId);
            addGameFavorite.favoritos = [addGameFavorite.favoritos, gameInfo];
        } else {
            let searchGameApi = await apiClient(`games/${gameId}`);
            let mapGameApi = await mapGames([searchGameApi]);
            // mapGameApi = JSON.stringify(mapGameApi[0])
            // console.log(mapGameApi)
            let addGameFavorite = await Users.findByPk(userId);
            console.log(addGameFavorite);
            addGameFavorite.favoritos = [
                ...addGameFavorite.favoritos,
                mapGameApi[0],
            ];

            await addGameFavorite.save();
        }
        res.status(200).json({
            message: "game added to favorites list",
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = { addFavorite };

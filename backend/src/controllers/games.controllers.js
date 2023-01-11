const apiClient = require("../utils/apiClient");
const mapGames = require("../utils/mapGames");
const paginate = require("../utils/paginated");
const gameTrailer = require("../utils/game_trailer");
const searchByName = require("../utils/searchByName");
const { Game } = require("../models/games");
const { Genre } = require("../models/genres");
const getGamePopularOrReleased = require("../utils/getGamePopular");
const { Users } = require("../models/users");
const { Providers } = require("../models/providers");

//obtener games 20 por pagina
const getGames = async (req, res) => {
    const { page } = req.query;
    try {

        let searchGamesDB = await Game.findAll({
            include: {
                model: Genre,
                atributes: ["name"],
                    through: {
                        attributes: [], //comprobacion que se hace (mediante los atributos)
                    },
            }
        })
        // searchGamesDB = searchGamesDB.toJSON()
        console.log(searchGamesDB);
        //le pasamos el path y el page a mapGame
        let response = await paginate("games", page);
        let mapToGames = await mapGames(response);
        return res.status(200).json([...searchGamesDB, ...mapToGames]);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//obtener la informacion de un juego junto con el trailer
const gameInformation = async (req, res) => {
    const { id } = req.params;
    try {
        let gameInfo = await apiClient(`games/${id}`);
        let response = await gameTrailer([gameInfo], id);
        return res.status(200).json(...response);
    } catch (error) {
        return res.status(404).json({
            error: error.message,
        });
    }
};

//buscar juegos por nombre
const searchGame = async (req, res) => {
    const { search } = req.query;
    try {
        let results = await searchByName(search);
        res.status(200).json(results);
    } catch (error) {
        res.status(200).json({
            error: error.message,
        });
    }
};

const createGame = async (req, res) => {
    const gameInfo = req.body;
    const { userId } = req.params;
    try {
        if (
            !gameInfo.name ||
            !gameInfo.background_image ||
            !gameInfo.platforms ||
            !gameInfo.price ||
            !userId ||
            !gameInfo.description ||
            !gameInfo.genres
        ) {
            return res.status(300).json({
                message: "Missing required fields",
            });
        }
        const searchUser = await Users.findByPk(userId);
        let userIsProvider = searchUser.proveedor;
        if (userIsProvider) {
            let [result, create] = await Game.findOrCreate({
                where: {
                    name: gameInfo.name,
                    background_image: gameInfo.background_image,
                    rating: gameInfo.rating,
                    price: gameInfo.price,
                    platforms: gameInfo.platforms,
                    description: gameInfo.description,
                    trailer: gameInfo.trailer ? gameInfo.trailer : null,
                    platforms: gameInfo.platforms
                },
            });
            if (create) {
                let genreByGame = await Genre.findAll({
                    where: {
                        name: gameInfo.genres,
                    },
                });
                result.addGenres(genreByGame);
                let userProvider = await Providers.findOne({
                    where: {
                        userId,
                    },
                });
                userProvider.videoGamesPropor.length === 0
                    ? (userProvider.videoGamesPropor = [gameInfo])
                    : (userProvider.videoGamesPropor = [
                          ...userProvider.videoGamesPropor,
                          gameInfo,
                      ]);
                await userProvider.save();
                return res.status(200).json({
                    message: "game created successfully",
                });
            }
        } else {
            return res
                .status(401)
                .json("you are not authorized to upload game");
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const mostPopularGames = async (req, res) => {
    try {
        const response = await getGamePopularOrReleased(true);
        res.status(200).json(response);
    } catch (error) {
        res.status(401).json({
            error: error.message,
        });
    }
};

const releasedLastMonth = async (req, res) => {
    try {
        const response = await getGamePopularOrReleased();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};
//https://api.rawg.io/api/games?dates=2023-12-01,2023-12-30
//https://api.rawg.io/api/games/{game_pk}/development-team

module.exports = {
    gameInformation,
    getGames,
    searchGame,
    createGame,
    mostPopularGames,
    releasedLastMonth,
};

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
const getGamesForExaminar = require("../utils/getGamesForExaminar");

//obtener games 20 por pagina
const getGames = async (req, res) => {
    const { page } = req.query;
    try {
        let searchGamesDB = await Game.findAll({
            include: {
                model: Genre,
                atributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        let GamesDB = [];
        let arrayFrom = Array.from(searchGamesDB);
        arrayFrom.forEach((element) => {
            GamesDB.push(element);
        });
        let response = await paginate("games", page);
        let mapToGames = await mapGames(response);
        let mapToToGameDB = await mapGames(GamesDB);
        return res.status(200).json([...mapToToGameDB, ...mapToGames]);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//obtener la informacion de un juego junto con el trailer
const gameInformation = async (req, res) => {
    const { id } = req.params;
    const uuidRegex =
        /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
    try {
        if (uuidRegex.test(id)) {
            let gameDB = await Game.findByPk(id);
            return res.status(200).json(gameDB);
        } else {
            let gameInfo = await apiClient(`games/${id}`);
            let response = await gameTrailer([gameInfo], id);
            return res.status(200).json(...response);
        }
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
            return res.status(400).json({
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
                    platforms: gameInfo.platforms,
                    parent_platforms: gameInfo.platforms,
                    createdBy: userId,
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
                return res.status(200).json(result);
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

const GamesExaminar = async (req, res) => {
    try {
        let results = await getGamesForExaminar()
        res.status(200).json(results)
    } catch (error) {
        console.log(error);
    }
}

const deleteGameProvider = async (req, res) => {
    const {userId, gameId} = req.params 
    // console.log("este es el congole.log de userId y userGame:",userId, gameId )
    try {
        const getUser = await Users.findOne({
            where: { id: userId }, 
            include: {
                model: Providers, 
            }
        })
        // console.log(getUser) 
        const arrayJuegos = getUser.provider.videoGamesPropor 
        // console.log("aca esta la info del juego del usuario",arrayJuegos)
        const arrayFiltrado = arrayJuegos.filter(el => el.id != gameId)
        getUser.provider.set({
            videoGamesPropor : arrayFiltrado
        })
        await getUser.provider.save()
       res.send("game deleted whit success") 
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
}



module.exports = {
    gameInformation,
    getGames,
    searchGame,
    createGame,
    mostPopularGames,
    releasedLastMonth,
    GamesExaminar,
    deleteGameProvider
};

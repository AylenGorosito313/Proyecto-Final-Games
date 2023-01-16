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

const filtrado = async (req, res) =>{ // idea sobre el filtradooooooooooo ...................
    const { filtrado, gerne } = req.query;
    try{
        let api = await GamesExaminar();
        let DB = await getGames();
        let allGames = [...DB, ...api];
        let sorT;
        switch (ordenamiento) {
            case  '':
                sorT = [...allGames];
                break;
            case 'A-Z':
                sorT = allGames.sort(function(a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1
                    }
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1
                    }
                    return 0;
                });  
                break;
            case 'Z-A':
                sorT = allGames.sort(function(a, b) {
                    if(a.name.toLowerCase() < b.name.toLowerCase()) {
                        return 1;
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
                break;
            case 'RatingAsc':
                sorT = allGames.sort(function(a, b) {
                    return a.rating - b.rating
                })
                break;
            case 'RatingDesc':
                sorT = allGames.sort(function(a, b) {
                    return b.rating - a.rating
                })
                break;
            case 'genre':
                sorT = sorT.filter(v => v.genres?.some(e => e === gerne)); 
            case 'genre':
                sorT = sorT.filter(v => v.genres?.some(e => e === gerne)); 
            default:
                sorT = allGames;
                break;
        }
    }catch(e){
        console.log(e);
    };
};





module.exports = {
    gameInformation,
    getGames,
    searchGame,
    createGame,
    mostPopularGames,
    releasedLastMonth,
    GamesExaminar
};

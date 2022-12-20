const apiClient = require("../utils/apiClient");
const mapGames = require("../utils/mapGames");
const paginate = require('../utils/paginated')
const gameTrailer = require("../utils/game_trailer");
const searchByName = require("../utils/searchByName");
const { Game } = require("../models/games");
const { Genre } = require("../models/genres");

//obtener games 20 por pagina
const getGames = async (req, res) => {
    const { page } = req.query;
    try {
        //le pasamos el path y el page a mapGame
        let response = await paginate("games", page);
        // console.log(response)
        let mapToGames = await mapGames(response)
        return res.status(200).json(mapToGames);
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
    const { platforms, background_image, name, rating, genre } = req.body;
    try {
        if (!name || !background_image || !platforms) {
            res.status(300).json({
                message: "Faltan campos requeridos",
            });
        } else {
            const [result, create] = await Game.findOrCreate({
                where: {
                    name: name[0].toUpperCase() + name.substring(1),
                    background_image,
                    rating,
                    platforms,
                },
            });
            if (create) {
                let genreByGame = await Genre.findAll({
                    where: {
                        name: genre,
                    },
                });
                result.addGenres(genreByGame);
                res.status(200).json(result);
            }
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {
    gameInformation,
    getGames,
    searchGame,
    createGame,
};

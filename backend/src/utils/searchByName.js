const { Game } = require("../models/games");
const apiClient = require("./apiClient");
const getAllGamesDb = require("./getAllGamesDB");
const mapGames = require("./mapGames");

const searchByName = async (name) => {
    try {
        let response = await apiClient("games", `&search=${name}`);
        let mapToGames = await mapGames(response.results);
        return mapToGames;
    } catch (error) {
        return {
            error: error.message
        };
    }
};

const searchNameDB = async (name) => {
    const findDB = await getAllGamesDb()
    console.log("juegos encontrados en la base de datos",findDB)
    const gameFiltrado = findDB.filter(el =>  el.dataValues.name.toLowerCase().includes(name.toLowerCase()))
    return gameFiltrado; 
}

module.exports = {searchByName,searchNameDB};

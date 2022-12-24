const apiClient = require("./apiClient");
const mapGames = require("./mapGames");

const searchByName = async (name) => {
    try {
        let response = await apiClient("games", `&search=${name}`);
        let mapToGames = await mapGames(response.results);
        return mapToGames;
    } catch (error) {
        return error.message;
    }
};

module.exports = searchByName;

const apiClient = require("./apiClient");
const mapGames = require("./mapGames");

const getGamePopular = async () => {
    try {
        let response = await apiClient(
            "games",
            "&dates=2021-01-01,2022-12-30&ordering=-added&page_size=20"
        );
        let gamePopularMap = mapGames(response.results);
        return gamePopularMap;
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = getGamePopular;

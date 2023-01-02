const apiClient = require("./apiClient");
const formateDate = require("./formatDate");
const mapGames = require("./mapGames");

const getGamePopularOrReleased = async (popularOrReleased) => {
    try {
        let getDate = formateDate(popularOrReleased)
        console.log(getDate)
        let response = await apiClient(
            "games",
            `&dates=${getDate}&ordering=-added&page_size=20`
        );
        let gamePopularMap = mapGames(response.results);
        return gamePopularMap;
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = getGamePopularOrReleased;

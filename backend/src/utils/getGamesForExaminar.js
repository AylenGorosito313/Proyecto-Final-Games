const apiClient = require("./apiClient");
const mapGames = require("./mapGames");
let arrayForGames = [];
let arraMap = [];

const getGamesForExaminar = async (search = "") => {
    try {
        if (arrayForGames.length && !search) {
            return arraMap;
        }

        if (!arrayForGames.length && !search) {
            //5 5 5
            for (let i = 1; i < 5; i++) {
                const getGames = await apiClient(
                    "games",
                    `&page_size=40&page${i}`
                );
                arrayForGames = getGames.results;
            }
        }

        if (search) {
            const getGames = await apiClient("games", `&search=${search}`);
            arrayForGames = getGames.results;
        }
        arraMap = mapGames(arrayForGames);
        return arraMap;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getGamesForExaminar;

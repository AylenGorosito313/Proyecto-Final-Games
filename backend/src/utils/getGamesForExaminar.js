const apiClient = require("./apiClient");
const mapGames = require("./mapGames");
let arrayForGames = [];
let arraMap = []

const getGamesForExaminar = async () => {
    
    try {
        if (arrayForGames.length) {
            return arraMap;
        }

        if (!arrayForGames.length) {//5 5 5
            for (var i = 1; i < 5; i++) {
                const getGames = await apiClient(
                    "games",
                    `&page_size=40&page${i}`
                );
                arrayForGames = getGames.results;
            }
        }
        arraMap = mapGames(arrayForGames)
        return arraMap;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getGamesForExaminar;

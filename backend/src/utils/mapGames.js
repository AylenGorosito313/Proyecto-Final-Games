const apiClient = require("./apiClient");

const mapGames = async (path, page = "") => {
    let response = undefined;
    try {
        if (page) {
            response = await apiClient(path, `&page=${page}`);
        } else {
            response = await apiClient(path);
        }
        return response.results.map((game) => {
            return {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                rating: game.rating,
                
            };
        });
    } catch (error) {}
};


module.exports = mapGames
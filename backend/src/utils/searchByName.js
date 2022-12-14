const apiClient = require("./apiClient");

const searchByName = async (name) => {
    try {
        let response = await apiClient("games", `&search=${name}`);
        return response.results.map((game) => {
            return {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                rating: game.rating,
            };
        });
    } catch (error) {
        return error.message;
    }
};

module.exports = searchByName
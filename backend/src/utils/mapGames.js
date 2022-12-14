const calculatePrice = require("./calculatePrice");

const mapGames = async (games) => {
    let price = calculatePrice(100, 10);
    try {
        return games.map((game) => {
            return {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                rating: game.rating,
                released: game.released,
                parent_platforms: game.parent_platforms.map(
                    (platform) => platform.platform.name
                ),
                genres: game.genres.map((genre) => genre.name),
                price,
            };
        });
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = mapGames;

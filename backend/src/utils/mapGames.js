const calculatePrice = require("./calculatePrice");

const mapGames = async (games) => {
    const uuidRegex =
        /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

    try {
        return games.map((game) => {
            let price = calculatePrice(100, 15);
            return {
                id: game.id,
                name: game.name,
                background_image: uuidRegex.test(game.id)
                    ? game.background_image[0]
                    : game.background_image,
                rating: game.rating,
                released: game.released || "Default",
                parent_platforms: uuidRegex.test(game.id)
                    ? game.platforms
                    : game.parent_platforms.map(
                          (platform) => platform.platform.name
                      ),
                genres: game.genres.map((genre) => genre.name),
                price: uuidRegex.test(game.id) ? game.price : price,
            };
        });
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = mapGames;

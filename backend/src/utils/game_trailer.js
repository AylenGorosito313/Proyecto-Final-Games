const apiClient = require("./apiClient");
const screenshotGame = require("./screenshotGame");

const gameTrailer = async (gameInfo, id) => {
    try {
        if (id) {
            let trailer = await apiClient(`games/${id}/movies`);
            let screenshot = await screenshotGame(id)
            let results = gameInfo.map((ele) => {
                return {
                    name: ele.name,
                    description: ele.description,
                    released: ele.released,
                    background_image: ele.background_image,
                    website: ele.website,
                    rating: ele.rating,
                    parent_platforms: ele.parent_platforms.map(
                        (platform) => platform.platform.name
                    ),
                    stores: ele.stores.map((s) => s.store.domain),
                    genres: ele.genres.map((g) => g.name),
                    developers: ele.developers.map((d) => d.name),
                    description_raw: ele.description_raw,
                    screenshot: screenshot?.map(screen => screen.image),
                    trailer: trailer.results[0]?.data,
                    price: ele.name.length * 1.0
                };
            });
            return results;
        }
    } catch (error) {
        return {
            error: error.message
        };
    }
};

module.exports = gameTrailer;

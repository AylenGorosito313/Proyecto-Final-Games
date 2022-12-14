const apiClient = require("./apiClient");

const gameTrailer = async (gameInfo, id) => {
    try {
        if (id) {
            let trailer = await apiClient(`games/${id}/movies`);
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
                    description_raw: ele.description_raw,
                    trailer: trailer.results[0].data,
                };
            });
            console.log(results)

            return results;
        }
    } catch (error) {
        return error.message;
    }
};

module.exports = gameTrailer;

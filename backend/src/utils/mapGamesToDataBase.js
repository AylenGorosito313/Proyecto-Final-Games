const mapGamesToDataBase = (games) => {
    return games.map((game) => {
        return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            rating: game.rating,
            parent_platforms: game.platforms,
            price: game.price,
        };
    });
};

module.exports = mapGamesToDataBase;

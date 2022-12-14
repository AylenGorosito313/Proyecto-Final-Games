const apiClient = require("../utils/apiClient");
const { Genre } = require("../models/genres");

const getGenres = async (req, res) => {
    try {
        let genre = await apiClient("genres");
        let result = genre.results.map((g) => {
            return g.name;
        });

        result.forEach(async (g) => {
            await Genre.findOrCreate({
                where: {
                    name: g,
                },
            });
        });

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = getGenres;

const apiClient = require("../utils/apiClient");
const { Genre } = require("../models/genres");

let genres = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Massively Multiplayer",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card",
];

const getGenres = async (req, res) => {
    try {
        return res.status(200).json(genres)
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const createGenres = async () => {
    try {
        genres.forEach(async (g) => {
            await Genre.findOrCreate({
                where: {
                    name: g,
                },
            });
        });
        return "creados";
    } catch (error) {
        return error.message;
    }
};

module.exports = { getGenres, createGenres };

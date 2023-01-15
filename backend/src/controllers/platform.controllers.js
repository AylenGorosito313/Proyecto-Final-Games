const { Platforms } = require("../models/platform");

const platform = [
    "PC",
    "PlayStation",
    "Xbox",
    "iOS",
    "Android",
    "Apple Macintosh",
    "Linux",
    "Nintendo",
    "Atari",
    "Commodore / Amiga",
    "SEGA",
    "3DO",
    "Neo Geo",
    "Web",
];

// const apiClient = require("../utils/apiClient");

const getPlatform = async (req, res) => {
    try {
        platform.forEach(async (gamePlatform) => {
            await Platforms.findOrCreate({
                where: {
                    name: gamePlatform,
                },
            });
        });
        res.status(200).json(platform);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

module.exports = getPlatform;

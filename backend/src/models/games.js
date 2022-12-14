const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Genre } = require('./genres')

const Game = sequelize.define("game", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    background_image: {
        type: DataTypes.STRING,
        allowNull: false,
        validator:{
            isUrl: true
        }
    },
    rating: {
        type: DataTypes.FLOAT,
    },
    platforms: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
    },
});

Game.belongsToMany(Genre, { through: "game_genre" })
Genre.belongsToMany(Game, { through: "game_genre" })


module.exports = { Game };

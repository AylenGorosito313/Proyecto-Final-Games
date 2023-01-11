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
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        defaultValue: 0.00
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trailer: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {freezeTableName: true});

Game.belongsToMany(Genre, { through: "game_genre" })
Genre.belongsToMany(Game, { through: "game_genre" })

// Game.belongsToMany(Platforms, { through: "platfom_game" })
// Platforms.belongsToMany(Game, { through: "platfom_game" })


module.exports = { Game };

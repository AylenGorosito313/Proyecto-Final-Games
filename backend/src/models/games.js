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
        type: DataTypes.ARRAY(DataTypes.STRING),
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
    parent_platforms: {
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
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    createdBy:{
        type: DataTypes.STRING,
        defaultValue: null
    },
    developers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    released: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {freezeTableName: true, paranoid: true, deletedAt: 'JuegosEliminados'});

Game.belongsToMany(Genre, { through: "game_genre" })
Genre.belongsToMany(Game, { through: "game_genre" })


module.exports = { Game };

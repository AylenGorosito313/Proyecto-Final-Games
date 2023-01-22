const DataTypes = require("sequelize/lib/data-types");
const sequelize = require("../db");
const { Game } = require("./games");


const Coment = sequelize.define(
    "comentarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    { timestamps: false, freezeTableName: true }
);


Game.belongsToMany(Coment, { through: "game_coment" })
Coment.belongsToMany(Game, { through: "game_coment" })


module.exports = { Coment };

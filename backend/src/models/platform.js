const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const {Game} = require('./games')

const Platforms = sequelize.define('platformss', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {freezeTableName: true});
Platforms.belongsToMany(Game, { through: "platforms_games" })
Game.belongsToMany(Platforms, { through: "platforms_games" })
module.exports = { Platforms }
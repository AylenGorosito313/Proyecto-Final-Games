const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Status } = require('./status')
const {Users}= require("./users")
const { Game } = require('./games')
const Opinion = sequelize.define("opinion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
})
GamePacks.belongsTo(Status, { through: "opinion_status" })
GamePacks.belongsTo(Users, { through: "opinion_users" })
GamePacks.belongsTo(Game, { through: "opinion_game" })

module.exports = { Opinion };
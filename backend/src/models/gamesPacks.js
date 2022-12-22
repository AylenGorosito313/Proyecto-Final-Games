const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Status } = require('./status')
const {Users}= require("./users")
const{Transaction}=require("./transaction")
const GamePacks = sequelize.define("gamepacks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
    },
      games: {
        type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
})
GamePacks.belongsTo(Status, { through: "gamePacks_status" })
GamePacks.belongsToMany(Users, { through: "gamePacks_users" })
GamePacks.belongsToMany(Transaction, { through: "gamePacks_transaction" })

module.exports = { GamePacks };
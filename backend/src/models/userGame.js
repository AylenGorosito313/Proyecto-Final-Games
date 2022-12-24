const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const {Game} = require("./games")
const {Users}= require("./users")
const{Transaction}=require("./transaction")
const { Status } = require('./status')
const userGame = sequelize.define("userGame", {
    
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true
      }


})
userGame.belongsTo(Users,{ through: "userGame_users"});
userGame.belongsTo(Game,{ through: "userGame_game"});
userGame.belongsTo(Status, { through: "userGame_status" })
userGame.belongsToMany(Transaction,{ through: "userGame_Transaction"})

module.exports = { userGame };
const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Status } = require('./status')
const{Transaction}=require("./transaction")
const starsPacks = sequelize.define("starsPacks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,

      }
})
starsPacks.belongsTo(Status);
starsPacks.belongsToMany(Transaction,{ through: "starsPacks_users"})
module.exports = {starsPacks};
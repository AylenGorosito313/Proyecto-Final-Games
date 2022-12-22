const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Users } = require('./users')
const { Status } = require('./status')

const shopGame = sequelize.define("shopGame", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      packTypes: {
        type: DataTypes.STRING,
        defaultValue: "starsPack",
        validate: {
          customValidator: (value) => {
            const enums = ["starsPack", "gamesPack"];
            if (!enums.includes(value)) {
              throw new Error("not a valid option");
            }
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
})
shopGame.belongsTo(Status, { through: "shopGame_status" })
shopGame.belongsTo(Users,{ through: "shopGame_users"});
module.exports = {shopGame };
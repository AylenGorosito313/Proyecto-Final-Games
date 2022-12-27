const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const {Users}= require("./users")
const { starsPacks}= require("./startsPack")
const {GamePacks}= require("./gamesPacks")
const{userGame}=require("./userGame")
const { Status } = require('./status')


const Transaction = sequelize.define("transaction", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "money",
        validate: {
          customValidator: (value) => {
            const enums = ["money", "stars"];
            if (!enums.includes(value)) {
              throw new Error("not a valid option");
            }
          },
        },
      },
      priceStars: {
        type: DataTypes.FLOAT
      },
      paymentId: {
        type: DataTypes.BIGINT,
        // allowNull: false
      },
      priceMoney: {
        type: DataTypes.FLOAT
      }
})
Transaction.belongsTo(Status)
Transaction.belongsTo(Users);
Transaction.belongsToMany(starsPacks, { through: 'Transaction_StarsPack' });
Transaction.belongsToMany(GamePacks, { through: 'Transaction_CardPacks' });
Transaction.belongsToMany(userGame, { through: 'Transaction_userGame' });

module.exports = { Transaction };
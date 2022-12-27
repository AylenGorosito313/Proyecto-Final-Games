const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const {Game} = require("./games")
const {Users}= require("./users")
const { starsPacks}= require("./startsPack")
const {GamePacks}= require("./gamesPacks")
const{Opinion}=require("./opinion")
const{userGame}=require("./userGame")

const Status = sequelize.define("status", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          customValidator: (value) => {
            const enums = ["active", "inactive", "onDeck", "onSale"];
            if (!enums.includes(value)) {
              throw new Error("not a valid option");
            }
          },
        },
      },
})

Status.hasMany(Users);
Status.hasMany(Game);
Status.hasMany(starsPacks);
Status.hasMany(GamePacks);
Status.hasMany(Opinion);
Status.hasMany(userGame);
module.exports = { Status };
"use strict";
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
       
      },
})

Status.hasMany(Users);
Status.hasMany(Game);
Status.hasMany(starsPacks);
Status.hasMany(GamePacks);
Status.hasMany(Opinion);
Status.hasMany(userGame);
module.exports = { Status };
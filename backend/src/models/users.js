const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Coment } = require("./coment");
const { Game } = require('./games')

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    proveedor:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favoritos: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
        allowNull: true
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    region: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profile_img: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, {freezeTableName: true});

Game.belongsToMany(Users, { through: "users_game" })
Users.belongsToMany(Game, { through: "users_game" })

Users.hasMany(Coment)
Coment.belongsTo(Users)


module.exports = {Users};


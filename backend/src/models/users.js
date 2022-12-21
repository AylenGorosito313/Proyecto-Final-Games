const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Game } = require('./games')

const Users = sequelize.define('user', {
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
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Game.belongsToMany(Users, { through: "users_game" })
Users.belongsToMany(Game, { through: "users_game" })

module.exports = { Users};


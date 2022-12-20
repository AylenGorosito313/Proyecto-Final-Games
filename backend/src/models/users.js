const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Game } = require('./games')

const Users = sequelize.define('username', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

Game.belongsToMany(Users, { through: "users_game" })
Users.belongsToMany(Game, { through: "users_game" })

module.exports = { Users};


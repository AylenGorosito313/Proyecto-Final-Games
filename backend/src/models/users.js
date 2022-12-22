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
    nickName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
    },
    age:{
        type: DataTypes.INTEGER,
    },
    city:{
        type: DataTypes.STRING,
    },
    favoritos: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
    },
});

Game.belongsToMany(Users, { through: "users_game" })
Users.belongsToMany(Game, { through: "users_game" })

module.exports = { Users};


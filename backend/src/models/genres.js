const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Genre = sequelize.define('genre', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = { Genre }
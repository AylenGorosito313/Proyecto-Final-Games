const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Platforms = sequelize.define('platform', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = { Platforms }
const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const CarritoItem = sequelize.define('CarritoItem', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
    },
}, {freezeTableName: true});


module.exports = { CarritoItem }
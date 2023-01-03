const sequelize = require('../db')
const { DataTypes } = require('sequelize');
const {Carrito} = require('./Carrito');
const {Game} = require('./games');

const CarritoItem = sequelize.define('carritoItem', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
    },
}, {timestamps: false, freezeTableName: true});

// Relación de Carrito-CarritoItem y Game-CarritoItem 
Carrito.hasMany(CarritoItem, {
    foreignKey: 'carritoId'
});
CarritoItem.belongsTo(Carrito);

Game.hasMany(CarritoItem);
CarritoItem.belongsTo(Game);

module.exports = { CarritoItem }
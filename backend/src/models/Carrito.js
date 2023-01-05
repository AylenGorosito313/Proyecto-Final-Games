const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Game } = require("./games");
const {Users} = require("./users")

const Carrito = sequelize.define('carrito', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4        
    },
    total_items: {
        type: DataTypes.INTEGER,
        // allowNull: false,
    },
    total_precio: {
        type: DataTypes.FLOAT,
    },
    status: {
        type: DataTypes.ENUM({
                values: ['completed', 'pending', 'rejected']
              }),
    },
    paymentMethod: {
       type: DataTypes.UUID
    },
    orderDATE: {
        type: DataTypes.DATE,
    },
    items:{
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
    }
}, {timestamps: false, freezeTableName: true});

// relaciones entre tablas 
Users.hasOne(Carrito, {
    foreignKey: 'userId'
  });
Carrito.belongsTo(Users);

Carrito.hasMany(Game);
Game.belongsTo(Carrito);

module.exports = {Carrito};


const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const {Users} = require("./users")

const Carrito = sequelize.define('carrito', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4        
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
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
    item:{
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
    }
}, {timestamps: false, freezeTableName: true});

// relaciones entre tablas 
Users.hasOne(Carrito, {
    foreignKey: 'userId'
  })
Carrito.belongsTo(Users)

module.exports = {Carrito};


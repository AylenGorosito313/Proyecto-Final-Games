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
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING,
    },
    paymentMethod: {
       type: DataTypes.UUID
    },
    orderDATE: {
        type: DataTypes.DATE,
    }
}, {timestamps: false, freezeTableName: true});

// relaciones entre tablas 
Users.hasOne(Carrito, {
    foreignKey: 'userId'
  })
Carrito.belongsTo(Users)

module.exports = {Carrito};


const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Compras = sequelize.define('compras',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    historiaDeCompras: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
    }
})

Users.hasOne(Compras, {
    foreignKey: 'userId'
  });
Compras.belongsTo(Users);



module.exports = Compras
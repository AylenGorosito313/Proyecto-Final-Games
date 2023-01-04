const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Users  } = require('./users')
const {Game }=require('./games')
const Providers = sequelize.define('providers', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
      
        
    },
    videogamesId: {
        type: DataTypes.UUID,
        primaryKey: true,  
    },
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,  
    },
    Profits:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
    videoGamesPropor:{
        type:  DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: false
    },
    income: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {freezeTableName: true});


module.exports = {Providers};


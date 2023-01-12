const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Users  } = require('./users')
const {Game }=require('./games');
const Providers = sequelize.define('provider', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,      
    },
    profits:{
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0.00
    },
    videoGamesPropor:{
        type:  DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: []
    },

}, {freezeTableName: true});


Users.hasOne(Providers, {
    foreignKey: 'userId'
  });
Providers.belongsTo(Users);





module.exports = {Providers};


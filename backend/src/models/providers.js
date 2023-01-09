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
        allowNull: false,
    },
    videoGamesPropor:{
        type:  DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        defaultValue: []
    },
    income: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, {freezeTableName: true});
Users.hasOne(Providers, {
    foreignKey: 'userId'
  });
Providers.belongsTo(Users);
Providers.belongsToMany(Game, { through: "provider_game"})
Game.belongsTo(Providers,{ through: "provider_game"})



module.exports = {Providers};


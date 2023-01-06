const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Users  } = require('./users')
const {Game }=require('./games');
const Providers = sequelize.define('providers', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      
    },

    Profits:{
        type: DataTypes.INTEGER,
    },
    videoGamesPropor:{
        type:  DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
    },
    income: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {freezeTableName: true});
Users.hasOne(Providers, {
    foreignKey: 'userId'
  });
Providers.belongsTo(Users);
Providers.belongsToMany(Game, { through: "providers_game"})
Game.belongsTo(Providers,{ through: "providers_game"})



module.exports = {Providers};


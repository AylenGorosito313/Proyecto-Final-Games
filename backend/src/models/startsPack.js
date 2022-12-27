
const { Model } = require("sequelize");

class starsPacks extends Model {
  static associate(models) {
    starsPacks.belongsTo(models.Status);
    starsPacks.belongsToMany(models.Transaction, { through: 'Transaction_StarsPack' });
  }
}

module.exports = (sequelize, DataTypes) => {
  starsPacks.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,

      }
    },
    {
      sequelize,
      modelName: "StarsPack",
    }
  );
  return starsPacks;
};

module.exports = {starsPacks};
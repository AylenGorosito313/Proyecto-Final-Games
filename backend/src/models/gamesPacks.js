
const { Model } = require("sequelize");

class GamePacks extends Model {
  static associate(models) {
    GamePacks.belongsTo(models.Status);
    GamePacks.belongsToMany(models.User, { through: "FavPacks" });
    GamePacks.belongsToMany(models.Transaction, {
      through: "Transaction_CardPacks",
    });
  }
}

module.exports = (sequelize, DataTypes) => {
  GamePacks.init(
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
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
    },
      cards: {
        type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CardPacks",
    }
  );
  return GamePacks;
};

module.exports = { GamePacks };


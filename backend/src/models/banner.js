const DataTypes = require("sequelize/lib/data-types");
const sequelize = require("../db");

const Banner = sequelize.define(
  "banner",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    banner_Logo: {
      type: DataTypes.STRING,
    },
    banner_img: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    text_btn: {
        type: DataTypes.STRING,
      },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { Banner };

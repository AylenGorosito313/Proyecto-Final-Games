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

        banner_img: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
        },
    },
    { timestamps: false, freezeTableName: true }
);


module.exports = { Banner };

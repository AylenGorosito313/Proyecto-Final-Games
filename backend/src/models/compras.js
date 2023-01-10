const DataTypes = require("sequelize/lib/data-types");
const sequelize = require("../db");
const { Users } = require("./users");

const Compras = sequelize.define(
    "compras",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        historialDeCompras: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            defaultValue: [],
        },
    },
    { freezeTableName: true }
);

Users.hasOne(Compras, {
    foreignKey: "userId",
});
Compras.belongsTo(Users);

module.exports = { Compras };

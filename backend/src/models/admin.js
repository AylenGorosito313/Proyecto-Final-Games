
const DataTypes = require("sequelize/lib/data-types");
const sequelize = require("../db");
const { Banner } = require("./banner")

const Admin = sequelize.define(
    "admin",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4 
        },

        mail: {
            type: DataTypes.STRING,
            defaultValue: "admin",
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: "andromedaAdmin"
        },
    },
    { timestamps: false, freezeTableName: true }
);

Admin.belongsToMany(Banner, {through: "banner_admin"})
Banner.belongsToMany(Admin, {through: "banner_admin"})

module.exports = { Admin };

const { ARRAY } = require("sequelize");
const DataTypes = require("sequelize/lib/data-types");
const sequelize = require("../db");

const inactiveUsers = sequelize.define(
    "inactiveUsers", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    proveedor:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    region: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profile_img: {
        type: DataTypes.STRING,
        allowNull: true
    },   
    favoritos: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
        allowNull: true
    }, 
    purchased_games: {
         type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
        allowNull: true
    }     
}, { freezeTableName: true }
);


module.exports = { inactiveUsers };
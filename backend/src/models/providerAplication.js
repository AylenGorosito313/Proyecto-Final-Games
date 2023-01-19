const DataTypes = require("sequelize/lib/data-types");
const sequelize = require("../db");


const ProviderAplication = sequelize.define(
    "providerAplication",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4 
        },
        id_user: {
            type: DataTypes.UUID,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complete_name: {
            type: DataTypes.STRING            
        },
        reason_aplication : {
            type: DataTypes.STRING         
        },
        game_engine: {
            type: DataTypes.STRING         
        },
        micro_transactions : {
            type: DataTypes.BOOLEAN
        }      
    },
    { timestamps: false, freezeTableName: true }
);



module.exports = { ProviderAplication };

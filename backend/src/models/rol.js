const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const { Users } = require('./users')

const Rol = sequelize.define("Rol", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      rol: {
        type: DataTypes.STRING,
        defaultValue: "user",
        validate: {
          customValidator: (value) => {
            const enums = ["superadmin", "admin", "user"];
            if (!enums.includes(value)) {
              throw new Error("not a valid option");
            }
          },
        },
      },
})
Rol.hasMany(Users,{ through: "rol_users"});
module.exports = { Rol };

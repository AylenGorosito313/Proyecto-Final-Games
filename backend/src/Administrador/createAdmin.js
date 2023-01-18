const { Admin } = require("../models/admin")


const createAdmin = async () => {
    try {
        await Admin.create()
        return "admin created"; 
    } catch (error) {
          return error.message
    }
}

module.exports = { createAdmin}; 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users } = require("../models/users");
const { SECRET } = process.env;

const createUser = async (user) => {
    try {
        const passwordHash = await bcrypt.hash(user.password, 10);
        const createUser = await Users.create({
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            birth_date: user.birth_date,  
            profile_img: user.profile_img,
            region: user.region,
            passwordHash,
        });
        return createUser.toJSON(); 
    } catch (error) {
        return error.message;
    }
};


const verifyUser = (token) => {

    try {
       let result = jwt.verify(token, SECRET)
       return true
        
    } catch (error) {
        return false
    }
}

module.exports = {
    createUser,
    verifyUser
}
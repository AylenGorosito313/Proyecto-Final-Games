const { Users } = require("../models/users");
const { Carrito } = require('../models/Carrito');
const { Compras } = require("../models/compras");

const getAllUser = async (req, res) => {
    try {
        const user = await Users.findAll({
            include:[{
                model: Carrito
            },{
                model: Compras
            }]
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        let searchUser = await Users.findByPk(id);
        res.status(200).json(searchUser);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const updateUserProfile = async (req, res) => {
    const { id } = req.params;
    const {name, lastName, birth_date, profile_img, region} = req.body    
    try {
            const user = await Users.findByPk(id)
            // console.log("aca consologeamos user", user)
            user.name = name;
            user.lastName = lastName;
            user.birth_date = birth_date;
            user.profile_img = profile_img;
            user.region = region

            await user.save();

            res.json(user)            
           
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

module.exports = {
    getAllUser,
    getUserById,
    updateUserProfile,
};


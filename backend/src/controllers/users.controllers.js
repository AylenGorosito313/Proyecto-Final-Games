const { Users } = require("../models/users");
const { Carrito } = require('../models/Carrito')

const getAllUser = async (req, res) => {
    try {
        const user = await Users.findAll({
            include: {
                model: Carrito
            }
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
        console.log(error);
    }
};

module.exports = {
    getAllUser,
    getUserById,
};

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
        let searchUser = await Users.findByPk(id, {
            include:[{
                model: Carrito
            },{
                model: Compras
            }],
            attributes: { exclude: ["passwordHash"] }
        });
        res.status(200).json(searchUser);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUser,
    getUserById,
};

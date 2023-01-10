const { Compras } = require('../models/compras')
// const addPurchaseUser = require("../utils/addPurchaseUser");

const userPurchase = async (req, res) => {
    const { userId } = req.params;
    try {
        let searchUserCar = await Compras.findOne({
            where: {
                userId,
            },
        });
        if (searchUserCar && searchUserCar.historialDeCompras) {
            res.status(200).json(searchUserCar);
        } else {
            res.status(404).json({ message: `purchase history is empty` });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

module.exports = userPurchase;

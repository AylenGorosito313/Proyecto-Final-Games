const { Carrito } = require("../models/Carrito");

const getItemsCar = async (id) => {
    try {
        let carUser = await Carrito.findOne({
            where: {
                userId: id,
            },
        });
        if (carUser) {
            let carInfo = [...carUser.items];
            return carInfo;
        }
        return {
            message: "The car is empty",
        };
    } catch (error) {
        return {
            message: error.message,
        };
    }
};

module.exports = getItemsCar;

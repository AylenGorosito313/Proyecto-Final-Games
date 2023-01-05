const { Carrito } = require("../models/Carrito");
const { Compras } = require("../models/compras");

const addPurchaseUser = async (userId) => {
    try {
        let searchPurchase = await Compras.findOne({
            where: {
                userId,
            },
        });
        let searchUserCar = await Carrito.findOne({
            where: {
                userId,
            },
        });
        if (!searchPurchase && searchUserCar) {
            let createPurchase = await Compras.create();
            createPurchase.set({
                userId,
                historiaDeCompras: searchUserCar.items,
            });
            createPurchase.save();
        } else {
            searchPurchase.historiaDeCompras = [
                ...searchPurchase.historiaDeCompras,
                ...searchUserCar.items,
            ];
        }
        return "Agregado al historial de compra";
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = addPurchaseUser;

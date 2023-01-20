const { Carrito } = require("../models/Carrito");
const { Compras } = require("../models/compras");

const addPurchaseUser = async (userId) => {
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
    try {
        if (!searchPurchase && searchUserCar) {
            let createPurchase = await Compras.create();
            createPurchase.set({
                userId,
                historialDeCompras: searchUserCar.items,
            });
            // await searchUserCar.drop()
            await createPurchase.save();
        } else {
            searchPurchase.historialDeCompras = [
                ...searchPurchase.historialDeCompras,
                ...searchUserCar.items,
            ];
        }

        searchUserCar.update({
            total_items: 0,
            total_precio: 0,
            items: [],
        });
        await searchPurchase.save();
        await searchUserCar.save();
        
        return "Agregado al historial de compra";
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = addPurchaseUser;

const { Carrito } = require("../models/Carrito");
const { Users } = require("../models/users");
const apiClient = require("../utils/apiClient");
const mapGames = require("../utils/mapGames");

const addToCar = async (req, res) => {
    const { userId, gameId } = req.params;

    try {
        let userVerify = await Users.findByPk(userId);
        let searchUserCar = await Carrito.findOne({
            where: {
                userId,
            },
        });

        let gameInfo = await apiClient(`games/${gameId}`);
        gameInfo = await mapGames([gameInfo]);
        if (!searchUserCar) {
            let addCarItem = await Carrito.create();
            addCarItem.userId = userId;
            addCarItem.items = [...gameInfo];
            addCarItem.total_items = addCarItem.items.length;
            addCarItem.total_precio = addCarItem.items.reduce((count, ele) => {
                return count + ele.price;
            }, 0);
            addCarItem.status = "pending";
            addCarItem.save();
            return res.status(200).json(addCarItem);
        }
        searchUserCar.items = [...searchUserCar.items, ...gameInfo];
        searchUserCar.total_items = searchUserCar.items.length;
        searchUserCar.total_precio = searchUserCar.items.reduce(
            (count, ele) => {
                return count + ele.price;
            },
            0
        );
        searchUserCar.save();
        return res.status(200).json(searchUserCar);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const getCarUser = async (req, res) => {
    const { userId } = req.params;

    try {
        let carUser = await Carrito.findOne({
            where: {
                userId,
            },
        });

        if (carUser) {
            let carInfo = carUser.items;
            return res.status(200).json(carInfo);
        }

        res.status(404).json({
            message: "You do not have products in the shopping cart",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

module.exports = { addToCar, getCarUser };

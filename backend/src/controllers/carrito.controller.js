const { Carrito } = require("../models/Carrito");
const { Game } = require("../models/games");
const { Users } = require("../models/users");
const apiClient = require("../utils/apiClient");
const mapGames = require("../utils/mapGames");
const mapGamesToDataBase = require("../utils/mapGamesToDataBase");

const addToCar = async (req, res) => {
    const { userId, gameId } = req.params;
    try {
        if (userId === "null" || !gameId) {
            return res.status(406).send("You must login or register to add games to cart");
        }
        const uuidRegex =
            /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
        let gameVerify = uuidRegex.test(gameId);
        let gameDataBase = undefined;

        if (userId) {
            let userSearch = await Users.findByPk(userId);
            if (!userSearch) {
                return res
                    .status(400)
                    .send("You must login or register to add games to cart");
            }
            let searchUserCar = await Carrito.findOne({
                where: {
                    userId,
                },
            });

            let gameInfo = gameVerify
                ? await Game.findByPk(gameId)
                : await apiClient(`games/${gameId}`);
            if (gameVerify) {
                gameDataBase = gameInfo.toJSON();
                gameInfo = mapGamesToDataBase([gameDataBase]);
            } else {
                gameInfo = await mapGames([gameInfo]);
            }

            if (!searchUserCar) {
                let addCarItem = await Carrito.create();
                addCarItem.userId = userId;
                addCarItem.items = [...gameInfo];
                addCarItem.total_items = addCarItem.items.length;
                addCarItem.total_precio = addCarItem.items.reduce(
                    (count, ele) => {
                        return count + ele.price;
                    },
                    0
                );
                addCarItem.status = "pending";
                addCarItem.save();
                return res.status(200).json(addCarItem);
            }
            let verifyItems = searchUserCar.toJSON();
            if (verifyItems.items.find((ele) => ele.id.toString() === gameId)) {
                return res.status(400).send("the game already exists in your cart")
            }
            searchUserCar.items = [...searchUserCar.items, ...gameInfo];
            searchUserCar.total_items = searchUserCar.items.length;
            searchUserCar.total_precio = searchUserCar.items.reduce(
                (count, ele) => {
                    return count + parseInt(ele.price);
                },
                0
            );
            searchUserCar.save();
            return res.status(200).json(searchUserCar);
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const getCarUser = async (req, res) => {
    const { userId } = req.params;

    if (!userId)
        return res.status(400).json({
            error: "userId is empty",
        });
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

const deleteAllItems = async (req, res) => {
    const { userId } = req.params;
    if (!userId)
        return res.status(400).json({
            error: "userId is empty",
        });
    try {
        let carUser = await Carrito.findOne({
            where: {
                userId,
            },
        });

        if (carUser) {
            carUser.total_items = 0;
            carUser.total_precio = 0;
            carUser.status = "pending";
            carUser.items = [];
            await carUser.save();

            return res.status(200).json({
                message: "shopping cart deleted with success",
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const deleteItem = async (req, res) => {
    const { userId, gameId } = req.params;

    try {
        let userVerify = await Users.findByPk(userId);
        if (userVerify) {
            let carUser = await Carrito.findOne({
                where: {
                    userId,
                },
            });

            if (carUser) {
                let carToJSON = carUser.toJSON();
                let itemDeleted = carToJSON.items.find(
                    (ele) => ele.id.toString() === gameId
                );
                let itemsUpdate = carToJSON.items.filter(
                    (ele) => ele.id.toString() !== gameId
                );
                console.log(itemDeleted);
                carUser.set({
                    items: itemsUpdate,
                    total_items: itemsUpdate.length,
                    total_precio: carUser.total_precio - itemDeleted.price,
                });
                await carUser.save();
                return res.status(200).json(carUser);
            }
        }
        res.status(404).json({
            message: "You are not logged",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

module.exports = { addToCar, getCarUser, deleteItem, deleteAllItems };

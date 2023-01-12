const { Game } = require("../models/games");
const { Providers } = require("../models/providers");
const { Users } = require("../models/users");
const getItemsCar = require("../utils/getItemsCar");

//crear un proveedor
const registerProvider = async (req, res) => {
    const { userId } = req.params;
    try {
        if (!userId) {
            return res.status(400).json({
                error: "id must be provided",
            });
        }

        const searchUser = await Users.findByPk(userId);
        if (searchUser) {
            searchUser.proveedor = true;

            const createUserProvider = await Providers.create();
            createUserProvider.userId = userId;
            await createUserProvider.save();
            await searchUser.save();
            return res.status(200).json({
                createUserProvider,
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getGamesByProvider = async (req, res) => {
    const { userId } = req.params;
    try {
        const searchUser = await Users.findByPk(userId, {
            where: { proveedor: true },
            include: {
                model: Providers,
            },
        });

        return !searchUser
            ? res.status(404).json({
                  message: "user has not created games",
              })
            : res.status(200).json(searchUser.provider.videoGamesPropor);
    } catch (error) {
        console.log(error);
    }
};

const supplierProfit = async (req, res) => {
    const { userId } = req.query;

    let games = await getItemsCar(userId);
    const uuidRegex =
        /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

    try {
        let filterGames = games.filter((ele) => uuidRegex.test(ele.id));
        filterGames.length &&
            filterGames.forEach(async (element) => {
                let gameToShopping = await Game.findByPk(element.id);
                let userProvider = gameToShopping.createdBy;
                let searchUserProvider = await Providers.findOne({
                    where: {
                        userId: userProvider,
                    },
                });
                let priceGame =
                    parseInt(searchUserProvider.profits) +
                    parseInt(gameToShopping.price);
                searchUserProvider.profits = priceGame;
                await searchUserProvider.save();
                return res.status(200).json({
                    message: "amount added to supplier profile",
                });
            });
            res.status(200).json('Not providers')
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {
    registerProvider,
    getGamesByProvider,
    supplierProfit,
};

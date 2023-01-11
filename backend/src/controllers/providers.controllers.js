const { Game } = require("../models/games");
const { Providers } = require("../models/providers");
const { Users } = require("../models/users");

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
    const { gameId } = req.query;

    if (!gameId) {
        return res.status(300).json({
            message: "game id must be provided",
        });
    }
    const uuidRegex =
        /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

    try {
        if (uuidRegex.test(gameId)) {
            let gameToShopping = await Game.findByPk(gameId);
            let userProvider = gameToShopping.createdBy;

            let searchUserProvider = await Providers.findOne({
                where: {
                    userId: userProvider
                }
            })
            searchUserProvider.profits += gameToShopping.price
            await searchUserProvider.save()
            res.status(200).json(searchUserProvider);
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {
    registerProvider,
    getGamesByProvider,
    supplierProfit,
};

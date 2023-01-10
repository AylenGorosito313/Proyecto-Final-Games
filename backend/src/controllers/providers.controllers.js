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

module.exports = {
    registerProvider,
    getGamesByProvider,
};

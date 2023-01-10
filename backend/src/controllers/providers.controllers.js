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

            const createUserProvider = await Providers.create({
                where: {
                    userId,
                },
            });
            searchUser.save();
            return res.status(200).json({
                message: "provider created successfully",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {
    registerProvider,
};

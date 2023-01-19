const { Users } = require("../models/users");

const updateUserProfile = async (req, res) => {
    const { id } = req.params;
    const userUpdate = req.body;
    try {
        const user = await Users.findByPk(id);
        // console.log("aca consologeamos user", user)
        user.update(userUpdate);
        await user.save();

        res.json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const providerAplication = (req, res) => {
        //solicitud del usuario para ser proveedor
};

module.exports = {
    updateUserProfile,
    providerAplication
};

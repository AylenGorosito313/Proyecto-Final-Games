const bcrypt = require("bcrypt");
const { Users } = require("../../models/users");
const { Carrito } = require("../../models/Carrito");
const { Compras } = require("../../models/compras");
const { logicDeletUser } = require("../../utils/logicDeletUser");
const { Providers } = require("../../models/providers");
const { inactiveUsers } = require("../../models/inactiveUsers");
const { ProviderAplication } = require("../../models/providerAplication");
const sendMail = require("../../services/sendMail");
const mainToEmail = require("../../services/nodeMails");
const { Coment } = require("../../models/coment");

const getAllUser = async (req, res) => {
    try {
        const user = await Users.findAll({
            include: [
                {
                    model: Carrito,
                },
                {
                    model: Compras,
                },
                {
                    model: Providers,
                },
                {
                    model: Coment,
                },
               
            ],
            // include: Coment,
            attributes: { exclude: ["passwordHash"] },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        let searchUser = await Users.findByPk(id, {
            include: [
                {
                    model: Carrito,
                },
                {
                    model: Compras,
                },
                {
                    model: Providers,
                },
                {
                    model: Coment,
                },
            ],
            // include: Coment,
            attributes: { exclude: ["passwordHash"] },
        });
        res.status(200).json(searchUser);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const deletedUser = async (req, res) => {
    const { id } = req.params;
    try {
        const inactiveUser = await logicDeletUser(id);
        res.status(200).json("usuario eliminado");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// obtener toda la informacion de los usuarios inactivos
const getInactiveUsers = async (req, res) => {
    try {
        const getInactiveUsers = await inactiveUsers.findAll({
            attributes: { exclude: ["passwordHash"] },
        });
        res.send(getInactiveUsers);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// obtener la informacion de un usuario inactivo por id
const getInactiveUser = async (req, res) => {
    const { id } = req.params;
    try {
        const getInactiveUser = await inactiveUsers.findByPk(id, {
            attributes: { exclude: ["passwordHash"] },
        });
        res.send(getInactiveUser);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const usuariosProveedores = async (req, res) => {
    try {
        const allProveedores = await Users.findAll({
            where: {
                proveedor: true,
            },
            include: [
                {
                    model: Providers,
                },
            ],
        });
        res.send(allProveedores);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

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

            let deleteAplication = await ProviderAplication.findOne({
                where: {
                    id_user: userId,
                },
            });

            let html = `
        <b> Hello ${deleteAplication.complete_name} your application to be a game provider was approved, thank you very much for trusting our service, a big hug from the developers of Andromeda </b>
        <a href="http://127.0.0.1:5173/provedor/profile">click here to see your new  profile </a>
      `;

            let message = sendMail(
                '"application approved ❤️" <andromedagames1507@gmail.com>',
                deleteAplication.email,
                "Provider ✔",
                html
            );

            await mainToEmail(message);

            await deleteAplication.destroy();
            return res.status(200).json({
                message: 'application approved'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const denyRequest = async (req, res) => {
    const { userId } = req.params;

    try {
        if(!userId){
            return res.status(400).json({
                message: 'id is require'
            })
        }
        let deleteAplication = await ProviderAplication.findOne({
            where: {
                id_user: userId,
            },
        });

        let html = `
        <b> Hello ${deleteAplication.complete_name} we apologize, but your application to be an Andromeda provider has been denied. If you believe there was an error in your application when it was submitted, you may try submitting it again. </b>
        <a href="http://127.0.0.1:5173/provedor/profile">click here to see your new  profile </a>
      `;

            let message = sendMail(
                '"application denied 🤕 "<andromedagames1507@gmail.com>',
                deleteAplication.email,
                "Provider ❌",
                html
            );

            await mainToEmail(message);

            await deleteAplication.destroy()

            return res.status(200).json({
                message: 'application denied'
            })


    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
};

//update user profile

const updateUserProfile = async (req, res) => {
    const { id } = req.params;
    const userUpdate = req.body;
    try {
        let Hash = undefined;
        if (userUpdate.password) {
            Hash = await bcrypt.hash(userUpdate.password, 10);
        }
        const user = await Users.findByPk(id);

        user.update({
            ...userUpdate,
            passwordHash: Hash !== undefined ? Hash : user.passwordHash,
        });
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getAplicationProviders = async (req, res) => {
    try {
        let providerTable = await ProviderAplication.findAll({
            attributes: { exclude: "id" },
        });
        return res.status(200).json(providerTable);
    } catch (error) {
        return res.status(400).json({
            error: error.message,
        });
    }
};
module.exports = {
    registerProvider,
    getAllUser,
    getUserById,
    deletedUser,
    getInactiveUsers,
    getInactiveUser,
    usuariosProveedores,
    updateUserProfile,
    getAplicationProviders,
    denyRequest
};

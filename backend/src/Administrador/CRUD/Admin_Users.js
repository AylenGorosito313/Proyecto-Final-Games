const { Users } = require("../../models/users");
const { Carrito } = require("../../models/Carrito");
const { Compras } = require("../../models/compras");
const { logicDeletUser } = require("../../utils/logicDeletUser");
const { Providers } = require("../../models/providers");
const {inactiveUsers} = require("../../models/inactiveUsers")


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
            ],
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
            ],
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
    console.log("entramos en el getInactiveUsers")
   try {
       const getInactiveUsers = await inactiveUsers.findAll({
           attributes: { exclude: ["passwordHash"] },
}); 
res.send(getInactiveUsers)
   } catch (error) {
       res.status(500).json({
           error: error.message,
       });
   }
}

// obtener la informacion de un usuario inactivo por id
const getInactiveUser = async (req, res) => {
    const {id} = req.params;
    try {const getInactiveUser = await inactiveUsers.findByPk( id, 
        { attributes: { exclude: ["passwordHash"] }} ); 
        res.send(getInactiveUser)
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}



const usuariosProveedores = async (req, res) => {
    try {
        const allProveedores = await Users.findAll({
                where: {
                    proveedor: true,
                }, include:[{
                        model: Providers, 
                    }]
                });
        console.log(allProveedores)
       res.send(allProveedores) 
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }   
}

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


module.exports = {
    registerProvider,
    getAllUser,
    getUserById,
    deletedUser,
    getInactiveUsers,
    getInactiveUser,
    usuariosProveedores
};

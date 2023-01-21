// const { Providers } = require("../../models/providers")
// const { Users } = require("../../models/users")
const { Game } = require("../../models/games");
const { Providers } = require("../../models/providers");
const deleteGameProvider = require("../../utils/logicDeleteGame");

// eliminamos juegos que se encuentran unicamente en la base de datos

const deleteGame = async (req, res) => {
    const { gameId, userId } = req.params;
    try {
        const findGame = await Game.findByPk(gameId);
        if (!findGame) {
            res.status(400).json({ message: "idGame not found" });
        }
        await deleteGameProvider(userId, gameId);
        await findGame.destroy();

        res.send({ message: "Game deleted" });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};


// actualizar juegos 

const updateGame = async (req, res) => {
    const {gameId, userId} = req.params;
    const infoGame = req.body
    
    try {
        const findUser = await Game.findOne({
            where: {
                createdBy: userId
            }
        })

        const user = await Game.findByPk(gameId);
        Game.update(userUpdate);
        await user.save();

        console.log("aca esta la informacion del juego con le id del usuario", findUser)
        // actualizar en la tabla de game y en el array que le corresponde al proveedor?
        await deleteGameProvider(gameId, userId) 
        const findProvider = await Providers.findOne({
            where: {
                userId: userId
            }
        })
        console.log("console.log de findProvider", findProvider)

        res.json({message: "la ruta ta activa"})
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
}
module.exports = { deleteGameProvider, deleteGame, updateGame };

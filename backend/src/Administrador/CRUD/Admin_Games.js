// const { Providers } = require("../../models/providers")
// const { Users } = require("../../models/users")
const { Game } =  require("../../models/games")
const deleteGameProvider = require("../../utils/logicDeleteGame")

// eliminamos juegos que se encuentran unicamente en la base de datos 

const deleteGame = async (req, res) => {
    const {gameId, userId} = req.params
    try {
        const findGame =  await Game.findByPk(gameId) 
        if(!findGame){
            res.status(400).json({message: "idGame not found"})
        }
        const deleteInfoArrayProvider = await deleteGameProvider(userId, gameId)
        const deletedGame = await findGame.destroy()
        
        res.send({message: "aca esta la ruta"})
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
}





module.exports = {deleteGameProvider, deleteGame}
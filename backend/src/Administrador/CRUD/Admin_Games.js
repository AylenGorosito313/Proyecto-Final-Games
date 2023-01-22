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
    const bodyInfo = req.body
    try{  
        const gameInfo  = await Game.findByPk(gameId);
        gameInfo.update(bodyInfo);      

        await deleteGameProvider(userId, gameId); 

        const findProvider = await Providers.findOne({
            where: {
                userId: userId
            }
        })
       
        const laVariable = gameInfo.toJSON()
              
        findProvider.videoGamesPropor = [...findProvider.videoGamesPropor, laVariable]
        await findProvider.save()
        
        res.json("game update with success")
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
}

const getAllGameToDB = async (req, res) => {
    try {
        
        let result = await Game.findAll()
        if(!result.length){
            return res.status(404).json({
                message: "The table Game is empty"
            })
        }
        res.status(200).json(result)

    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}

module.exports = { deleteGame, getAllGameToDB, updateGame };

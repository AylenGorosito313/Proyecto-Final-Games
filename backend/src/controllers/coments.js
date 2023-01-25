const { Coment } = require("../models/coment");
const { Game } = require("../models/games");
const { Users } = require("../models/users");

const createComent = async (req, res) => {
    const { gameId, userId } = req.query;
    const { coment }  = req.body;
console.log(coment, gameId, userId)
    try {
        let searchUser = await Users.findByPk(userId);
        if(!searchUser){
            return res.status(400).json({
                message: "User not found"
            })
        }
        let searchGame = await Game.findByPk(gameId);
        
        if(!searchGame){
            return res.status(404).json({
                message: "Game not found"
            })
        }
        let createComent = await Coment.create({
            autor: `${searchUser.name} ${searchUser.lastName}`,
            coment,
            profile: searchUser.profile_img
        });
        createComent.userId = userId
        await createComent.save()

        searchGame.addComentario(createComent);
        return res.status(200).json({
            message: 'Coment add'
        })
    } catch (error) {
        return res.status(400).json({
            error: error.message,
        });
    }
};


const deleteComent = async (req, res) => {
    const {userId, comentId} = req.query
    console.log("aca esta el usuario:", userId)
    console.log("aca esta el comentarioId:", comentId)
    try {
        const findUser = await Users.findByPk(userId)
        console.log("aca esta el resultado de la busqueda del usuario", findUser)
        if(!findUser){
            res.status(400).json({message: "user not found"})
         }         
         const findComent = await Coment.findByPk(comentId)
         console.log("aca esta el comentario a eliminar",findComent)
        const deleteComent = await Coment.destroy({
            where: {
              id: comentId} })

        console.log("aca esta el comentario elimina?:", deleteComent)
        res.status(200).json({message: "comentario eliminado con exito"})
    } catch (error) {
        return res.status(400).json({
            error: error.message,
        });
    }
}

// ruta: crear usuario, loggear, pasar un id de juego, registrarme como provedoor, subir un juego, comentar el juego. 

module.exports = {createComent, deleteComent }
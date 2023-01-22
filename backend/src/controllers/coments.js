const { Coment } = require("../models/coment");
const { Game } = require("../models/games");
const { Users } = require("../models/users");

const createComent = async (req, res) => {
    const { gameId, userId } = req.query;
    const { coment }  = req.body;

    try {
        let searchUser = await Users.findByPk(userId);
        if(!searchUser){
            return res.status(400).json({
                message: "User not found"
            })
        }
        let searchGame = await Game.findByPk(gameId);
        
        if(!searchGame){
            return res.status(400).json({
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

module.exports = createComent
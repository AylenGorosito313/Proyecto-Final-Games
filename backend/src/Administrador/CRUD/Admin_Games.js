const { Providers } = require("../../models/providers")
const { Users } = require("../../models/users")



const deleteGameProvider = async (req, res) => {
    const {userId, gameId} = req.params 
    try {
        const getUser = await Users.findOne({
            where: { id: userId }, 
            include: {
                model: Providers, 
            }
        })
        const arrayJuegos = getUser.provider.videoGamesPropor 
        // console.log("aca esta la info del juego del usuario",arrayJuegos)
        arrayJuegos.map(el => console.log(el.id))
        const arrayFiltrado = arrayJuegos.filter(el => el.id !== gameId)
        getUser.provider.set({
            videoGamesPropor : arrayFiltrado
        })
        console.log("esto es lo que quedo en videoGamesPropor", arrayFiltrado)
        await getUser.provider.save()

       res.send("game deleted whit success") 
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
}


module.exports = {deleteGameProvider}
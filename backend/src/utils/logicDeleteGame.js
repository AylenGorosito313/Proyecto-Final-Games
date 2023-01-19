const { Providers } = require("../models/providers")
const { Users } = require("../models/users")

const deleteGameProvider = async (userId, gameId) => {
    try {
        const getUser = await Users.findOne({
            where: { id: userId }, 
            include: {
                model: Providers, 
            }
        })
        const laConstante = getUser.toJSON()
        const arrayJuegos = laConstante.provider.videoGamesPropor 
        arrayJuegos.map(el => console.log(el.id))
        const arrayFiltrado = arrayJuegos.filter(el => el.id !== gameId)
        getUser.provider.set({
            videoGamesPropor : arrayFiltrado
        })
        // console.log("esto es lo que quedo en videoGamesPropor", arrayFiltrado)
        await getUser.provider.save()

       return "game deleted with success"; 
    } catch (error) {
        return ({
            error: error.message,
        })
    }
}

module.exports = deleteGameProvider ;
const { Providers } = require("../models/providers");

const deleteGameProvider = async (userId, gameId) => {
    try {
        const getProvider = await Providers.findOne({
            where: { userId },
        });
        const formartProvider = getProvider.toJSON();
        const arrayFiltrado = formartProvider.videoGamesPropor.filter((el) => el.id !== gameId);
        getProvider.set({
            videoGamesPropor: arrayFiltrado, 
        });
        await getProvider.save();
        return "game deleted with success";
    } catch (error) {
        return {
            error: error.message,
        };
    }
};

module.exports = deleteGameProvider;

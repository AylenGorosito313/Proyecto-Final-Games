const { Users } = require("../models/users");
const {Providers}= require("../models/providers")
const apiClient = require("../utils/apiClient");
const mapGames = require("../utils/mapGames");
//crear un proveedor

const registerProvider = async (req, res) => {
    const {gameId, userId} = req.params;
 try {
    let search = await Providers.findOne({
        where: {
            userId,
        },
    });
    let gameInfo = await apiClient(`games/${gameId}`);
    gameInfo = await mapGames([gameInfo]);
    if (search) {
        let providersCreate = await Providers.create();
        providersCreate.userId = userId;
        providersCreate.videoGamesPropor = [...gameInfo];
        providersCreate.income =  providersCreate.income;
        providersCreate.save();
        return res.status(200).json(providersCreate);
    }
    let verify = search.toJSON();
    if (verify.videoGamesPropor.find((ele) => ele.id.toString() === gameId)) {
        return res.status(400).json({
            message: "the game already exists",
        });
    }
    search.videoGamesPropor = [...search.videoGamesPropor, ...gameInfo];
    search.save();
    return res.status(200).json(search);
 } catch (error) {
    res.status(400).json({
        error: error.message,
    });
 }
};
module.exports = {
    registerProvider
};
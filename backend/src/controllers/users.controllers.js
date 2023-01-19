const { Users } = require("../models/users");
const { ProviderAplication } = require("../models/providerAplication")

const updateUserProfile = async (req, res) => {
    const { id } = req.params;
    const userUpdate = req.body;
    try {
        const user = await Users.findByPk(id);
        user.update(userUpdate);
        await user.save();

        res.json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const providerAplication = async (req, res) => {
         const { userId } = req.params 
         const informacionDeSolicitud = req.body 
         try {
            const infoTemporal = await ProviderAplication.create({
                id_user: userId,
                email: informacionDeSolicitud.email,
                complete_name: informacionDeSolicitud.complete_name,
                reason_aplication: informacionDeSolicitud.reason_aplication,
                game_engine: informacionDeSolicitud.game_engine,
                micro_transactions: informacionDeSolicitud.micro_transactions
            })
            res.status(200).json(infoTemporal)
         } catch (error) {
            res.status(500).json({
                error: error.message,
            });
         }
};

module.exports = {
    updateUserProfile,
    providerAplication
};

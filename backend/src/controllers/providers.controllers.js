
const {Providers}= require("../models/providers")

//crear un proveedor

const registerProvider = async (req, res) => {
    const { profits, videoGamesPropor} = req.body;
    try {
        if (!profits||!videoGamesPropor){
            res.status(400).json({
                message:"faltan campos requeridos"
            })
        }else{
         
            const createUser = await Providers.create({
                profits, videoGamesPropor
            });

            res.status(200).json({createUser});


        }
        
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
   
};
module.exports = {
    registerProvider
};



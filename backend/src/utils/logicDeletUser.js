const { Users } = require("../models/users")
const { inactiveUsers } = require("../models/inactiveUsers")
const { Compras } = require("../models/compras")

const logicDeletUser = async (userId) => {
    if(userId){
        const user = await Users.findOne({
            where: {
                userId,
            }, include:[{
                    model: Compras
                }]
            });
    console.log("obtendre la informacion del usuario con su registro de compra?", user)



        
    }
}

module.exports = {logicDeletUser}




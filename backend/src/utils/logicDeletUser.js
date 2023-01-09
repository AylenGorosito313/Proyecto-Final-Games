const { Users } = require("../models/users")
const { inactiveUsers } = require("../models/inactiveUsers")
const { Compras } = require("../models/compras")

const logicDeletUser = async (id) => {
    // buscamos el usuario que queremos eliminar, junto a su tabla de compras
        const user = await Users.findOne({
            where: {
                id,
            }, include:[{
                    model: Compras
                }]
            });

// pasamos los datos de la tabla de usuario a inactiveUsers
   const inactivarUsuario = await inactiveUsers.create({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        proveedor: user.proveedor,
        passwordHash: user.passwordHash,
        birth_date: user.birth_date,
        favoritos: user.favoritos,
        profile_img: user.profile_img,
        purchased_games: user.compras
   })

// dropeamos la tabla de users 
   const dropTable = await Users.destroy({
    where: {
      id: id
    }
  })

  return dropTable; 
 
}

module.exports = {logicDeletUser}


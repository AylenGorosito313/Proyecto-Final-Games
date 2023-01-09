const { Users } = require("../models/users")
const { inactiveUsers } = require("../models/inactiveUsers")
const { Compras } = require("../models/compras")

const logicDeletUser = async (id) => {
        const user = await Users.findOne({
            where: {
                id,
            }, include:[{
                    model: Compras
                }]
            });
    // console.log("obtendre la informacion del usuario con su registro de compra?", user)
    // const idCompra = user.compra.map(el => el.id)

   const inactivarUsuario = await inactiveUsers.create({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        proveedor: user.proveedor,
        passwordHash: user.passwordHash,
        birth_date: user.birth_date,
        profile_img: user.profile_img,
        purchased_games: user.compras
   })
//    console.log("console.log de inactivarUsuario", inactivarUsuario)

   const dropTable = await Users.destroy({
    where: {
      id: id
    }
  })

  return dropTable; 
 
}

module.exports = {logicDeletUser}

// mediante el include, tengo el modelo de compras, me gustaria poder acceder al id de cada videojuego comprado por el usuario asi guardaria una referencia 
// deberia crear una tabla nueva con toda la informacion que me traje del usuario,



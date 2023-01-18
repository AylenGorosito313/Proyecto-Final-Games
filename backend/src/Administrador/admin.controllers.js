// meteme eso admin en la tabla 
// usuario que sea admin? 
// admin que tenga una ruta predeterminada para crear otros admins
// loggin para el admin
// ingreso por el mismo logging del usuario y dentro del home haya un boton que nos deribe al panel del admin
// ingros del admin directamente al perfil? 
// solo ingresar con el mail y la contraseña 
// la contraseña tendria que ser otro atributo en la tabla 
// crear una ruta donde el 1er admin mandara mail de los demas admins  
// contraseña por defecto
// crear un formulario para enviar los datos de los nuevos admins? 
// 

const { Admin } = require("../models/admin");

const createNewAdmin = async (req, res) => {
    const {adminId} = req.query
    const admin = req.body;
    try {
        if(!adminId){
           return res.status(400).json({message:"introdusca el id"})
        } 
        const searchAdmin = await Admin.findByPk(adminId)
        // console.log("aca esta el resultado de searchAdmin", searchAdmin)
        
        const newAdmin = searchAdmin === null ? false
        : true 
        if(newAdmin){
          const adminCreado = await Admin.create(admin)
          console.log("aca esta el resultado del usuario creado", adminCreado)
       }
     
        res.status(200).json({message:"administrador creado con exito"})
       
    } catch (error) {
         res.status(500).json({
            error: error.message,
        });
    }

}

module.exports = {createNewAdmin}
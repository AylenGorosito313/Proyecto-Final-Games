const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Admin } = require("../models/admin");
const { SECRET_PASSOWORD_ADMIN, SECRET } = process.env;

const createNewAdmin = async (req, res) => {
    const admin = req.body;
    try {
        const searchAdmin = await Admin.findOne({
            where: {
                mail: admin.acountAdmin,
            },
        });
        if (!searchAdmin || SECRET_PASSOWORD_ADMIN !== admin.secret_password) {
            return res.status(401).json({
                message:
                    "You do not have authorization to create an admin user",
            });
        }
        const newAdmin = searchAdmin === null ? false : true;
        if (newAdmin) {
            const passwordHash = await bcrypt.hash(admin.password, 10);
            await Admin.create({
                name: admin.name,
                mail: admin.mail,
                password: passwordHash,
            });
        }
        res.status(200).json({ message: "administrador creado con exito" });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const adminLogin = async (mail, password) => {

    try {
        console.log('entre');
        const searchAdmin = await Admin.findOne({
            where: {
                mail,
            },
        });
        if(!searchAdmin){
            return
        }
        const passwordVerify = await bcrypt.compare(password, searchAdmin.password)
        if(!passwordVerify){
            return
        }

        const tokenForAdmin = {   
            id: searchAdmin.id,
            mail,  
        };
        const token = jwt.sign(tokenForAdmin, SECRET);
        return ({
            id: searchAdmin.id,
            name: searchAdmin.name,
            token,
            isAdmin: true
        });

        console.log('termine');

    } catch (error) {
        return ({
            error: error.message
        })
    }
};



module.exports = { createNewAdmin, adminLogin };

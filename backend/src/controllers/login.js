const jwt = require("jsonwebtoken");
const { Users } = require("../models/users");
const bcrypt = require("bcrypt");
const mainToEmail = require("../services/nodeMails");
const { createUser, verifyUser } = require("./createUserAndVerify");
const sendMail = require("../services/sendMail");
const { adminLogin } = require("../Administrador/admin.controllers");
const { SECRET } = process.env;
let userInfo = {};

const registerUser = async (req, res) => {
    const { name, lastName, email, password, birth_date, profile_img, region } =
        req.body;
    
        console.log( name, lastName, email, password, profile_img )

    if (!name || !lastName || !email || !password) {
        res.status(400).json({
            message: "Required fields",
        });
    }
    try {
        const token = jwt.sign({ name, email }, SECRET, {
            expiresIn: "1h",
        });
        let html = `
        <b> Hello ${name} Click on the following link to verify your account </b>
        <a href="http://127.0.0.1:5173/user/login?verify=${token}">Click here</a>
      `;

        let message = sendMail(
            '"Verify your acount 👻" <andromedagames1507@gmail.com>',
            email,
            "Verify your acount ✔",
            html
        );
        // send mail with defined transport object
        await mainToEmail(message);
        userInfo = req.body;
        res.status(200).json({
            message: "Check your mail",
        });
    } catch (error) {
        return res.status(400).json("oops something went wrong");
    }
};

const loginUser = async (req, res) => {
    const { email, password, verify, Auth, name, lastName, profile_img  } = req.body;
 
    // {  
    //     email: user && user.email,
    //     password: "Telefono31#",
    //     name: user && user.nickname,
    //     lastName: user && user.nickname,
    //     profile_img: user && user?.picture,
    //     Auth: true,
    //   };

    if(Auth){
        let createdUser = await createUser({
            email,
            password,
            name,
            lastName,
            profile_img
        });
        console.log(createdUser);
        const tokenForUser = {
            id: createdUser.id,
            name: createdUser.name,
        };
        const token = jwt.sign(tokenForUser, SECRET);
        return res.status(200).json({
            id: createdUser.id,
            name: createdUser.name,
            token, 
        });

    }

    let user = {};
    const search = await Users.findOne({
        where: {
            email,
        },
    });

    let adminUser = await adminLogin(email, password)
    console.log(adminUser);
    if(adminUser?.isAdmin){
        return res.status(200).json(adminUser) 
    }
    let userLoggin = search === null ? verifyUser(verify) : true;

    if (!verify && !search) {
        return res.status(400).json("You must verify your account");
    }
    if (!userLoggin) {
        return res.status(400).json("your token has expired");
    }

    if (!search) {
        let createdUser = await createUser(userInfo);
        user = createdUser;
    }

    if (search || userLoggin) {
        try {
            let pass =
                search === null ? user.passwordHash : search.passwordHash;
            console.log(pass);
            const passworCorrect = await bcrypt.compare(password, pass);

            if (!passworCorrect) {
                return res.status(401).json("invalid user or password");
            }
            let id = search === null ? user.id : search.id;
            let name = search === null ? user.name : search.name;
            const tokenForUser = {
                id,
                name,
            };
            const token = jwt.sign(tokenForUser, SECRET);
            return res.status(200).json({
                id,
                name,
                token,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
};

module.exports = { registerUser, loginUser };

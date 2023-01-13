const jwt = require("jsonwebtoken");
const { Users } = require("../models/users");
const bcrypt = require("bcrypt");
const mainToEmail = require("../services/nodeMails");
const { SECRET } = process.env;
let userInfo = {}; 

const registerUser = async (req, res) => {
    const { name, lastName, email, password, birth_date, profile_img, region } =
        req.body;

    if (!name || !lastName || !email || !password) {
        res.status(400).json({
            message: "Required fields", 
        });
    }
    try {
        const passwordHash = await bcrypt.hash(name, 10);
        // send mail with defined transport object
        await mainToEmail({
            from: '"Verify your acount 👻" <andromedagames1507@gmail.com>',
            to: email, // list of receivers
            subject: "Verify your acount ✔", // Subject line
            html: `
              <b> Hello ${name} Click on the following link to verify your account </b>
              <a href="http://127.0.0.1:5173/user/login?verify=${passwordHash}">Click here</a>
            `,
        });
        userInfo = req.body;
        res.status(200).json({
            message: 'Check your mail'
        });
    } catch (error) {
        console.log(error);
    }

    // try {
    //     if (!name || !lastName || !email || !password ) {
    //         res.status(406).json({
    //             message: "Not acceptable",
    //         });
    //     } else {
    //         const passwordHash = await bcrypt.hash(password, 10);
    //         const createUser = await Users.create({
    //             name,
    //             lastName,
    //             email,
    //             birth_date,
    //             profile_img,
    //             region,
    //             passwordHash
    //         });

    //         res.status(201).json({message: 'User created'});
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
};

const createUser = async (user) => {
    const passwordHash = await bcrypt.hash(userInfo.password, 10);
    const createUser = await Users.create({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        birth_date: user.birth_date,
        profile_img: user.profile_img,
        region: user.region,
        passwordHash,
    });
};

const loginUser = async (req, res) => {
    const { email, password, verify } = req.body;

    const search = await Users.findOne({
        where: {
            email,
        },
    });
    if (!search && verify !== null) { 
        await createUser(userInfo);
    }

    if(search){
        try {
            let pass = search.passwordHash;
            const passworCorrect =
                search === null ? false : await bcrypt.compare(password, pass);
    
            if (!passworCorrect) {
                return res.status(401).json({
                    message: "invalid user or password",
                });
            }
    
            let id = search.id;
            let name = search.name; 
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

    if(!verify){
       return res.status(400).json("You must verify your account")
    }

    let userLoggin = await bcrypt.compare(userInfo.name, verify)

    if (!userLoggin) {
        return res.status(400).json("You must verify your account")
    }

    
};

module.exports = { registerUser, loginUser };

const jwt = require("jsonwebtoken");
const { Users } = require("../models/users");
const bcrypt = require("bcrypt");
const mainToEmail = require("../services/nodeMails");
const { createUser, verifyUser } = require("./createUserAndVerify");
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
        const token = jwt.sign({ name, email }, SECRET, {
            expiresIn: "1h",
        });
        // send mail with defined transport object
        await mainToEmail({
            from: '"Verify your acount 👻" <andromedagames1507@gmail.com>',
            to: email, // list of receivers
            subject: "Verify your acount ✔", // Subject line
            html: `
              <b> Hello ${name} Click on the following link to verify your account </b>
              <a href="http://127.0.0.1:5173/user/login?verify=${token}">Click here</a>
            `,
        });
        userInfo = req.body;
        res.status(200).json({
            message: "Check your mail",
        });
    } catch (error) {
        return res.status(400).json("oops something went wrong");
    }
};

const loginUser = async (req, res) => {
    const { email, password, verify } = req.body;

    let user = {};
    const search = await Users.findOne({
        where: {
            email,
        },
    });
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

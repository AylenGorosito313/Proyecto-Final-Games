const jwt = require("jsonwebtoken");
const { Users } = require("../models/users");
const bcrypt = require("bcrypt");
const { SECRET } = process.env

const registerUser = async (req, res) => {
    const { name, lastName, email, password, birth_date, profile_img, region } = req.body;

    try {
        if (!name || !lastName || !email || !password ) {
            res.status(406).json({
                message: "Not acceptable",
            });
        } else {
            const passwordHash = await bcrypt.hash(password, 10);
            const createUser = await Users.create({
                name,
                lastName,
                email,
                birth_date,
                profile_img,
                region,
                passwordHash
            });

            res.status(201).json({message: 'User created'});
        }
    } catch (error) {
        console.log(error);
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const searchUser = await Users.findOne({
            where: {
                email,
            },
        });
        let pass = searchUser.dataValues.passwordHash;
        const passworCorrect =
            searchUser === null ? false : await bcrypt.compare(password, pass);

        if (!passworCorrect) {
            return res.status(401).json({
                message: "invalid user or password",
            });
        }

        let id = searchUser.dataValues.id;
        let name = searchUser.dataValues.name;
        const tokenForUser = {
            id,
            name,
        };
        const token = jwt.sign(tokenForUser, SECRET);
        res.status(200).json({
            id,
            name,
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = { registerUser, loginUser };

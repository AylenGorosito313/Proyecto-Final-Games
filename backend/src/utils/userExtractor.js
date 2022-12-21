const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

module.exports = (req, res, next) => {
    try {
        let authorizacion = req.get("Authorization");
        let token = "";

        if (!authorizacion)
            return res.status(401).json({ error: "token must be provided" });

        if (authorizacion && authorizacion.toLowerCase().startsWith("bearer")) {
            token = authorizacion.substring(7);
        }

        const decodedToken = jwt.verify(token, SECRET);

        if (!decodedToken || !decodedToken.id) {
            return res
                .status(401)
                .json({ message: "token missing or invalid" });
        }
        next();
    } catch (error) {
        res.status(401).json({
            error: "token missing or invalid",
        });
    }
};

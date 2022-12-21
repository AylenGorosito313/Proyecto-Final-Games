const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

module.exports = (req, res, next) => {
    try {
        //authorizacion la optenemos del request headers
        let authorizacion = req.get("Authorization");
        let token = "";

        //verificamos si no nos mandaron el header Authorizacion
        if (!authorizacion)
            return res.status(401).json({ error: "token must be provided" });

        //si tenemos authorizacion verificamos que tengamos la parte de bearer y tomamos solo la parte del token 
        if (authorizacion && authorizacion.toLowerCase().startsWith("bearer")) {
            token = authorizacion.substring(7);
        }

        //decodificamos el token con la palabra secreta
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

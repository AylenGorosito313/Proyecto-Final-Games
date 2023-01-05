const addPurchaseUser = require("../utils/addPurchaseUser");

const userPurchase = (req, res) => {
    const { userId } = req.query;

    try {
        let result = addPurchaseUser(userId)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
};


module.exports = userPurchase
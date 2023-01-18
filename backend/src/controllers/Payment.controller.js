const { Users } = require("../models/users");
const {
    createPayment,
    createSubscription,
} = require("../services/PaymentService");
const addPurchaseUser = require("../utils/addPurchaseUser");
const getItemsCar = require("../utils/getItemsCar");

const getPaymentLink = async (req, res) => {
    const { id } = req.query;

    try {
        if (!id) {
            return res.status(400).json({
                message: "id has must provider",
            });
        }
        let carItems = await getItemsCar(id);
        if (!Array.isArray(carItems)) {
            return;
        }
        const payment = await createPayment(carItems, id);
        return res.json(payment.init_point);
    } catch (error) {
        return res
            .status(500)
            .json({ error: true, msg: "Failed to create payment" });
    }
};

const getSubscriptionLink = async (req, res) => {
    try {
        const subscription = createSubscription();

        return res.json(subscription);
    } catch (error) {
        console.log(error);

        return res
            .status(500)
            .json({ error: true, msg: "Failed to create subscription" });
    }
};

const paymentSuccsess = async (req, res) => {
    const { userId } = req.query;
    try {
        const createPurchase = await addPurchaseUser(userId);
        res.status(200).json({ createPurchase });
    } catch (error) {
        console.log(error);
    }
};

const paymentOneItem = async (req, res) => {
    const game = req.body;
    const { id } = req.query;

    try {
        if (!game) {
            return res.status(400).json("Game info is require");
        }
        let user = await Users.findByPk(id);
        if (!user) {
            return res.status(400).json("you are not logged")
        }
        const payment = await createPayment([game], id);
        return res.json(payment.init_point);

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getPaymentLink,
    getSubscriptionLink,
    paymentSuccsess,
    paymentOneItem,
};

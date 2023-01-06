const {
    createPayment,
    createSubscription,
} = require("../services/PaymentService");
const addPurchaseUser = require("../utils/addPurchaseUser");
const getItemsCar = require("../utils/getItemsCar");

const getPaymentLink = async (req, res) => {
    const { id } = req.query;
    try {
        let carItems = await getItemsCar(id);
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

const paymentSuccsess = async(req, res) => {
    const { userId } = req.query;
    try {
        const createPurchase = await addPurchaseUser(userId)
        res.status(200).json({createPurchase})
    } catch (error) {
        console.log(error)
    }
};

module.exports = { getPaymentLink, getSubscriptionLink, paymentSuccsess };

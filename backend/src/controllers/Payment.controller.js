const {
    createPayment,
    createSubscription,
} = require("../services/PaymentService");
const getItemsCar = require("../utils/getItemsCar");

const getPaymentLink = async (req, res) => {
    const { id } = req.query;
    try {
        let carItems = await getItemsCar(id);
        const payment = await createPayment(carItems);
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

module.exports = { getPaymentLink, getSubscriptionLink };

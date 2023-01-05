const {createPayment , createSubscription} = require("../services/PaymentService")




const getPaymentLink = async (req, res) => {
  const games = req.body;
  try {
    const payment = await createPayment(games);
    return res.json(payment.init_point);
  } catch (error) {
    console.log(error);

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

module.exports = { getPaymentLink , getSubscriptionLink};

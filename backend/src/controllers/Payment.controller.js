const {createPayment , createSubscription} = require("../services/PaymentService")




const getPaymentLink = async (req, res) => {
  const { name, img, id, genres, price } = req.body;
console.log(name, img, id, genres, price)
  try {
    const payment = await createPayment({
      name,
      img,
      id,
      genres,
      price
    });
    console.log(payment.init_point)
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

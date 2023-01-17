const express = require("express");
const { Router } = require("express");

const {
  getPaymentLink,
  getSubscriptionLink,
  paymentSuccsess,
} = require("../controllers/Payment.controller");

const paymentRouter = Router();


paymentRouter.get("/payment", getPaymentLink);
paymentRouter.get("/subscription", getSubscriptionLink);
paymentRouter.get('/payment/success', paymentSuccsess)

module.exports = paymentRouter;

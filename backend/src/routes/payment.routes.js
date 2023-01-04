const express = require("express");
const { Router } = require("express");

const {
  getPaymentLink,
  getSubscriptionLink,
} = require("../controllers/Payment.controller");

const paymentRouter = Router();


paymentRouter.post("/payment", getPaymentLink);

paymentRouter.get("/subscription", getSubscriptionLink);

module.exports = paymentRouter;

const express = require("express");
const { Router } = require("express");

const {
  getPaymentLink,
  getSubscriptionLink,
} = require("../controllers/Payment.controller");
// const PaymentService = require("../services/PaymentService");
const paymentRouter = Router();
// const PaymentInstance = new PaymentController(new PaymentService());

paymentRouter.post("/payment", getPaymentLink);

paymentRouter.get("/subscription", getSubscriptionLink);

module.exports = paymentRouter;

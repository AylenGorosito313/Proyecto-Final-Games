const express = require("express");
const { Router } = require("express");

const { PaymentController } = require("../controllers/Payment.controller");
const PaymentService = require("../services/PaymentService");
const paymentRouter = Router();
const PaymentInstance = new PaymentController(new PaymentService());


paymentRouter.get("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

paymentRouter.get("/subscription", function (req, res, next) {
  PaymentInstance.getSubscriptionLink(req, res);
});


module.exports = paymentRouter ;
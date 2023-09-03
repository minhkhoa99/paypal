const express = require("express");
const router = express.Router();
const payment = require("../controllers/paypal.controller");

router.post("/pay", payment.getPaymentPaypal);

module.exports = router;

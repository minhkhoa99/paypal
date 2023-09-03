const express = require("express");
const router = express.Router();
const payment = require("../controllers/paypalSuccess.controller");

router.get("/success", payment.paymentSuccess);

module.exports = router;

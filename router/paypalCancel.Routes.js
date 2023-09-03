const express = require("express");
const router = express.Router();
const payment = require("../controllers/paypalCancel.controller");

router.post("/cancel", payment.paymentCancel);

module.exports = router;

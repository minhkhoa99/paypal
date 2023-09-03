const express = require("express");
const ejs = require("ejs");
const paypal = require("paypal-rest-sdk");
const paymentRouter = require("./router/paypal.Routes");
const paymentSuccessRouter = require("./router/paypalSuccess.Routes");
const paymentCancelRouter = require("./router/paypalCancel.Routes");

paypal.configure({
  mode: "live", //sandbox or live
  client_id:
    "AadrpOQSKIsgracgHSQcEZftKefWbHc-8s2iyoeW4aFpiy0qRXj5sQ4LFsAd_hKoFu_cK5nyTrXnCdai",
  client_secret:
    "EC7tAYpOv-qcnM3s28QvQY8jxDgFBEzD3eytVJzzJ-Dm0EeqORbETjcTxMTBlw1vkwdY4G1Fv_eDpLd3",
});

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.use(paymentRouter);

app.use(paymentSuccessRouter);

app.use(paymentCancelRouter);

app.listen(3000, () => console.log("Server Started localhost:3000"));

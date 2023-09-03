const paypal = require("paypal-rest-sdk");
const getPaymentPaypal = async (req, res) => {
  const { RETURN_URL, CANCEL_URL, METHOD } = process.env;
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: METHOD,
    },
    redirect_urls: {
      return_url: RETURN_URL,
      cancel_url: CANCEL_URL,
    },
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "1",
        },
        description: "Iphone 4S cũ giá siêu rẻ",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
};

module.exports = {
  getPaymentPaypal,
};

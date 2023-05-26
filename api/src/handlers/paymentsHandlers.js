const mercadopago = require("mercadopago");
require('dotenv').config();
const { MERCADOPAGO_KEY } = process.env;
const { HOST } = require("../config.js");

const paymentHandler = async (req, res) => {
  const { id , name , image , description , price } = req.body;
  // mercadopago.configure({ access_token: MERCADOPAGO_KEY });
  mercadopago.configurations.setAccessToken(MERCADOPAGO_KEY);
  
    try {
      mercadopago.preferences.create({
        items: [
          {
            id: id,
            title: name,
            unit_price: price,
            currency_id: "UYU",
            picture_url: image,
            description: description,
            quantity: 1,
          },
        ],
        notification_url: "https://18ef-181-167-187-75.ngrok-free.app/payments/notifications",
        back_urls: {
          success: `${HOST}/payments/success`,
          pending: "",
          failure: "",
        },
        auto_return: "approved",
        binary_mode: true,
      }).then((response) => res.status(200).send({response})).catch((error) => res.status(400).send({error}));
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

  const paymentNotificationHandler = async (req, res) => {
    try {
      const payment = req.query;
      if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment['data.id']);
        console.log(data);
        // console.log("date_approved",data.mercadopagoResponse.date_approved);
        // console.log("order.id",data.mercadopagoResponse.order.id);
        // console.log("payer.email",data.mercadopagoResponse.payer.email);
        // console.log("payer.id",data.mercadopagoResponse.payer.id);
        // console.log("status",data.mercadopagoResponse.status);
        // console.log("transaction_amount",data.mercadopagoResponse.transaction_amount);
        // console.log("point_of_interaction",data.mercadopagoResponse.point_of_interaction);
        return res.status(200).send("OK");
      }
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
  }
};

const paySuccsessHandler = async (req, res) => {
  const { payment_id , status , payment_type } = req.query;
  try {
    console.log("este es el paymentid:",payment_id);
    console.log("este es el status:",status);
    console.log("este es el paymentType:",payment_type);
    res.status(201).send(`success: ID:${payment_id} STATUS:${status} PAYTYPE: ${payment_type}`);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports = {
    paymentHandler,
    paymentNotificationHandler,
    paySuccsessHandler
}

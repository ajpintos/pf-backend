const mercadopago = require("mercadopago");
require('dotenv').config();
const { MERCADOPAGO_KEY } = process.env;

mercadopago.configurations.setAccessToken(MERCADOPAGO_KEY);

const paymentHandler = async (req, res) => {
    const { id , name , image , description , price } = req.body;
    mercadopago.configure({
      access_token: MERCADOPAGO_KEY,
    });

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
        notification_url: "https://9f56-181-167-187-75.sa.ngrok.io/notifications",
        back_urls: {
          success: "http://localhost:3001/success",
          pending: "",
          failure: "",
        },
        auto_return: "approved",
        binary_mode: true,
      }).then((response) => res.status(200).send({response})).catch((error) => res.status(400).send({error}));
  
    //   console.log(result);
  
    //   // res.json({ message: "Payment creted" });
    //   res.json(result.body);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

  const receiveWebhook = async (req, res) => {
    try {
      const payment = req.query;
      console.log(payment);
      if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment['data.id']);
        console.log(data);
      }
  
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

module.exports = {
    paymentHandler,
    receiveWebhook
}

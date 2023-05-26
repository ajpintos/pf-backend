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
        notification_url: "https://35b6-167-63-9-177.ngrok-free.app/payments/notifications",
        back_urls: {
          success: "https://biofresh.shop/",
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

  const notifications = async (req, res) => {
    try {
      const payment = req.query;
      if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment['data.id']);
        return res.status(204).json(data);
      }
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

module.exports = {
    paymentHandler,
    notifications
}

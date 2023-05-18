const mercadopago = require("mercadopago");
require('dotenv').config();


mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY});

const paymentHandler = async (req, res) => {
    const product = req.body;
    let preference = {
        items: [{
            id: product.id,
            title: product.name,
            currency_id: "UYU",
            picture_url: product.image,
            description: product.description,
            category_id: "articulo",
            quantity: 1,
            unit_price: product.price
        }],
        back_urls: {
            success: "http://localhost:3000/checkout/success",
            failure: "http://localhost:3000/checkout/failure",
            pending: "",
        },
        auto_return: "approved",
        binary_mode: true,
    }
    mercadopago.preferences.create(preference).then((response) => res.status(200).send({response})
).catch((error) => res.status(400).send({error}));
};

module.exports = {
    paymentHandler
}
